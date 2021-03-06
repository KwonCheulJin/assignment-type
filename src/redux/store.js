import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'


const middleWare = [logger, thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))

export default store