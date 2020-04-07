import React from 'react';
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <IconfontStyle />
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
