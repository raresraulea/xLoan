import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, Grid, IconButton, TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { useSelector } from 'react-redux';
import BasicSelect from 'components/Utils/BasicSelect';
import { useMultistepFormContext } from 'components/Utils/MultistepForm';
import useProviderIdentitiesAfterSelection from 'hooks/useProviderIdentitiesAfterSelection';
import { selectedStakingProviderSelector } from 'redux/selectors/selectionsSelector';
import colors from 'theme/customColors';
import ProviderPresentation from './ProviderPresentation';

const APR_STEP = 0.25;

const StakingFormStepTwo = () => {
  const selectedProviderIdentifier = useSelector(
    selectedStakingProviderSelector
  );

  const { fetchedProviderIdentities } = useProviderIdentitiesAfterSelection();

  const selectedProvider = useMemo(
    () =>
      fetchedProviderIdentities?.find(
        (provider: any) => provider.identity === selectedProviderIdentifier
      ),
    [fetchedProviderIdentities, selectedProviderIdentifier]
  );

  const { proceedToPreviousStep } = useMultistepFormContext();

  const buttonRef = useRef<any>(null);
  const [buttonWidth, setButtonWidth] = useState(0);

  const [poolApr, setPoolApr] = useState(selectedProvider?.aprColumn?.apr ?? 0);

  useLayoutEffect(() => {
    setButtonWidth(buttonRef?.current?.offsetWidth);
  }, []);

  const buttonStyle = useMemo(
    () => ({
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '10px 14px',
      justifyContent: 'center',
      gap: buttonWidth > 90 ? 0 : 3,
      background: 'rgba(76, 47, 252, 0.1)',
      borderRadius: '10px'
    }),
    [buttonWidth]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Box sx={buttonStyle}>
        <Box sx={{ flex: 4 }}>
          <ProviderPresentation provider={selectedProvider} />
        </Box>
        <Box sx={{ width: '100%', pb: 1 }}>
          <Button
            variant='contained'
            color='secondary'
            fullWidth
            ref={buttonRef}
            onClick={proceedToPreviousStep}
          >
            Change
          </Button>
        </Box>
      </Box>
      <Box>
        <TextField
          fullWidth
          variant='outlined'
          label='Pool Title'
          size='medium'
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item sm={6} display='flex' gap={1} width='100%'>
          <IconButton
            sx={{
              backgroundColor: 'transparent',
              color: '#757575',
              border: `1px solid ${colors.darkDivider}`,
              width: 55
            }}
            onClick={() => setPoolApr((apr) => apr - APR_STEP)}
            aria-label='upload picture'
            component='label'
          >
            <RemoveIcon />
          </IconButton>
          <NumericFormat
            name='apr'
            id='amount'
            value={poolApr}
            thousandSeparator
            onChange={(e: any) => setPoolApr(+e.target.value)}
            // onBlur={formik.handleBlur}
            // className={addressError != null ? 'isError' : ''}
            customInput={TextField}
            variant='outlined'
            label='Pool APR'
            size='medium'
            style={{
              width: '100%'
            }}
          />
          <IconButton
            sx={{
              backgroundColor: 'transparent',
              color: '#757575',
              border: `1px solid ${colors.darkDivider}`,
              width: 55
            }}
            onClick={() => setPoolApr((apr) => apr + APR_STEP)}
            aria-label='upload picture'
            component='label'
          >
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item sm={6}>
          <BasicSelect />
        </Grid>
      </Grid>
    </Box>
  );
};
export default StakingFormStepTwo;
