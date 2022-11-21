import { Button, styled } from '@mui/material';

export const EditBtnStyle = {
  position: 'absolute',
  top: '10px',
  right: '15px',
  padding: '0.3rem',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: 'secondary.light'
  }
};

export const SaveBtn = styled(Button)(() => ({
  borderRadius: '4px',
  padding: '0.3rem 1rem',
  marginLeft: '0.5rem',
  position: 'absolute',
  top: '6px',
  right: '55px'
}));
