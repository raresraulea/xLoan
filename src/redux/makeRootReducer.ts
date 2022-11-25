import { combineReducers } from 'redux';
import modals from './slices/modalsSlice';
import selections from './slices/selectionsSlice';

export default function makeRootReducer() {
  return combineReducers({
    modals,
    selections
  });
}
