import {combineReducers} from 'redux';
import { Blogreducer } from './blogreducer';

export default combineReducers ({
  blogs: Blogreducer,
});
