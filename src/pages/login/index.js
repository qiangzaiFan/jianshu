import React, { PureComponent } from 'react';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        console.log(loginStatus);
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => { this.account = input }} />
                        <Input placeholder="密码" type='password' ref={(input) => { this.password = input }} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    login(accountElem, psaawordElem) {
        dispatch(actionCreators.login(accountElem.value, psaawordElem.value));
    }
});

export default connect(mapState, mapDispatch)(Login);
