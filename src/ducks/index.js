import { combineReducers } from 'redux'
import { login } from "./login";
import { dialog } from "./dialog";
export default combineReducers({
    login,
    dialog
})