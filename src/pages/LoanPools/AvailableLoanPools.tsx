import React, { useCallback } from 'react';
import { Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { LoanPoolsModel } from 'interfaces/models/LoanPoolsModel';
import { LoanPoolCard } from './LoanPoolCard';

const AvailableLoanPools = () => {
  const fetchLoanPools = useCallback(async () => {
    const { data } = await axios.get('http://localhost:3000/loan-pools');
    return data;
  }, []);
  const { data: loanPools } = useQuery({
    queryKey: ['LOAN_POOLS'],
    queryFn: fetchLoanPools,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  console.log({ loanPools });
  return (
    <Grid container paddingY={2.65}>
      {loanPools?.map((loanPool: LoanPoolsModel) => (
        <Grid key={loanPool.id} item xs={12} md={6} pr={2} pb={2}>
          <LoanPoolCard loanPool={loanPool} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AvailableLoanPools;
