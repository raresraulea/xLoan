// import { PaletteOptions } from '@mui/material';
import {
  PaletteOptions,
  SimplePaletteColorOptions
} from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export default function themeTypography(
  colors: PaletteOptions
): TypographyOptions {
  return {
    fontFamily: 'IBM Plex Sans',
    fontSize: 14,
    h1: {
      fontFamily: 'IBM Plex Sans',
      fontSize: '2.6rem', // 43.2px
      fontWeight: '500',
      color: colors.text?.primary
    },
    h2: {
      fontFamily: 'IBM Plex Sans',
      fontSize: '1.25rem', // 20px
      fontWeight: '500 !important',
      color: colors.text?.primary
    },
    h3: {
      fontFamily: 'IBM Plex Sans',
      fontSize: '1.1rem',
      fontWeight: '400',
      color: (colors.primary as SimplePaletteColorOptions).main
    },
    h4: {
      fontFamily: 'IBM Plex Sans',
      fontSize: '1rem', // 16px
      fontWeight: 200,
      color: (colors.primary as SimplePaletteColorOptions).main
    },
    h5: {
      fontFamily: 'IBM Plex Sans',
      fontSize: '0.875rem', // 14px
      fontWeight: '400 !important',
      color: (colors.error as SimplePaletteColorOptions).light
    },
    h6: {
      lineHeight: 'initial',
      fontFamily: 'IBM Plex Sans',
      fontSize: '0.813rem', // 13px
      fontWeight: '500',
      color: (colors.primary as SimplePaletteColorOptions).main
    },
    button: {
      lineHeight: 'initial',
      fontFamily: 'IBM Plex Sans',
      textTransform: 'capitalize',
      fontWeight: '700',
      fontSize: '0.875rem' // 14px
    }

    // ml1 = 0.5rem
    // ml2 = 1rem
    // ml3 = 1.56rem
  };
}
