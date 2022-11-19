import { PaletteOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export interface ThemeOptions {
  palette: PaletteOptions;
  customization: {
    borderRadius: string;
  };
  typography: TypographyOptions;
}
