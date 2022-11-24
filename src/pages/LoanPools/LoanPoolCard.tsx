import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LoanPoolCardBottomContent from './LoanPoolCardBottomContent';
import LoanPoolCardTopContent from './LoanPoolCardTopContent';

export const LoanPoolCard = () => {
  return (
    <Card sx={{ borderRadius: '6px' }}>
      <CardContent sx={{ pb: 0 }}>
        <LoanPoolCardTopContent />
        <LoanPoolCardBottomContent />
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Grid container>
          <Grid item xs={6} pr={1}>
            <Button fullWidth color='primary' variant='contained' size='small'>
              Loan Funds
            </Button>
          </Grid>
          <Grid item xs={6} pl={1}>
            <Button
              fullWidth
              color='secondary'
              variant='contained'
              size='small'
            >
              Provide Funds
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
