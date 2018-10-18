import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import history from 'utils/history';

//项目
import Home from '../containers/home/home';
import Lend from '../containers/lend/lend';
import Safe from '../containers/safe/safe';
//start about
import About from '../containers/about/about';
//媒体报道
import News1 from '../containers/about/page5/subPage/news1';
import News2 from '../containers/about/page5/subPage/news2'; 
import News3 from '../containers/about/page5/subPage/news3'; 
import News4 from '../containers/about/page5/subPage/news4';
import News5 from '../containers/about/page5/subPage/news5'; 
import News6 from '../containers/about/page5/subPage/news6'; 
//法律法规
import Law1 from '../containers/about/page8/subPage/law1';
import Law2 from '../containers/about/page8/subPage/law2';
import Law3 from '../containers/about/page8/subPage/law3';
import Law4 from '../containers/about/page8/subPage/law4';
import Law5 from '../containers/about/page8/subPage/law5';
import Law6 from '../containers/about/page8/subPage/law6';
//end about
//会员中心
import Member from '../containers/member/member';
import Login from '../containers/login/login';
import Register from '../containers/register/register';
import Forget from '../containers/forget/forget'; 

//test
import NotFound from '../containers/test/not-found';
import TestMember from '../containers/test/member';
import List from '../containers/test/list';
import Index from '../containers/test/index';

/* eslint-enable */

class RouterMap extends Component {
  render() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/home" exact component={ Home } />
                <Route path="/lend" component={ Lend } />
                <Route path="/safe"  component={ Safe } />
                <Route path="/about" exact component={ About } />
                <Route path="/about/news1" exact component={ News1 } />
                <Route path="/about/news2" exact component={ News2 } />
                <Route path="/about/news3" exact component={ News3 } />
                <Route path="/about/news4" exact component={ News4 } />
                <Route path="/about/news5" exact component={ News5 } />
                <Route path="/about/news6" exact component={ News6 } />
                <Route path="/about/law1" exact component={ Law1 } />
                <Route path="/about/law2" exact component={ Law2 } />
                <Route path="/about/law3" exact component={ Law3 } />
                <Route path="/about/law4" exact component={ Law4 } />
                <Route path="/about/law5" exact component={ Law5 } />
                <Route path="/about/law6" exact component={ Law6 } />
                <Route path="/member" component={ Member } />
                <Route path="/login" component={ Login } />
                <Route path="/register" component={ Register } />
                <Route path="/forget" component={ Forget } />

                <Route path="/index" component={ Index } />
                <Route path="/testMember" component={ TestMember } />
                <Route path="/list" component={ List } />
                <Route path="/*" component={ NotFound } />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
  }
}

export default RouterMap;
