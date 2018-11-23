import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getCount, getProductList } from 'actions';
import CountUp from 'react-countup';
import { Icon, Row, Col, Button, Message, Carousel } from 'antd';
import Header from 'component/header/header';
import CarouselPage from 'component/carousel/carousel';
import Partner from 'component/partner/partner';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import imgbanner1 from 'static/images/common/banner/banner1.jpg';
import imgbanner2 from 'static/images/common/banner/banner2.jpg';
import downLoadApp from 'static/images/home/downLoad.png';
import ProductImg1 from 'static/images/home/product_img1.png';
import ProductImg2 from 'static/images/home/product_img2.png';
import ProductImg3 from 'static/images/home/product_img3.png';
import First from 'static/images/home/first.png';
import Packet from 'static/images/home/packet.png';
import "./home.scss";

class Home extends React.Component {
	static propTypes = {
		getCountData: PropTypes.object.isRequired,
        getCount: PropTypes.func.isRequired,
        productListData: PropTypes.object.isRequired,
        getProductList: PropTypes.func.isRequired,
    }
	constructor(props) {
	    super(props);
	    this.state = {
	    	carouselList: [
	    		{img : imgbanner1 , id : 0 , url: 'index'} , 
	    		{img : imgbanner2 , id : 1 , url: 'list'}
	    	],
    		day: 365,
    		productsOne: [],
    		productsTwo: [],
    		productsThree: [],
    		//rankList: []
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
	 	//产品列表方法
	 	this.props.getProductList().then(() => {
	 		let { productListData } = this.props;
	 		console.log(productListData)
	 		if(productListData.rtn_code === 0) {
	 			let product = JSON.parse(productListData.body).products;
	 			//爆款专区
	 			let productsOneArr = [];
		 		for (var i = 0; i < 1; i++) {
		 			productsOneArr.push(product[4],product[5]);
		 			this.setState({
		 				productsOne: productsOneArr
		 			})
		 		}
		 		//短期出借
		 		let productsTwoArr = [];
		 		for (var i = 0; i < 1; i++) {
		 			productsTwoArr.push(product[0],product[1]);
		 			this.setState({
		 				productsTwo: productsTwoArr
		 			})
		 		}
		 		//长期出借
		 		let productsThreeArr = [];
		 		for (var i = 0; i < 1; i++) {
		 			productsThreeArr.push(product[2],product[3]);
		 			this.setState({
		 				productsThree: productsThreeArr
		 			})
		 		}
	 		} else {
	 			Message.error(productListData.rtn_msg);
	 		}
	 	});
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
		return (
			<div className="container">
				<Header />
				<CarouselPage carouselList={this.state.carouselList} carousel="indexList" open="block" />
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
				<div className="line"></div>
				<div className="layout">
					<Row className="product">
						<Col md={4}>
							<img src={ProductImg1} alt="爆款专区" />
						</Col>
						<Col md={12} className="productList productOne">
							{
								this.state.productsOne.map((item, i) => {
									return (
										<Row className="productLi" key={i}>
											<Col md={18}>
												<h5>
													{item.name}
													<span className={
														item.prodType === 2 ? 'new'
														:   item.prodType === 5 ? 'only'
														:   ''
													}>
														{
															item.prodType === 2 ? '新手专享'
														:   item.prodType === 5 ? '限时限量'
														:   ''
														}
													</span>
													<span className="only">
														{
															item.prodType === 2 ? '仅此一次'
														:   item.prodType === 5 ? '相约15号'
														:   ''
														}
													</span>
												</h5>
												<Row className="productOneMian">
													<Col md={7}>
														<h4 className="interest">{parseFloat(item.interest*100).toFixed(1)}<em>%</em></h4>
														<p>借贷双方约定利率</p>
													</Col>
													<Col md={12}>
														<h4 className="day">{item.period}<em>天</em></h4>
														<p>出借期限</p>
													</Col>
												</Row>
											</Col>
											<Col md={6}>
												<Button className="goLend"><Link to={'/lendDetail?id='+item.productId}>立即出借</Link></Button>
												<div className="progress">
													<div className="barHover" style={{width: item.realPercent + '%'}}></div>
													<div className="bar"></div>
												</div>
											</Col>
										</Row>
									)
								})
							}
						</Col>
						<Col md={7} className="welfare">
							<Link to="">
								<img src={First} alt="新手引导" />
							</Link>
							<Link to="">
								<img src={Packet} alt="红包" />
							</Link>
						</Col>
					</Row>

					<Row className="product">
						<Col md={4}>
							<img src={ProductImg2} alt="短期出借" />
						</Col>
						<Col md={12} className="productList productTwo">
							{
								this.state.productsTwo.map((item, i) => {
									return (
										<Row className="productLi" key={i}>
											<Col md={18}>
												<h5>
													{item.name}
												</h5>
												<Row className="productOneMian">
													<Col md={7}>
														<h4 className="interest">{parseFloat(item.interest*100).toFixed(1)}<em>%</em></h4>
														<p>借贷双方约定利率</p>
													</Col>
													<Col md={12}>
														<h4 className="day">{item.period}<em>天</em></h4>
														<p>出借期限</p>
													</Col>
												</Row>
											</Col>
											<Col md={6}>
												<Button className="goLend"><Link to={'/lendDetail?id='+item.productId}>立即出借</Link></Button>
												<div className="progress">
													<div className="barHover" style={{width: item.realPercent + '%'}}></div>
													<div className="bar"></div>
												</div>
											</Col>
										</Row>
									)
								})
							}
						</Col>
						<Col md={7} className="welfare rank">
							<h5><span></span>当月出借排行</h5>
							<div className="rankTop10">
								<ul>
									<li>
										<Carousel autoplay vertical dots="flase">
											{
												getCountData.top10InvestUser.map((item, index) => {
													return (
														<div className="rankTop10Div" key={index}>
															<Row>
																<Col md={3}>
																	<span className={
																		index === 0 ? 'top1 top' 
																		: index === 1 ? 'top2 top'
																		: index === 2 ?'top3 top'
																		: "sort"
																	}>
																		{
																			index === 0 ? '' 
																			: index === 1 ? ''
																			: index === 2 ?''
																			: index + 1
																		}
																	</span>
																</Col>
																<Col md={15}>
																	<span>{item.mobile}</span>
																</Col>
																<Col md={6} className="textR">
																	<span>{parseFloat(item.principal).toFixed(2)}</span>
																</Col>
															</Row>
														</div>
													)
												})	
											}
										</Carousel>
									</li>
								</ul>
							</div>
						</Col>
					</Row>

					<Row className="product">
						<Col md={4}>
							<img src={ProductImg3} alt="长期出借" />
						</Col>
						<Col md={12} className="productList productThree">
							{
								this.state.productsThree.map((item, i) => {
									return (
										<Row className="productLi" key={i}>
											<Col md={18}>
												<h5>
													{item.name}
												</h5>
												<Row className="productOneMian">
													<Col md={7}>
														<h4 className="interest">{parseFloat(item.interest*100).toFixed(1)}<em>%</em></h4>
														<p>借贷双方约定利率</p>
													</Col>
													<Col md={12}>
														<h4 className="day">{item.period}<em>天</em></h4>
														<p>出借期限</p>
													</Col>
												</Row>
											</Col>
											<Col md={6}>
												<Button className="goLend"><Link to={'/lendDetail?id='+item.productId}>立即出借</Link></Button>
												<div className="progress">
													<div className="barHover" style={{width: item.realPercent + '%'}}></div>
													<div className="bar"></div>
												</div>
											</Col>
										</Row>
									)
								})
							}
						</Col>
						<Col md={7} className="welfare news">
							<h5><span></span>媒体报道</h5>
							<ul>
								<li>
									<Link to="/about/news5" target="_blank">
										<em></em>
										华赢宝携手三家优质资产对接，加速合规建设
									</Link>
								</li>
								<li>
									<Link to="/about/news4" target="_blank">
										<em></em>
										华赢宝赞助2017萧山广场舞大赛完美结束
									</Link>
								</li>
								<li>
									<Link to="/about/news6" target="_blank">
										<em></em>
										支氏控股集团华赢宝发布验资报告
									</Link>
								</li>
								<li>
									<Link to="/about/news2" target="_blank">
										<em></em>
										「华赢宝征文活动」有华赢宝的日子，树桩吐绿，鸟语花香
									</Link>
								</li>
								<li>
									<Link to="/about/news1" target="_blank">
										<em></em>
										华赢宝累计成交突破10亿元
									</Link>
								</li>
								<li>
									<Link to="/about/news3" target="_blank">
										<em></em>
										华赢宝获批ICP证，积极响应监管政策变化
									</Link>
								</li>
							</ul>
						</Col>
					</Row>
				</div>
				<div className="line"></div>
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
  	return {
  		getCountData: state.getCount,
  		productListData: state.getProductList
  	};
}

const mapDispatchToProps = (dispatch) => {
  	return bindActionCreators({ getCount, getProductList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)