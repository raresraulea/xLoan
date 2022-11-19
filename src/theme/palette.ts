import { PaletteMode, PaletteOptions } from '@mui/material';
import colors from './customColors';

const darkPallete: PaletteOptions = {
  background: {
    paper: colors.mainBackground,
    default: colors.backgroundDefault
  },
  primary: {
    main: colors.primaryMain,
    light: colors.ebonyClay,
    200: colors.lightWhite
  },
  secondary: {
    main: colors.secondaryMain,
    light: colors.baliHai
  },
  error: {
    main: colors.errorMain,
    light: colors?.lightDark
  },
  warning: {
    main: colors?.lightBlue,
    light: colors?.lightGrey
  },
  success: {
    main: colors.successMain
  },
  text: {
    primary: colors.primaryMain,
    secondary: colors.boxColor
  }
};

const lightPalette: PaletteOptions = {
  background: {
    paper: colors.primaryMain,
    default: colors.boxColor
  },
  primary: {
    main: colors.backgroundDefault,
    light: colors.lightBlue
  },
  secondary: {
    main: colors.ebonyClay,
    light: colors.baliHai
  },
  error: {
    main: colors.errorMain,
    light: colors.primaryMain
  },
  warning: {
    main: colors?.lightBlue,
    light: colors.primaryMain
  },
  success: {
    main: colors.successMain
  },
  text: {
    primary: colors.primaryMain,
    secondary: colors.primaryMain
  }
};

const themePalette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  ...(mode === 'light' ? lightPalette : darkPallete)
});

export default themePalette;
