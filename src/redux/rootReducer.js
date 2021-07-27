import { combineReducers } from 'redux';
import modalReducer from './modal/modalReducer'
import fetchPageReducer from './viewContents/fetchPage/fetchPageReducer'
import sortContentsReducer from './viewContents/viewReducer'

const rootReducer = combineReducers({
  modal: modalReducer,
  fetchPage: fetchPageReducer,
  sortContents: sortContentsReducer,
});

export default rootReducer