import React from 'react';
import { Typography } from '@mui/material';
import { CenteredBox } from './styled';

interface PercentageWithIconProps {
  icon: React.ReactNode;
  percentage: string;
}

const PercentageWithIcon = ({ icon, percentage }: PercentageWithIconProps) => {
  return (
    <CenteredBox sx={{ gap: '2px', width: '100%' }}>
      {percentage !== '∞' && <Typography>{icon}</Typography>}
      <Typography fontSize={15} fontWeight={500} textAlign='center'>
        {percentage}
        {percentage !== '∞' && '%'}
      </Typography>
    </CenteredBox>
  );
};

export default PercentageWithIcon;
