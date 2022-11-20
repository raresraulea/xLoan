import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logoutAction } from '../commonActions';

type SelectedOptionType = any;

export interface SelectedActionToPerform {
  id: number;
  actionType?: any;
}

export interface SelectedTokenToSend {
  token?: any;
}

interface GlobalModal {
  selectedOption?: SelectedOptionType;
}

export interface ModalsSliceState {
  globalModal: GlobalModal;
}

const initialState: ModalsSliceState = {
  globalModal: {
    selectedOption: null
  }
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setGlobalModalSelectedOption: (
      state: ModalsSliceState,
      action: PayloadAction<SelectedOptionType | null>
    ) => {
      state.globalModal.selectedOption = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => initialState);
  }
});

export const { setGlobalModalSelectedOption } = modalsSlice.actions;

export default modalsSlice.reducer;
