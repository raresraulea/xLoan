import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export const modalsSliceSelector = (state: RootState) => state.modals;

export const globalModalSelector = createDeepEqualSelector(
  modalsSliceSelector,
  (state) => state.globalModal
);
