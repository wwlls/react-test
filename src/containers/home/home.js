import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getCount } from 'actions';
import CountUp from 'react-countup';
import { Icon, Row, Col } from 'antd';
import Header from 'component/header/header';
import Carousel from 'component/carousel/carousel';
import Partner from 'component/partner/partner';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import imgbanner1 from 'static/images/common/banner/banner1.jpg';
import imgbanner2 from 'static/images/common/banner/banner2.jpg';
import downLoadApp from 'static/images/home/downLoad.png';
import "./home.scss";

class Home extends React.Component {
	static propTypes = {
		getCountData: PropTypes.object.isRequired,
        getCount: PropTypes.func.isRequired,
    }
	constructor(props) {
	    super(props);
	    this.state = {
	    	carouselList: [
	    		{img : imgbanner1 , id : 0 , url: 'index'} , 
	    		{img : imgbanner2 , id : 1 , url: 'list'}
	    	],
    		day: 365,
	    };
	}

	componentDidMount() {
		//获取mock数据
		// Utils.getRequest('/mall/api/CRH-MALLB001', {
	 //      adv_location: 'mall_index'
	 //    }, 'm1002').then((res) => {
	 //      this.setState({
	 //        imageUrl: res.resultList.length > 0 ? res.resultList[0].image_url : ''
	 //      });
	 //    });
	 	//平台数据方法
	 	this.props.getCount();
	 	//运营时间
		let startTime = '2015/10/17 00:00:00';
		let nowTime = new Date();
		let removeTime = Math.floor((nowTime.getTime() - new Date(startTime).getTime()) / (24*3600*1000));
		this.setState({
			day: removeTime,
		})
	}

	render() {
		//获取平台数据
		const { getCountData } = this.props;
		console.log(getCountData)
		return (
			<div className="container">
				<Header />
				<Carousel carouselList={this.state.carouselList} carousel="indexList" open="block" />
				<div className="content layout">
					<div className="platform clear">
						<div className="floatL">
							<ul className="clear">
								<li className="floatL">
									累积交易额
									<CountUp 
										start={0} 
										end={
											getCountData.investMoneyTotal >= 100000000 ? getCountData.investMoneyTotal/100000000
											: getCountData.investMoneyTotal >= 10000 ? getCountData.investMoneyTotal/10000
											: getCountData.investMoneyTotal
										} 
										decimals={2} 
										duration={4}>
									</CountUp>
									{
										getCountData.investMoneyTotal >= 100000000 ? '亿元'
										: getCountData.investMoneyTotal >= 10000 ? '万元'
										: '元'
									}
								</li>
								<li className="floatL">
									累计注册数
									<CountUp start={0} end={getCountData.registerCount} duration={4}>
									</CountUp>
									人
								</li>
								<li className="floatL">
									为用户累计赚取收益
									<CountUp 
										start={0} 
										end={
											getCountData.totalProfit >= 100000000 ? getCountData.totalProfit/100000000
											: getCountData.totalProfit >= 10000 ? getCountData.totalProfit/10000
											: getCountData.totalProfit
										} 
										decimals={2} 
										duration={4}>
									</CountUp>
									{
										getCountData.totalProfit >= 100000000 ? '亿元'
										: getCountData.totalProfit >= 10000 ? '万元'
										: '元'
									}
								</li>
								<li className="floatL">
									安全运营时间
									<CountUp start={0} end={parseFloat(this.state.day)} duration={4}>
									</CountUp>
									天
								</li>
							</ul>
						</div>
						<Link className="floatR" to="/about?id=4">更多数据<Icon type="double-right" /></Link>
					</div>
				</div>
				<div className="line"></div>
				<div className="hot layout textC">
					<Row gutter={16}>
	                    <Col md={6}>
	                    	<b className="info1"></b>
	                        <h3>实时透明</h3>
	                        <p>全面信息披露制度</p>
	                    </Col>
	                    <Col md={6}>
	                    	<b className="info2"></b>
	                        <h3>普惠金融</h3>
	                        <p>专注小额分散的消费金融</p>
	                    </Col>
	                    <Col md={6}>
	                    	<b className="info3"></b>
	                        <h3>专业风控</h3>
	                        <p>完善的风控体系和贷后管理</p>
	                    </Col>
	                    <Col md={6}>
	                    	<b className="info4"></b>
	                        <h3>实力雄厚</h3>
	                        <p>支氏集团控股</p>
	                    </Col>
	                </Row>
				</div>
				<Partner />
				<div className="downLoad">
					<img src={downLoadApp} alt="下载APP" />
					<a className="android" target="_block" href="http://sj.qq.com/myapp/detail.htm?apkName=com.hyd.huayingbao"></a>
					<a className="ios" target="_block" href="https://itunes.apple.com/cn/app/%E5%8D%8E%E8%B5%A2%E5%AE%9D-%E6%8A%95%E8%B5%84%E7%9F%AD%E6%9C%9F%E7%90%86%E8%B4%A2%E9%AB%98%E6%94%B6%E7%9B%8A%E8%B6%85%E7%A8%B3%E5%81%A5%E7%9A%84%E6%8E%8C%E4%B8%8A%E7%A5%9E%E5%99%A8/id1135660524?mt=8"></a>
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
  		getCountData: state.getCount
  	};
}

const mapDispatchToProps = (dispatch) => {
  	return bindActionCreators({ getCount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)