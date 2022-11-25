import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { ReactComponent as ElrondLogoWhite } from '../../assets/img/elrond-logo-white.svg';
import LoanPoolImage from '../../assets/img/image.png';

const SQUARE_IMAGE_WIDTH = 30;

interface IProps {
  generatedApr: number;
  interestRate: number;
  title: string;
  tokenIdentifier: string;
}

const LoanPoolCardTopContent = ({
  generatedApr,
  interestRate,
  title,
  tokenIdentifier
}: IProps) => {
  return (
    <Grid container>
      <Grid item xs={3} sm={2} md={2.2}>
        <img width={60} height={60} src={LoanPoolImage} alt='' />
      </Grid>
      <Grid item xs={9}>
        <Box
          height={'100%'}
          display='flex'
          flexDirection='column'
          justifyContent='space-evenly'
        >
          <Typography>{title}</Typography>
          <Box display='flex' justifyContent='space-between' width='100%'>
            <Box display='flex' alignItems='center'>
              <ElrondLogoWhite
                width={SQUARE_IMAGE_WIDTH}
                height={SQUARE_IMAGE_WIDTH}
                className='mr-3'
              />
              <Box>
                <Typography fontSize={12}>${tokenIdentifier}</Typography>
                <Typography fontSize={10} color='text.secondary'>
                  $50.21
                </Typography>
              </Box>
            </Box>
            <Box
              height={'100%'}
              display='flex'
              flexDirection='column'
              justifyContent='space-evenly'
            >
              <Typography fontSize={12} color='text.secondary'>
                Interest: {interestRate}
              </Typography>
              <Typography fontSize={10} color='text.secondary'>
                Generated APR: {generatedApr}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoanPoolCardTopContent;
