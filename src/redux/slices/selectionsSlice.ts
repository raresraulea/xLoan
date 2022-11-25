import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logoutAction } from '../commonActions';

export interface ModalsSliceState {
  selectedStakingProvider: string | null;
}

const initialState: ModalsSliceState = {
  selectedStakingProvider: null
};

export const modalsSlice = createSlice({
  name: 'selections',
  initialState,
  reducers: {
    setSelectedStakingProvider: (
      state: ModalsSliceState,
      action: PayloadAction<string>
    ) => {
      state.selectedStakingProvider = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => initialState);
  }
});

export const { setSelectedStakingProvider } = modalsSlice.actions;

export default modalsSlice.reducer;
