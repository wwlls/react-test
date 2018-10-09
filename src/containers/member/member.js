import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from 'utils';
import { Breadcrumb } from 'antd';
import Header from 'component/header/header';
import Menu from 'component/menu/menu';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import "./member.scss";

import MyAsset from './page/myAssets';
import Recharge from './page/recharge';
import Cash from './page/cash';
import Capital from './page/capital';
import Set from './page/set';
import Coupon from './page/coupon';

class Member extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}

	componentDidMount() {
		// let userMobile = Utils.getStorage('userMobile');
		// if(userMobile == '' || userMobile == null || userMobile == undefined) {
		// 	this.props.history.push('/login?toHref=member');
		// 	return;
		// }
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div className="layout">
					<div className="member">
						<Breadcrumb separator=">">
							<Breadcrumb.Item separator="">您所在的位置: </Breadcrumb.Item>
						    <Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
						    <Breadcrumb.Item href="/member">个人中心</Breadcrumb.Item>
						    <Breadcrumb.Item>我的资产</Breadcrumb.Item>
					  	</Breadcrumb>
					  	<div>
					  		<Menu />
					  		<div>
		                        <Switch>
		                            <Route path='/member' component={MyAsset} />
		                            <Route path='/member/recharge' component={Recharge} />
		                            <Route path='/member/cash' component={Cash} />
		                            <Route path='/member/capital' component={Capital} />
		                            <Route path='/member/set' component={Set} />
		                            <Route path='/member/coupon' component={Coupon} />
		                        </Switch>
		                    </div>
					  	</div>
					</div>
				</div>
				<Footer />
				<BackTop />
			</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default connect(mapStateToProps)(Member)