import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

//项目
import Home from '../containers/home/home';
import Lend from '../containers/lend/lend';
import Safe from '../containers/safe/safe';
import About from '../containers/about/about';
import Login from '../containers/login/login';
import Register from '../containers/register/register';


//test
import NotFound from '../containers/test/not-found';
import Member from '../containers/test/member';
import List from '../containers/test/list';
import Index from '../containers/test/index';

/* eslint-enable */

class RouterMap extends Component {
  render() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" exact component={ Home } />
                <Route path="/lend" exact component={ Lend } />
                <Route path="/safe" exact component={ Safe } />
                <Route path="/about" exact component={ About } />
                <Route path="/login" exact component={ Login } />
                <Route path="/register" exact component={ Register } />

                <Route path="/index" exact component={ Index } />
                <Route path="/member" exact component={ Member } />
                <Route path="/list" exact component={ List } />
                <Route path="/*" component={ NotFound } />
            </Switch>
        </HashRouter>
    );
  }
}

export default RouterMap;
