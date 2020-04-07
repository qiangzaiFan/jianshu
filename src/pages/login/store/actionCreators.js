import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
    type: actionTypes.CHANGELOGIN,
    value: true
});

export const logout = () => ({
    type:actionTypes.LOGOUT,
    value: false
});

export const login = (account,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=> {
            const result = res.data.data;
            if(result){
                dispatch(changeLogin());
            }else{
                alert("登陆失败");
            }
        })
    }
}