import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from '../../utils';
import { Icon } from 'antd';
import Header from '../../component/header/header';
import Carousel from '../../component/carousel/carousel';
import imgbanner1 from "../../static/images/common/banner/banner1.jpg";
import imgbanner2 from "../../static/images/common/banner/banner2.jpg";
import "./home.scss";

class Home extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	carouselList: [
	    		{img : imgbanner1 , id : 0 , url: 'index'} , 
	    		{img : imgbanner2 , id : 1 , url: 'list'}
	    	],
	    	//平台运营数据
    		investMoneyTotal: 10000000000.625,
    		unit: '元',
    		person: 12200,
    		totalProfit: 100000,	
    		day: '',
	    };
	}

	componentDidMount() {
		// Utils.getRequest('/mall/api/CRH-MALLB001', {
	 //      adv_location: 'mall_index'
	 //    }, 'm1002').then((res) => {
	 //      this.setState({
	 //        imageUrl: res.resultList.length > 0 ? res.resultList[0].image_url : ''
	 //      });
	 //    });

		Utils.postRequest('carouselList').then((res) => {
	      	console.log(res);
	      	this.setState({
	      		carouselList: res
	      	})
	    });
		let investMoneyTotal = this.state.investMoneyTotal;
		console.log(investMoneyTotal)
		let totalProfit = this.state.totalProfit;
		let startTime = '2015/10/17 00:00:00';
		let nowTime = new Date();
		let removeTime = Math.floor((nowTime.getTime() - new Date(startTime).getTime()) / (24*3600*1000));
		if (investMoneyTotal >= 10000 && investMoneyTotal < 100000000) {
			this.setState({
				investMoneyTotal : investMoneyTotal/10000,
				unit: '万元',
			})
		} else if (investMoneyTotal >= 100000000) {
			this.setState({
				investMoneyTotal : investMoneyTotal/100000000,
				unit: '亿元',
			})
		}
		if (totalProfit >= 10000 && totalProfit < 100000000) {
			this.setState({
				investMoneyTotal : totalProfit/10000,
				unit: '万元',
			})
		} else if (totalProfit >= 100000000) {
			this.setState({
				totalProfit : totalProfit/100000000,
				unit: '亿元',
			})
		}
		this.setState({
			day: removeTime,
		})
	}

	render() {
		return (
			<div className="home">
				<Header />
				<Carousel carouselList={this.state.carouselList} />
				<div className="content">
					<div className="platform clear">
						<div className="floatL">
							<span>累积交易额<b>{parseFloat(this.state.investMoneyTotal).toFixed(2)}</b>{this.state.unit}</span>
							<span>累计注册数<b>{this.state.person}</b>人</span>
							<span>为用户累计赚取收益<b>{parseFloat(this.state.totalProfit).toFixed(2)}</b>{this.state.unit}</span>
							<span>安全运营时间<b>{this.state.day}</b>天</span>
						</div>
						<a className="floatR" href="">更多数据<Icon type="double-right" /></a>
					</div>
				</div>
				<div>
					<ul>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default  connect(mapStateToProps)(Home)