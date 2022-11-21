import { Box, Select, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  borderRadius: '4px',
  border: `1px solid ${theme.palette.secondary.light}`
}));

export const ProjectName = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  marginLeft: '0.5rem',
  marginRight: '0.5rem'
}));

export const FilterSelect = styled(Select)(() => ({
  backgroundColor: 'transparent',
  border: '1px solid #edf2f49e',
  borderRadius: '4px',
  opacity: '50%',
  padding: '0rem !important'

  // TODO nu pot modifica padding-ul
}));

export const FilterText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  color: 'primary.main',
  opacity: '50%',
  marginRight: '0.8rem',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const CardTextLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRight: `1px solid ${theme.palette.secondary.light}`,
  marginBottom: '1.3rem'
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.secondary.light}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem'
}));

export const CardH6Text = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  opacity: '50%',
  marginRight: '0.3rem'
}));

export const CardFooterNumbers = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
  fontWeight: '700',
  paddingBottom: '0.3rem'
}));
