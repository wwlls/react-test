import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getInfoData } from 'actions';
import Utils from 'utils/index';
import { Layout, Message } from 'antd';
import Config from 'config';
import Header from 'component/header/header';
import Menu from 'component/menu/menu';
import Breadcrumb from 'component/breadcrumb/breadcrumb';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import "./member.scss";
import MyAsset from './page/myAssets';
import AssetList from './page/assets/assetList';
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
	    	mobile: '13666606473',
	    	wxAvatar: '',
	    	idCard: '',
	    	menuList:[
                {key: '/member', name: '我的资产', sort: 1},
                {key: '/member/recharge', name: '账户充值', sort: 2},
                {key: '/member/cash', name: '账户提现', sort: 3},
                {key: '/member/capital', name: '资金流水', sort: 4},
                {key: '/member/set', name: '账户设置', sort: 5},
                {key: '/member/coupon', name: '我的赠券', sort: 6},
            ]
	    };
	}

	componentDidMount() {
		//初始面包屑内容
		let pathname = this.props.location.pathname;
		this.threeSize(pathname);

		//获取登录后用户信息
		
  		document.title = Config.title + '|我的账号';
	}

	componentWillReceiveProps(nextProps) {
        let pathname = nextProps.location.pathname;
        //console.log(pathname)
        this.threeSize(pathname);
    }

    //获取面包屑内容
    threeSize = (pathname) => {
    	this.state.menuList.forEach((item, index) => {
    		if(pathname === item.key) {
    			this.setState({
    				threeSize: item.name
    			})
       
    		}
    	})
    }

	render() {
		return (
			<div className="container">
				<Header />
				<div className="layout">
					<div className="member">
						<div className="clear">
							<h1 className="floatL">您所在的位置：</h1>
							<div className="floatL">
								<Breadcrumb secondSize="个人中心" secondHref="/member" threeHref={this.state.threeSize} />
							</div>
						</div>
					  	<Layout>
					  		<Menu menuList={this.state.menuList} path={location.pathname} mobile={this.state.mobile} wxAvatar={this.state.wxAvatar} />
					  		<Content style={{margin: '0 0 0 30px'}}>
		                        <Switch>
		                            <Route exact path={'/member'} component={MyAsset} />
		                            <Route exact path={'/member/assetList'} component={AssetList} />
		                            <Route exact path={'/member/recharge'} component={Recharge} />
		                            <Route exact path={'/member/cash'} component={Cash} />
		                            <Route exact path={'/member/capital'} component={Capital} />
		                            <Route exact path={'/member/set'} component={Set} />
		                            <Route exact path={'/member/coupon'} component={Coupon} />
		                        </Switch>
	                        </Content>
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
    return {
        InfoData: state.getInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getInfoData }, dispatch);
}
export default connect(mapStateToProps , mapDispatchToProps)(Member)