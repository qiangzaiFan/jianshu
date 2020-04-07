import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defalutState = fromJS({
    title:"",
    content:''
});

export default (state = defalutState, action) => {
    switch (action.type) {
        case actionTypes.CHANGEDETAIL:
            return state.merge({
                title:action.title,
                content:action.content
            })
        default:
            return state;
    }
}