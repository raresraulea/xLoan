import React from 'react';
import { Typography } from '@mui/material';
import { IDelegatedColumn } from 'interfaces/columns';

interface Props {
  columnData: IDelegatedColumn;
}

const DelegatedColumn = ({ columnData: { delegatedAmount } }: Props) => (
  <Typography fontSize={15} fontWeight={500} sx={{ paddingLeft: '0.5rem' }}>
    {delegatedAmount} $EGLD
  </Typography>
);

export default DelegatedColumn;
