import MuiGrid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const HeaderGrid = styled(MuiGrid)(() => ({
  display: 'grid',
  padding: '0.65rem 0',
  gridTemplateColumns: '15.625rem 1fr',
  gridArea: 'header'
}));
