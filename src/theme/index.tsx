import { PaletteMode } from '@mui/material';
import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import componentStyleOverrides from './compStyleOverride';

import themePalette from './palette';
import themeTypography from './typography';

const customization = {
  borderRadius: 'none'
};

export const breakPoints = {
  values: {
    xs: 0,
    sm: 650,
    md: 900,
    lg: 1200,
    xl: 1500
  }
};
export const theme = (mode: PaletteMode): Theme => {
  const palette = themePalette(mode);
  const typography = themeTypography(palette);
  const themeOptions: ThemeOptions = {
    typography,
    palette,
    breakpoints: breakPoints
  };

  const themeValue = createTheme(themeOptions);

  themeValue.components = componentStyleOverrides({
    palette,
    customization,
    typography
  });
  return themeValue;
};

export default theme;
