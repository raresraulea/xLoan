import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const selectionsSliceSelector = (state: RootState) => state.selections;

export const selectedStakingProviderSelector = createDeepEqualSelector(
  selectionsSliceSelector,
  (state) => state.selectedStakingProvider
);
