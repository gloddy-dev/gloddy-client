module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    semi: 'off',
    'no-undef': 'off',
    // Strict-boolean-expression을 사용할지 아직 결론이 나지 않아서
    'no-extra-boolean-cast': 'off',

    // union type을 받는 함수에서 모든 경우의 수에 대해 return 해도 eslint가 추론하지 못하고 있어서 warn만 하고 있음
    'getter-return': 'warn',

    // 대부분의 경우 필요가 없어서
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Hoisting을 전략적으로 사용한 경우가 많아서
    '@typescript-eslint/no-use-before-define': 'off',

    // 모델 정의 부분에서 class와 interface를 합치기 위해 사용하는 용법도 잡고 있어서
    '@typescript-eslint/no-empty-interface': 'off',

    // 모델 정의 부분에서 파라미터 프로퍼티를 잘 쓰고 있어서
    '@typescript-eslint/no-parameter-properties': 'off',

    // TypeScript에서 이미 잘 해주고 있어서
    'react/prop-types': 'off',

    // React.memo, React.forwardRef에서 사용하는 경우도 막고 있어서
    'react/display-name': 'off',

    // 탭내빙 어택 방지
    'react/jsx-no-target-blank': 'error',

    // 불필요한 Fragment 방지
    'react/jsx-no-useless-fragment': 'warn',

    'no-async-promise-executor': 'warn',

    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-empty-function': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
    '@typescript-eslint/no-unused-vars': ['warn', {ignoreRestSiblings: true}],
    'import/newline-after-import': ['error'],

    'react/jsx-uses-react': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'react/no-unstable-nested-components': 'warn',
    'prefer-destructuring': 'off',
    'no-nested-ternary': 'off',
    'global-require': 'off',
    'react/require-default-props': 'off',
    'default-case': 'warn',
    'consistent-return': 'off',
  },
};
