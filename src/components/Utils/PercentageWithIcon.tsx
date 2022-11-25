import React from 'react';
import { Box, Typography } from '@mui/material';

interface PercentageWithIconProps {
  icon: React.ReactNode;
  percentage: string;
}

const PercentageWithIcon = ({ icon, percentage }: PercentageWithIconProps) => {
  return (
    <Box sx={{ display: 'flex', gap: '2px' }}>
      <Typography>{icon}</Typography>
      <Typography fontSize={15} fontWeight={500}>
        {percentage}%
      </Typography>
    </Box>
  );
};

export default PercentageWithIcon;
