import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

export const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    articleList: result.articleList,
    topicList: result.topicList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

export const addHomeList = (list,nextPage) => ({
    type: actionTypes.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=> {
            const result = res.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res)=> {
            const result = res.data.data;
            dispatch(addHomeList(result,page + 1));
        })
    }
}

export const toggleTopShow = (show)=> ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    show
})