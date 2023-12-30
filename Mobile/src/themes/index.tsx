import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    transparent: 'transparent',
    background: '#FFFFFF',
    blue_dark: '#1E6F9F',
    blue: '#4EA8DE',
    purple: '#8284FA',
    purple_dark: '#5E60CE',
    danger: '#E25858',
    gray: {
      700: '#0D0D0D',
      600: '#1A1A1A',
      500: '#262626',
      400: '#333333',
      300: '#808080',
      200: '#D9D9D9',
      100: '#F2F2F2',
      
    },
  },
  fonts: {
    mono: "Inter_400Regular",
    heading:  "Montserrat_700Bold",
    //body: "Montserrat_400Regular",
    //light: "Montserrat_300Light"
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148
  }
})