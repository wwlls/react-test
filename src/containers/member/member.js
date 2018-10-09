import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from 'utils';
import { Layout } from 'antd';
import Header from 'component/header/header';
import Menu from 'component/menu/menu';
import Breadcrumb from 'component/breadcrumb/breadcrumb';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import "./member.scss";

import MyAsset from './page/myAssets';
import Recharge from './page/recharge';
import Cash from './page/cash';
import Capital from './page/capital';
import Set from './page/set';
import Coupon from './page/coupon';

const { Content } = Layout;

class Member extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	threeSize: '',
	    };
	}

	componentDidMount() {
		// let userMobile = Utils.getStorage('userMobile');
		// if(userMobile == '' || userMobile == null || userMobile == undefined) {
		// 	this.props.history.push('/login?toHref=member');
		// 	return;
		// }
		const { location } = this.props;
		let pathname = location.pathname;
		this.threeSize(pathname);
	}

	componentWillReceiveProps(nextProps) {
        let pathname = nextProps.location.pathname;
        this.threeSize(pathname);
    }

    threeSize = (pathname) => {
    	if(pathname === '/member') {
			this.setState({
				threeSize: '我的资产'
			})
		} else if(pathname === '/member/recharge') {
			this.setState({
				threeSize: '账户充值'
			})
		} else if(pathname === '/member/cash') {
			this.setState({
				threeSize: '账户提现'
			})
		} else if(pathname === '/member/capital') {
			this.setState({
				threeSize: '资金流水'
			})
		} else if(pathname === '/member/set') {
			this.setState({
				threeSize: '账户设置'
			})
		} else if(pathname === '/member/coupon') {
			this.setState({
				threeSize: '我的赠券'
			})
		}
    }

	render() {
		return (
			<div className="container">
				<Header />
				<div className="layout">
					<div className="member">
						<div className="clear">
							<h5 className="floatL">您所在的位置：</h5>
							<div className="floatL">
								<Breadcrumb secondSize="个人中心" secondHref="/member" threeHref={this.state.threeSize} />
							</div>
						</div>
					  	<Layout>
					  		<Menu path={location.pathname} />
					  		<Layout>
					  			<Content style={{margin: '0 0 0 30px'}}>
			                        <Switch>
			                            <Route exact path={'/member'} component={MyAsset} />
			                            <Route exact path={'/member/recharge'} component={Recharge} />
			                            <Route exact path={'/member/cash'} component={Cash} />
			                            <Route exact path={'/member/capital'} component={Capital} />
			                            <Route exact path={'/member/set'} component={Set} />
			                            <Route exact path={'/member/coupon'} component={Coupon} />
			                        </Switch>
		                        </Content>
		                    </Layout>
					  	</Layout>
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