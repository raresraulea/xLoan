import { combineReducers } from 'redux';
import modals from './slices/modalsSlice';

export default function makeRootReducer() {
  return combineReducers({
    modals
  });
}
