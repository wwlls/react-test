import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from '../../utils';
import CountUp from 'react-countup';
import { Icon, Row, Col } from 'antd';
import Header from '../../component/header/header';
import Carousel from '../../component/carousel/carousel';
import BackTop from '../../component/backTop/backTop';
import imgbanner1 from "../../static/images/common/banner/banner1.jpg";
import imgbanner2 from "../../static/images/common/banner/banner2.jpg";
import info1 from "../../static/images/home/info1.png";
import info2 from "../../static/images/home/info2.png";
import info3 from "../../static/images/home/info3.png";
import info4 from "../../static/images/home/info4.png";
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
    		day: 365,
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
				<div className="content layout">
					<div className="platform clear">
						<div className="floatL">
							<ul className="clear">
								<li className="floatL">
									累积交易额
									<CountUp start={0} end={parseFloat(this.state.investMoneyTotal)} decimals={2} duration={4}>
									</CountUp>
									{this.state.unit}
								</li>
								<li className="floatL">
									累计注册数
									<CountUp start={0} end={parseFloat(this.state.person)} duration={4}>
									</CountUp>
									人
								</li>
								<li className="floatL">
									为用户累计赚取收益
									<CountUp start={0} end={parseFloat(this.state.totalProfit)} decimals={2} duration={4}>
									</CountUp>
									{this.state.unit}
								</li>
								<li className="floatL">
									安全运营时间
									<CountUp start={0} end={parseFloat(this.state.day)} duration={4}>
									</CountUp>
									天
								</li>
							</ul>
						</div>
						<a className="floatR" href="">更多数据<Icon type="double-right" /></a>
					</div>
				</div>
				<div className="line"></div>
				<div className="info layout textC">
					<Row gutter={16}>
	                    <Col md={6}>
	                    	<img src={info1} />
	                        <h3>实时透明</h3>
	                        <p>全面信息披露制度</p>
	                    </Col>
	                    <Col md={6}>
	                    	<img src={info2} />
	                        <h3>普惠金融</h3>
	                        <p>专注小额分散的消费金融</p>
	                    </Col>
	                    <Col md={6}>
	                    	<img src={info3} />
	                        <h3>专业风控</h3>
	                        <p>完善的风控体系和贷后管理</p>
	                    </Col>
	                    <Col md={6}>
	                    	<img src={info4} />
	                        <h3>实力雄厚</h3>
	                        <p>支氏集团控股</p>
	                    </Col>
	                </Row>
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

				<BackTop />
			</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default  connect(mapStateToProps)(Home)