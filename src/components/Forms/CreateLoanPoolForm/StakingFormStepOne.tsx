import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Box, InputAdornment, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { StakingSearchBar } from 'components/Utils/styled';
import useDebounce from 'hooks/useDebounce';
import { selectedStakingProviderSelector } from 'redux/selectors/selectionsSelector';
import { Div } from 'theme';
import colors from 'theme/customColors';
import ProvidersList from './ProvidersList';

interface Props {
  enableNextStep?: (
    enabled: boolean
  ) => ReturnType<
    React.Dispatch<React.SetStateAction<Record<number, boolean>>>
  >;
}

const StakingFormStepOne = ({ enableNextStep = () => null }: Props) => {
  const selectedStakingProvider = useSelector(selectedStakingProviderSelector);

  useEffect(() => {
    enableNextStep(!!selectedStakingProvider);
  }, [selectedStakingProvider, enableNextStep]);

  const [searchParam, setSearchParam] = useState('');

  const debouncedSearchParam = useDebounce(searchParam, 500);

  return (
    <Div>
      <Typography mb={2}>
        Step 1: Select a Staking Provider to collaborate with:
      </Typography>
      <Box border={`1px solid ${colors.darkDivider}`} borderRadius='4px'>
        <StakingSearchBar
          placeholder='Search for a provider'
          onChange={(e: any) => setSearchParam(e.target.value)}
          value={searchParam}
          variant='filled'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start' sx={{ mt: '0 !important' }}>
                <SearchRoundedIcon />
              </InputAdornment>
            )
          }}
        />
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <ProvidersList searchParam={debouncedSearchParam} />
        </Box>
      </Box>
    </Div>
  );
};

export default StakingFormStepOne;
