import { Components, SimplePaletteColorOptions } from '@mui/material';
import palette from './palette';
import { ThemeOptions } from './types';

export default function componentStyleOverrides({
  palette
}: ThemeOptions): Components {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          fontFamily: 'IBM Plex Sans'
        },
        elevation: {
          border: 'none !important',
          backgroundColor: (palette.secondary as SimplePaletteColorOptions).main
        }
      }
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '6px !important',
          marginBottom: '0.2rem',
          boxShadow: 'none',
          backgroundImage: 'none'
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontWeight: 200,
          color: (palette.primary as SimplePaletteColorOptions).main,
          borderRadius: '4px',
          backgroundColor: (palette.error as SimplePaletteColorOptions).light,
          boxShadow: 'none'
        },
        notchedOutline: {
          border: '0 !important'
        }
      }
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          minWidth: '90px',
          color: (palette.primary as SimplePaletteColorOptions).main,
          fontFamily: 'IBM Plex Sans',
          fontWeight: 200,
          fontSize: '14px',
          letterSpacing: '0.17px',
          textAlign: 'start',
          border: 'none'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          paddingBottom: '0.3rem'
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: () => ({
          borderRadius: '4px',
          fontWeight: 'bold',
          fontSize: '13px',
          padding: '0.6rem 1rem',
          minWidth: 'unset'
        }),
        contained: ({ ownerState }) => ({
          backgroundColor:
            ownerState.color === 'primary'
              ? palette?.background?.goldish + ' !important'
              : palette?.background?.blueish,
          color:
            ownerState.color === 'primary'
              ? palette.text?.white
              : palette.text?.buttonPrimary,
          border: 'none !important',
          '&:hover': {
            backgroundColor:
              ownerState.color === 'primary'
                ? palette?.background?.goldish + ' !important'
                : palette?.background?.blueish,
            color:
              ownerState.color === 'primary'
                ? palette.text?.white
                : palette.text?.buttonPrimary
          }
        }),
        outlined: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: (palette.primary as SimplePaletteColorOptions).main,
          color: (palette.primary as SimplePaletteColorOptions).main,
          '&:hover': {
            backgroundColor: (palette.primary as SimplePaletteColorOptions)
              .main,
            color: palette.background?.default
          }
        },
        text: {
          backgroundColor: 'none',
          color: (palette.primary as SimplePaletteColorOptions).main,
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'transparent',
            color: palette.background?.paper
          }
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // backgroundColor: (palette.secondary as SimplePaletteColorOptions).main,
          backgroundColor: palette.background?.default,
          opacity: '0.6!important'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '0.2rem'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          borderBottom: 'none'
        }
      }
    },

    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: (palette.warning as SimplePaletteColorOptions).light,
          fontWeight: 200,
          fontSize: '14px',
          color: (palette.primary as SimplePaletteColorOptions).main,
          borderRadius: '0',
          padding: '0.25rem 0.7rem'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: (palette.primary as SimplePaletteColorOptions).main
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        sizeSmall: {
          fontWeight: 200,
          color: (palette.primary as SimplePaletteColorOptions).main,
          borderRadius: '4px',
          backgroundColor: (palette.error as SimplePaletteColorOptions).light,
          width: '100%',
          boxShadow: 'none',
          ':before': {
            borderBottom: 'none'
          },
          ':hover': {
            borderBottom: 'none'
          }
        }
      }
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'red'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: '15px',
          fontFamily: 'IBM Plex Sans',
          color: (palette.primary as SimplePaletteColorOptions).main,
          '&:hover': {
            color: (palette.primary as SimplePaletteColorOptions).main
          }
        },
        button: {
          fontWeight: 200,
          fontSize: '14px',
          fontFamily: 'IBM Plex Sans',
          color: palette.background?.paper
        }
      }
    },

    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '0.5rem'
        },
        standard: {
          fontSize: '12px',
          fontWeight: 200
        },
        icon: {
          color: palette.background?.paper
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: (palette.secondary as SimplePaletteColorOptions).main
        }
      }
    }
  };
}
