import { styled, Tab } from '@mui/material';

export const TabStyled = styled(Tab)(({ theme }) => ({
  ...theme.typography.h5,
  paddingInline: '2.5rem',
  color: theme.palette.primary.main,
  opacity: '50%',
  '&.Mui-selected': {
    opacity: '100%'
  },
  [theme.breakpoints.down('lg')]: {
    paddingInline: '1.5rem'
  }
}));
