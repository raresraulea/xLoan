import * as React from 'react';
import { Divider, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { setGlobalModalSelectedOption } from 'redux/slices/modalsSlice';
import * as Styled from './styled';

interface BaseModalProps {
  content: React.ReactElement;
  title: string;
}

export const BaseModal = ({ content, title }: BaseModalProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(setGlobalModalSelectedOption(null));
  };

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
      boxShadow: 24
    }),
    [theme]
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Styled.ModalTitleBox>
          <Typography variant='h2'>{title}</Typography>
        </Styled.ModalTitleBox>
        <Divider />
        <Styled.ModalContentBox>{content}</Styled.ModalContentBox>
      </Box>
    </Modal>
  );
};
