import { PALETTE } from "@/constants/palette";

export const colors = {
  // Background Colors
  'white': PALETTE.white,
  'sub': PALETTE.gray["050"],
  'divider': PALETTE.gray["100"],
  'card-ui': PALETTE.gray["030"],
  'brand-color': PALETTE.blue["050"],
  'warning-color': PALETTE.red["050"],

  // Border Colors
  border: {
    'default': PALETTE.gray["300"],
    'pressed': PALETTE.gray["900"],
    'disabled': PALETTE.gray["100"],
  },

  // Brand Colors
  'primary-light': PALETTE.blue["200"],
  'primary': PALETTE.blue["500"],
  'primary-dark': PALETTE.blue["700"],

  // Sign Colors (text & icon)
  sign: {
    'cto': PALETTE.black,
    'brand': PALETTE.blue["500"],
    'primary': PALETTE.blue["900"],
    'secondary': PALETTE.gray["700"],
    'tertiary': PALETTE.gray["600"],
    'sub': PALETTE.gray["500"],
    'caption': PALETTE.gray["400"],
    'white': PALETTE.white,
  },

  // Status Colors
  'warning': PALETTE.red["500"],
  success: {
    'cto': PALETTE.blue["500"],
    'text': PALETTE.blue["600"],
  }
} as const;
