const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  resetMocks: true,
  moduleDirectories: ['.yarn'],
  testEnvironment: 'jsdom',
  testRegex: '(/utils/.*|(\\.|/)(test))\\.[jt]sx?$',
  collectCoverageFrom: ['src/utils/**/*.{js,ts,jsx,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  coverageThreshold: null,
  setupFilesAfterEnv: ['./jest.setup.js'],
};

module.exports = createJestConfig(customJestConfig);
