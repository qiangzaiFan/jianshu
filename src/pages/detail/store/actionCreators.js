import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail = (result) => ({
    type: actionTypes.CHANGEDETAIL,
    title: result.title,
    content: result.content
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get("/api/detail.json?id=" + id).then((res)=> {
            const result = res.data.data;
            dispatch(changeDetail(result));
        })
    }
}