import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends Component {
    render() {
        const { title } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetails(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetails(id){
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
