import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getInfoData } from 'actions';
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
	static propTypes = {
        InfoData: PropTypes.object.isRequired,
        getInfoData: PropTypes.func.isRequired,
    }
	constructor(props) {
	    super(props);
	    this.state = {
	    	threeSize: '',
	    	mobile: '',
	    	wxAvatar: '',
	    	idCard: '',
	    };
	}

	componentDidMount() {
		//是否登录
		let customerMobile = Utils.getStorage('customerMobile');
		if(customerMobile == '' || customerMobile == null || customerMobile == undefined) {
			this.props.history.push('/login?redirectUri=member');
			return;
		}
		//切换路由面包屑内容
		let pathname = this.props.location.pathname;
		console.log(1111,pathname)
		this.threeSize(pathname);

		//获取登录后用户信息
		this.props.getInfoData().then(() => {
            let { InfoData } = this.props;
            if(InfoData.rtn_code === 0) {
            	let customer = JSON.parse(InfoData.body).customer;
            	console.log(customer)
               	let customerMobile = customer.mobile;
               	let customerWxAvatar = customer.wxAvatar;
               	let customerIdCard  = customer.idCard;
                this.setState({
                    mobile: customerMobile,
                    wxAvatar: customerWxAvatar,
                }) 
            }
        });

        let set = {
	        pathname: '/member/set',
	        set: '我是通过state传值'
	    }
	}

	componentWillReceiveProps(nextProps) {
        let pathname = nextProps.location.pathname;
        console.log(pathname)
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
					  		<Menu path={location.pathname} mobile={this.state.mobile} wxAvatar={this.state.wxAvatar} />
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        InfoData: state.getInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getInfoData }, dispatch);
}
export default connect(mapStateToProps , mapDispatchToProps)(Member)