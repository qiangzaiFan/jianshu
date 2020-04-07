import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defalutState = fromJS({
    login: false
});

export default (state = defalutState, action) => {
    switch (action.type) {
        case actionTypes.CHANGELOGIN:
            return state.set('login',action.value);
        case actionTypes.LOGOUT:
            return state.set('login',action.value);
        default:
            return state;
    }
}