import React, { PureComponent } from 'react';
import { ListItem, ListInfo,LoadMore } from '../style';
import { actionCreators } from '../store'; 
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list,getMoreList,page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/'+item.get('id')}>
                                <ListItem>
                                <ListInfo>
                                    <div className="title">{item.get('title')}</div>
                                    <p className="abstract">
                                        {item.get('abstract')}
                                    </p>
                                    <div className="ending">
                                        <span className="endItem">
                                            <span className="iconfont">&#xe6ad;</span>
                                            {item.get('heat')}
                                        </span>
                                        <span className="endItem">
                                            {item.get('name')}
                                        </span>
                                        <span className="endItem">
                                            <span className="iconfont">&#xe633;</span>
                                            {item.get('infoCount')}
                                        </span>
                                        <span className="endItem">
                                            <span className="iconfont">&#xe65c;</span>
                                            {item.get('likeNumber')}
                                        </span>
                                        <span className="endItem">
                                            <span className="iconfont">&#xe611;</span>
                                            {item.get('give')}
                                        </span>
                                    </div>
                                </ListInfo>
                                <img
                                    className="ListInfo-img"
                                    src={item.get('imgUrl')} alt="" />
                            </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )

    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home','articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
})

export default connect(mapState, mapDispatch)(List);
