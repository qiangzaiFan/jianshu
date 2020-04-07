import React, { PureComponent } from 'react';
import {WriterWrapper,WriterItem} from '../style';
import {connect} from 'react-redux';

class Writer extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <WriterWrapper>
                <div><span className="writerTitle">推荐作者</span></div> 
                {
                   
                        list.map((item) => {
                            return (
                                <WriterItem key={item.get('id')}>
                                <img 
                                    className="avatorImg"
                                    src={item.get('imgUrl')} alt=""/> 
                                <span className="attention">+关注</span> 
                                <span className="title">{item.get('title')}</span>
                                <p  className="info">{item.get('info')}</p>
                                
                            </WriterItem>    
                            )
                        })
                }
               
            </WriterWrapper>
        )
    }
}

const mapState = (state)=> ({
        list: state.getIn(['home','writerList'])
});

export default connect(mapState,null)(Writer);
