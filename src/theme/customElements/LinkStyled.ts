import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from '../customColors';

export const LinkStyled = styled(Link)(({ theme }) => ({
  ...theme.typography.h5,
  color: colors.blue,
  textDecoration: 'underline',
  '&:hover': {
    textDecoration: 'underline'
  }
}));
