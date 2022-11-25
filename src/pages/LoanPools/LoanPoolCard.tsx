import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { LoanPoolsModel } from 'interfaces/models/LoanPoolsModel';
import LoanPoolCardBottomContent from './LoanPoolCardBottomContent';
import LoanPoolCardTopContent from './LoanPoolCardTopContent';

interface IProps {
  loanPool: LoanPoolsModel;
}

export const LoanPoolCard = ({ loanPool }: IProps) => {
  const { generatedApr, interestRate, title, tokenIdentifier } = loanPool;
  return (
    <Card sx={{ borderRadius: '6px' }}>
      <CardContent sx={{ pb: 0 }}>
        <LoanPoolCardTopContent
          generatedApr={generatedApr}
          interestRate={interestRate}
          title={title ?? 'Unknown Title'}
          tokenIdentifier={tokenIdentifier}
        />
        <LoanPoolCardBottomContent />
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Grid container>
          <Grid item xs={12} md={6} pr={1}>
            <Button fullWidth color='primary' variant='contained' size='small'>
              Loan Funds
            </Button>
          </Grid>
          <Grid item xs={12} md={6} pl={1}>
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
