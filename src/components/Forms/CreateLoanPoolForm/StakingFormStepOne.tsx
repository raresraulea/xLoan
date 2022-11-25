import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Box, InputAdornment } from '@mui/material';
import { useSelector } from 'react-redux';
import { StakingSearchBar } from 'components/Utils/styled';
import useDebounce from 'hooks/useDebounce';
import { selectedStakingProviderSelector } from 'redux/selectors/selectionsSelector';
import { Div } from 'theme';
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
          position: 'relative',
          '&:after': {
            position: 'absolute',
            width: '100%',
            height: '38px',
            content: '""',
            bottom: '0',
            left: '0',
            transition: 'height .3s linear'
          },
          '&.scrolledToBottom:after': {
            height: '0px'
          }
        }}
      >
        <ProvidersList searchParam={debouncedSearchParam} />
      </Box>
    </Div>
  );
};

export default StakingFormStepOne;
