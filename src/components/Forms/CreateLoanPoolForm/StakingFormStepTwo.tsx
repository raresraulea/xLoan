import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMultistepFormContext } from 'components/Utils/MultistepForm';
import useProviderIdentitiesAfterSelection from 'hooks/useProviderIdentitiesAfterSelection';
import { selectedStakingProviderSelector } from 'redux/selectors/selectionsSelector';
import ProviderPresentation from './ProviderPresentation';

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
    </Box>
  );
};
export default StakingFormStepTwo;
