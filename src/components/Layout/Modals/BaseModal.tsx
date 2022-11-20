import * as React from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { setGlobalModalSelectedOption } from 'redux/slices/modalsSlice';

interface BaseModalProps {
  content: React.ReactElement;
  buttonText: string;
}

export const BaseModal = ({
  content,
  buttonText = 'Click'
}: BaseModalProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => dispatch(setGlobalModalSelectedOption('select'));
  const handleClose = () => setOpen(false);

  const theme = useTheme();

  const style = React.useMemo(
    () => ({
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '10px',
      boxShadow: 24,
      p: 4
    }),
    [theme]
  );

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>
        {buttonText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>{content}</Box>
      </Modal>
    </div>
  );
};
