import { combineReducers } from "redux";

import {  authentication } from "./authenticationReducer";
import {course} from './courseReducer';

export default combineReducers({
    authentication,
    course
});