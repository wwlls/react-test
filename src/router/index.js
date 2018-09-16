import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';

//项目
import Home from '../containers/home/home';
import Lend from '../containers/lend/lend';
import Safe from '../containers/safe/safe';
import About from '../containers/about/about';
import Login from '../containers/login/login';
import Register from '../containers/register/register';
import Forget from '../containers/forget/forget';


//test
import NotFound from '../containers/test/not-found';
import Member from '../containers/test/member';
import List from '../containers/test/list';
import Index from '../containers/test/index';

/* eslint-enable */

class RouterMap extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact component={ Home } />
                <Route path="/lend" component={ Lend } />
                <Route path="/safe" component={ Safe } />
                <Route path="/about" component={ About } />
                <Route path="/login" component={ Login } />
                <Route path="/register" component={ Register } />
                <Route path="/forget" component={ Forget } />

                <Route path="/index" component={ Index } />
                <Route path="/member" component={ Member } />
                <Route path="/list" component={ List } />
                <Route path="/*" component={ NotFound } />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default RouterMap;
