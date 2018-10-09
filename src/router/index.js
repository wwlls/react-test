import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';

//项目
import Home from '../containers/home/home';
import Lend from '../containers/lend/lend';
import Safe from '../containers/safe/safe';
//start about
import About from '../containers/about/about';
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

import News1 from '../containers/news/news1';
import News2 from '../containers/news/news2'; 
import News3 from '../containers/news/news3'; 
import News4 from '../containers/news/news4';
import News5 from '../containers/news/news5'; 
import News6 from '../containers/news/news6';  

//test
import NotFound from '../containers/test/not-found';
import TestMember from '../containers/test/member';
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
                <Route path="/law1" component={ Law1 } />
                <Route path="/law2" component={ Law2 } />
                <Route path="/law3" component={ Law3 } />
                <Route path="/law4" component={ Law4 } />
                <Route path="/law5" component={ Law5 } />
                <Route path="/law6" component={ Law6 } />
                <Route path="/member" component={ Member } />
                <Route path="/login" component={ Login } />

                <Route path="/news1" component={ News1 } />
                <Route path="/news2" component={ News2 } />
                <Route path="/news3" component={ News3 } />
                <Route path="/news4" component={ News4 } />
                <Route path="/news5" component={ News5 } />
                <Route path="/news6" component={ News6 } />

                <Route path="/register" component={ Register } />
                <Route path="/forget" component={ Forget } />

                <Route path="/index" component={ Index } />
                <Route path="/testMember" component={ TestMember } />
                <Route path="/list" component={ List } />
                <Route path="/*" component={ NotFound } />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default RouterMap;
