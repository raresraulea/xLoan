import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from './customColors';

export const opacity50 = { opacity: '50%' };
export const borderRadius6 = { borderRadius: '4px' };
export const borderRadius4 = { borderRadius: '4px' };
export const flexColumn = { display: 'flex', flexDirection: 'column' };

export const handleOverflow = (element: HTMLElement) =>
  element.scrollWidth > element.offsetWidth;

export const greenTextShadow = '0px 13px 10px rgba(71, 228, 172, 0.07)';

export const flexCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const flexColCentered = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

export const MainBox = styled(Box)(() => ({
  padding: '0.6rem 1rem 0 1rem',
  marginBottom: '2rem',
  marginTop: '5.1rem'
}));

export const ContainerMainBox = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${colors.baliHai}`,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 360
  }
}));

export const LoadingComponent = styled(CircularProgress)(() => ({
  height: '40px !important',
  width: '40px !important'
}));

export const LoadingComponentBig = styled(CircularProgress)(() => ({
  height: '100px !important',
  width: '100px !important'
}));
