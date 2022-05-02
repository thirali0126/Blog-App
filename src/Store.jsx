import {createStore} from 'redux';

import RootReducer from './Redux/Reducer/Rootreducer';
const Store = createStore (RootReducer);

export default Store;
