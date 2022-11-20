import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BaseModal } from 'components/Layout/Modals/BaseModal';

const LoanPoolsPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box display='flex' alignItems='center' gap={2}>
          <Typography variant='h2'>Loan Pools</Typography>
          <BaseModal
            content={<div>Create new pool</div>}
            buttonText='Create New Pool'
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoanPoolsPage;
