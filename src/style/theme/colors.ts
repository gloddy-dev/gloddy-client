import { PALETTE } from '../../constants/palette';

export const colors = {
  // Background Colors
  white: PALETTE.white,
  sub: PALETTE.gray['050'],
  button: PALETTE.gray['200'],
  divider: PALETTE.gray['100'],
  'card-ui': PALETTE.gray['030'],
  'brand-color': PALETTE.blue['050'],
  'warning-color': PALETTE.red['050'],

  // Border Colors
  border: {
    default: PALETTE.gray['300'],
    pressed: PALETTE.gray['900'],
    disabled: PALETTE.gray['100'],
  },

  // Brand Colors
  'primary-light': PALETTE.blue['200'],
  primary: PALETTE.blue['500'],
  'primary-dark': PALETTE.blue['700'],

  // Sign Colors (text & icon)
  sign: {
    cto: PALETTE.black,
    brand: PALETTE.blue['500'],
    primary: PALETTE.blue['900'],
    secondary: PALETTE.gray['700'],
    tertiary: PALETTE.gray['600'],
    sub: PALETTE.gray['500'],
    caption: PALETTE.gray['400'],
    white: PALETTE.white,
  },

  // Status Colors
  'warning-light': PALETTE.red['200'],
  warning: PALETTE.red['500'],
  success: {
    cto: PALETTE.blue['500'],
    text: PALETTE.blue['600'],
  },

  /**
   * ################################
   * @deprecated
   */
  blue: '#1249FC',
  blue2: '#ABC1FC',
  blue3: '#3A6DFC',

  yellow: '#FFE605',
  orange: '#D7533E',

  black: '#1A1A1A',
  black2: '#010101',

  gray: '#3a3a3a',
  gray2: '#AAAAAA',
  gray3: '#CDCDCD',
  gray4: '#B7B7B7',
  gray5: '#F6F6F6',
  gray6: '#F5F5F5',
  gray7: '#666',
  gray8: '#ECEBEB',
  gray9: '#E5E5E5',

  // white: '#FFFFFF',
  white2: '#F7F7F7',
  white3: '#EAEAEA',
  white4: '#F8F8F8',
  /**
   * ################################
   */
} as const;
