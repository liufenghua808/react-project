import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer_patient from './reducer/reducer_patient';
import reducer_user from './reducer/reducer_user';

const reducers = combineReducers({
    reducer_user,
    reducer_patient
});

export default createStore(reducers,applyMiddleware(thunk,logger));

