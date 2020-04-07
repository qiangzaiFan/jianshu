import React, {PureComponent} from 'react';
import {HomeWrapper,
        HomeLeft,
        HomeRight,
        BackTop} from "./style";
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Home extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        className="banner-img"
                        src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List>
                    </List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount(){
       this.props.changeHomeData(); 
       this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
       const action = actionCreators.getHomeInfo();
       dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
        console.log();
    }
})

export default connect(mapState,mapDispatch)(Home);
