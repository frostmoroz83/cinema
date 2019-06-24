import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import { rootReducer} from "../reducers";


export  var store = createStore(rootReducer, applyMiddleware(logger));