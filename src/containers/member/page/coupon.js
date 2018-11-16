import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Tabs, Message } from 'antd';
import moment from 'moment';
import Utils from 'utils';
import Title from 'component/title/title';
import Pagination from "component/pagination/pagination";

const TabPane = Tabs.TabPane;

class Coupon extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
		   	currentKey1: 1,
		   	currentKey2: 2,
		   	currentKey3: 3,
		    currentPage: 1,
		    pageSize: 3, 
		    total: 10,
		    coupons1: [],
		    coupons2: [],
		    coupons3: [],
	    };
	}

	componentDidMount() {
		this.getMyCouponList1();
		this.getMyCouponList2();
		this.getMyCouponList3();
	}

	//切换回调
	callbackCoupon = (key) =>	 {
		this.setState({
	      currentPage: 1,
	    }, () => {
	    	if(key === '1') {
	    		this.getMyCouponList1();
	    	} else if(key === '2') {
	    		this.getMyCouponList2();
	    	} else if(key === '3') {
	    		this.getMyCouponList3();
	    	}
	    });
	}

	//获取未使用数据
	getMyCouponList1() {
		let data = {};
    	data.status = this.state.currentKey1;
    	data.current_page = this.state.currentPage;
    	data.page_size = this.state.pageSize;
    	let callFuc = (res) => {
    		console.log(JSON.parse(res.body))
    		if(res.rtn_code === 0) {
    			this.setState({
    				coupons1: JSON.parse(res.body).coupons,
					total1: JSON.parse(res.body).total
    			})
    		} else {
    			Message.error(res.rtn_msg);
    		}
        }
        Utils.postRequest('coupon/getMyCouponList', data, callFuc);
	}
	//获取已使用数据
	getMyCouponList2() {
		let data = {};
    	data.status = this.state.currentKey2;
    	data.current_page = this.state.currentPage;
    	data.page_size = this.state.pageSize;
    	let callFuc = (res) => {
    		console.log(JSON.parse(res.body))
    		if(res.rtn_code === 0) {
    			this.setState({
    				coupons2: JSON.parse(res.body).coupons,
					total2: JSON.parse(res.body).total
    			})
    		} else {
    			Message.error(res.rtn_msg);
    		}
        }
        Utils.postRequest('coupon/getMyCouponList', data, callFuc);
	}
	//获取已过期数据
	getMyCouponList3() {
		let data = {};
    	data.status = this.state.currentKey3;
    	data.current_page = this.state.currentPage;
    	data.page_size = this.state.pageSize;
    	let callFuc = (res) => {
    		console.log(JSON.parse(res.body))
    		if(res.rtn_code === 0) {
    			this.setState({
    				coupons3: JSON.parse(res.body).coupons,
					total3: JSON.parse(res.body).total
    			})
    		} else {
    			Message.error(res.rtn_msg);
    		}
        }
        Utils.postRequest('coupon/getMyCouponList', data, callFuc);
	}

	//分页
	onChangePagination1 = (e) => {
		console.log(e)

		this.setState({
            currentPage: e
        },()=>{
            this.getMyCouponList1()
        })
	}
	onChangePagination2 = (e) => {
		console.log(e)
		this.setState({
            currentPage: e
        },()=>{
            this.getMyCouponList2()
        })
	}
	onChangePagination3 = (e) => {
		console.log(e)
		this.setState({
            currentPage: e
        },()=>{
            this.getMyCouponList3()
        })
	}

	render() {
// 		if (navigator.userAgent.indexOf("Safari") >= 0) {
//     if (sheight - cheight <= 0){
//         blockmarginTop = 222;
//     } else {
//         blockmarginTop = sheight - cheight + 200;
//     }
// } else {
//     blockmarginTop = document.documentElement.scrollTop + 200;
// }

//blockmarginTop =(navigator.userAgent.indexOf("Safari") >= 0) ? (sheight - cheight <= 0) ? 222 : sheight - cheight + 200 : document.documentElement.scrollTop + 200;


		return (
			<div className="coupon">
	  			<Title title="我的赠券" />
	  			<i>温馨提示：下载APP或者关注华赢宝公众号参与活动可获得更多优惠券</i>
				<Tabs onChange={this.callbackCoupon} type="card">
					<TabPane tab={<span>未使用({this.state.total1})</span>} key="1">
						<Row>
							{
								this.state.coupons1.map((item, i) => {
						      		return(
					                    <Col md={8} key={i}>
					                    	<div className="couponSame couponNotUser">
						                        <h2>
						                        	{
						                        		item.type === 9 ? (item.addedInterest*100).toFixed(1)
						                        		: 	item.type === 10 ? item.fullMinusNum
						                        		: 	''
						                        	}
						                        	<b>
						                        		{
															item.type === 9 ? '%'
						                        			: 	item.type === 10 ? ''
						                        			: 	''
						                        		}
						                        	</b>
						                        </h2>
						                        <h3>
						                        	{
						                        		item.type === 9 ? '加息券'
						                        		: 	item.type === 10 ? (item.obtainType === 2 ? '现金红包' : '满减券')
						                        		: 	''
						                        	}
						                        </h3>
						                        <p>有效期至{moment(item.expirationTime).format('YYYY-MM-DD')}</p>
						                        <h5>
						                        	{
						                        		item.type === 9 ? ''
						                        		: 	item.type === 10 ? (
						                        				item.productName !== '' && item.productName !== undefined ? "适用于" + item.productName + "产品" : (
						                        					item.minimumInvestPeriod == -1 ? ''
						                        					: "适用于" + item.minimumInvestPeriod + "天及以上产品"
						                        				) 
						                        		  	)
						                        		: 	''
						                        	}
						                        </h5>
						                        <span>{item.description}</span>
						                        <a className="promptly" href="./investment.html">立即使用</a>
					                        </div>
					                    </Col>
						      		)
						      	})
							}
						</Row>
					    <Pagination
							currentPage={this.state.currentPage}
							pageSize={this.state.pageSize}
							total={this.state.total1}
							onChangePagination={this.onChangePagination1}
		                />
				    </TabPane>
				    <TabPane tab={<span>已使用({this.state.total2})</span>} key="2">
				      	<Row>
							{
								this.state.coupons2.map((item, i) => {
						      		return(
					                    <Col md={8} key={i}>
					                    	<div className="couponSame couponUser">
						                        <h2>
						                        	{
						                        		item.type === 9 ? (item.addedInterest*100).toFixed(1)
						                        		: 	item.type === 10 ? item.fullMinusNum
						                        		: 	''
						                        	}
						                        	<b>
						                        		{
															item.type === 9 ? '%'
						                        			: 	item.type === 10 ? ''
						                        			: 	''
						                        		}
						                        	</b>
						                        </h2>
						                        <h3>
						                        	{
						                        		item.type === 9 ? '加息券'
						                        		: 	item.type === 10 ? (item.obtainType === 2 ? '现金红包' : '满减券')
						                        		: 	''
						                        	}
						                        </h3>
						                        <p>有效期至{moment(item.expirationTime).format('YYYY-MM-DD')}</p>
						                        <h5>
						                        	{
						                        		item.type === 9 ? ''
						                        		: 	item.type === 10 ? (
						                        				item.productName !== '' && item.productName !== undefined ? "适用于" + item.productName + "产品" : (
						                        					item.minimumInvestPeriod == -1 ? ''
						                        					: "适用于" + item.minimumInvestPeriod + "天及以上产品"
						                        				) 
						                        		  	)
						                        		: 	''
						                        	}
						                        </h5>
						                        <span>{item.description}</span>
						                        <a className="promptly" href="./investment.html">立即使用</a>
					                        </div>
					                    </Col>
						      		)
						      	})
							}
						</Row>
				      	<Pagination
							currentPage={this.state.currentPage}
							pageSize={this.state.pageSize}
							total={this.state.total2}
							onChangePagination={this.onChangePagination2}
		                />
				    </TabPane>
				    <TabPane tab={<span>已过期({this.state.total3})</span>} key="3">
				      	<Row>
							{
								this.state.coupons3.map((item, i) => {
						      		return(
					                    <Col md={8} key={i}>
					                    	<div className="couponSame couponOut">
						                        <h2>
						                        	{
						                        		item.type === 9 ? (item.addedInterest*100).toFixed(1)
						                        		: 	item.type === 10 ? item.fullMinusNum
						                        		: 	''
						                        	}
						                        	<b>
						                        		{
															item.type === 9 ? '%'
						                        			: 	item.type === 10 ? ''
						                        			: 	''
						                        		}
						                        	</b>
						                        </h2>
						                        <h3>
						                        	{
						                        		item.type === 9 ? '加息券'
						                        		: 	item.type === 10 ? (item.obtainType === 2 ? '现金红包' : '满减券')
						                        		: 	''
						                        	}
						                        </h3>
						                        <p>有效期至{moment(item.expirationTime).format('YYYY-MM-DD')}</p>
						                        <h5>
						                        	{
						                        		item.type === 9 ? ''
						                        		: 	item.type === 10 ? (
						                        				item.productName !== '' && item.productName !== undefined ? "适用于" + item.productName + "产品" : (
						                        					item.minimumInvestPeriod == -1 ? ''
						                        					: "适用于" + item.minimumInvestPeriod + "天及以上产品"
						                        				) 
						                        		  	)
						                        		: 	''
						                        	}
						                        </h5>
						                        <span>{item.description}</span>
						                        <a className="promptly" href="./investment.html">立即使用</a>
					                        </div>
					                    </Col>
						      		)
						      	})
							}
						</Row>
				      	<Pagination
							currentPage={this.state.currentPage}
							pageSize={this.state.pageSize}
							total={this.state.total3}
							onChangePagination={this.onChangePagination3}
		                />
				    </TabPane>
                </Tabs>
	  		</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default connect(mapStateToProps)(Coupon)