import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

//* Configuration Dark Mode on App
const configThemeMode = {
   initialColorMode: 'light',
   useSystemColorMode: false,
}

const styles = {
   global: props => ({
      body: {
         bg: mode('bg_light', 'bg_dark')(props),
      },
   }),
};

const colors = {
   bg_dark: "var(--bg-dark)",
   bg_light: "var(--bg-light)",

   green: {
      50: 'var(--green-10)',
   },

   white: {
      50: "var(--white-50)",
      100: "var(--white-100)",
      150: "var(--white-150)",
      200: "var(--white-200)",
      300: "var(--white-300)",
      400: "var(--white-400)",
   },
   gray: {
      20: "var(--gray-20)",
      30: "var(--gray-30)",
      40: "var(--gray-10)",
      50: "var(--gray-50)",
      100: "var(--gray-100)",
      200: "var(--gray-200)",
      300: "var(--gray-300)",
      400: "var(--gray-400)",
      500: "var(--gray-500)",
      600: "var(--gray-600)",
      700: "var(--gray-700)",
      800: "var(--gray-800)",
      900: "var(--gray-900)",
      950: "var(--gray-1000)",
      850: "var(--gray-2000)",
   },
   red: {
      10: "var(--red-10)",
      100: "var(--red-100)",
      200: "var(--red-200)",
      300: "var(--red-300)",
      400: "var(--red-400)",
      500: "var(--red-500)",
      600: "var(--red-600)",
      700: "var(--red-700)",
      800: "var(--red-800)",
      900: "var(--red-900)",
   },
   blue: {
      10: "var(--blue-10)",
      20: "var(--blue-20)",
      30: "var(--blue-30)",
      40: "var(--blue-40)",
      50: "var(--blue-50)",
      60: "var(--blue-60)",
      70: "var(--blue-70)",
      80: "var(--blue-80)",
      100: "var(--blue-100)",
      200: "var(--blue-200)",
      300: "var(--blue-300)",
      400: "var(--blue-400)",
      500: "var(--blue-500)",
      600: "var(--blue-600)",
      700: "var(--blue-700)",
      800: "var(--blue-800)",
      900: "var(--blue-900)",
   }
}

const breakpoints = {
   xs: '15em',
   sm: '30em',
   md: '48em',
   lg: '62em',
   xl: '80em',
   '2xl': '96em',
}

//* Include custom option in here, like colors, fonts...
export const themes = extendTheme({
   configThemeMode,
   styles,
   colors,
   breakpoints,
   fonts: {
      heading: `'Raleway', sans-serif`,
      body: `'Raleway', sans-serif`
   },
   sizes: {
      '1xs': '18rem',
      '1sm': '22rem'
   },
   spacing: {
      85: '22rem'
   }
})
