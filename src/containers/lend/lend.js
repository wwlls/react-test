import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getProductList } from 'actions';
import { Icon, Row, Col, Button, Message } from 'antd';
import Tools from 'utils/tools';
import Header from 'component/header/header';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import ProductImg1 from 'static/images/home/product_img1.png';
import ProductImg2 from 'static/images/home/product_img2.png';
import ProductImg3 from 'static/images/home/product_img3.png';
import './lend.scss';

class Lend extends React.Component {
	static propTypes = {
        productListData: PropTypes.object.isRequired,
        getProductList: PropTypes.func.isRequired,
    }
	constructor(props) {
	    super(props);
	    this.state = {
	    	productsOne: [],
    		productsTwo: [],
    		productsThree: [],
	    };
	}

	componentDidMount() {
		//产品列表方法
	 	this.props.getProductList().then(() => {
	 		let { productListData } = this.props;
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
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div className="layout">
					<div className="lend">
						<Row className="product">
							<Col md={4}>
								<img src={ProductImg1} alt="爆款专区" />
							</Col>
							<Col md={20} className="productList productOne">
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
														<Col md={7}>
															<h4 className="day">{item.period}<em>天</em></h4>
															<p>出借期限</p>
														</Col>
														<Col md={7}>
															<h4 className="day">{Tools.isNumeral(item.remainMoney)}<em>元</em></h4>
															<p>剩余可投</p>
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
						</Row>

						<Row className="product">
							<Col md={4}>
								<img src={ProductImg2} alt="短期出借" />
							</Col>
							<Col md={20} className="productList productTwo">
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
														<Col md={7}>
															<h4 className="day">{item.period}<em>天</em></h4>
															<p>出借期限</p>
														</Col>
														<Col md={7}>
															<h4 className="day">{Tools.isNumeral(item.remainMoney)}<em>元</em></h4>
															<p>剩余可投</p>
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
						</Row>

						<Row className="product">
							<Col md={4}>
								<img src={ProductImg3} alt="长期出借" />
							</Col>
							<Col md={20} className="productList productThree">
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
														<Col md={7}>
															<h4 className="day">{item.period}<em>天</em></h4>
															<p>出借期限</p>
														</Col>
														<Col md={7}>
															<h4 className="day">{Tools.isNumeral(item.remainMoney)}<em>元</em></h4>
															<p>剩余可投</p>
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
						</Row>
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
  		productListData: state.getProductList
  	};
}

const mapDispatchToProps = (dispatch) => {
  	return bindActionCreators({ getProductList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Lend)