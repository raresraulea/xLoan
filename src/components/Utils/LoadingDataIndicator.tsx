import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CenteredBox } from './styled';

type Props = {
  dataName: string;
};

const LoadingDataIndicator = ({ dataName }: Props) => {
  return (
    <CenteredBox
      sx={{ justifyContent: 'start !important', marginTop: '1.5rem' }}
    >
      <CircularProgress />
      <Box sx={{ marginLeft: '10px' }}>
        <Typography>{`Loading ${dataName}s`}...</Typography>
      </Box>
    </CenteredBox>
  );
};

export default LoadingDataIndicator;
