import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { accountGetInfoData } from 'actions';
import { Row, Col, Button, Tabs, Message } from 'antd';
import Utils from 'utils/index';
import Tools from 'utils/tools';
import Api from 'api/api';
import Title from 'component/title/title';
import Table from "component/table/table"; // tab子页面
import Pagination from "component/pagination/pagination";

const TabPane = Tabs.TabPane;

class MyAssets extends React.Component {
	static propTypes = {
        accountData: PropTypes.object.isRequired,
        accountGetInfoData: PropTypes.func.isRequired,
    };
	constructor(props) {
	    super(props);
	    this.state = {
	    	totalProfit: 0,
	    	lastProfit: 0,
	    	assetProfit: 0,
	    	available: 0,
	    	panes : [
		      { title: '全部记录', key: '0' },
		      { title: '持有资产', key: '1' },
		      { title: '已到期资产', key: '2' },
		    ],
		   	currentKey: 0,
		    currentPage: 1,
		    pageSize: 10, 
		    total: 10,
		    columns: [{  //表格header
	            title: '项目名称',
	            dataIndex: 'name',
	            key: 'name',
	            width: 170,
	        }, {
	            title: '年化率(%)',
	            dataIndex: 'interest',
	            key: 'interest',
	            width: 100,
	        }, {
	            title: '投资金额(元)',
	            dataIndex: 'money',
	            key: 'money',
	            width: 120,
	        }, {
	            title: '收益(元)',
	            dataIndex: 'profit',
	            key: 'profit',
	            width: 90,
	        }, {
	            title: '投资时间',
	            dataIndex: 'buyTime',
	            key: 'buyTime',
	            width: 120,
	            render: (text, record) => (
	            	<span>{Tools.isMoment(record.buyTime, 1)}</span>
	            )
	        }, {
	            title: '还款时间',
	            dataIndex: 'endTime',
	            key: 'endTime',
	            width: 120,
	            render: (text, record) => (
	            	<span>{Tools.isMoment(record.endTime, 1)}</span>
	            )
	        }, {
	            title: '状态',
	            dataIndex: 'isExpired',
	            key: 'isExpired',
	            width: 120,
	            render: (text, record) => (
	                <div 
	                    style={
	                        record.status === 1 ? {color: '#F59623'}
	                        : record.status === 3 ? {color: '#00C571'}
	                        : record.status === 4 ? {color: '#E0391C'}
	                        : record.status === 5 ? ''
	                        : ''
	                    }
	                >
	                    {
	                      	record.status === 1 ? Math.ceil((record.endTime - record.buyTime)/(24*60*60*1000) - (new Date().getTime() - record.buyTime)/(24*60*60*1000)) + '天后还款'
	                      	: record.status === 3 ? '已到期'
	                      	: record.status === 4 ? '已变现'
	                      	: record.status === 5 ? ''
	                      	: ''
	                    }
	                </div>
	            )
	        }, {
	            title: '操作',
	            dataIndex: 'detail',
	            key: 'detail',
	            render: (text, record) => (
	            	// <a onClick={this.handleTest} href="javascript:;">{record.detail}</a>
	            	<Link to={'/member/assetList?id='+record.assetId}>{record.detail}</Link>
	            )
	        }],
		    tableData: [],
	    };
	}

	componentDidMount() {
		this.getRegularAssetList();
		//获取用户信息
		this.props.accountGetInfoData().then(() => {
			let { accountData } = this.props;
			if(accountData.rtn_code === 0) {
            	let accountBook = JSON.parse(accountData.body).accountBook;
            	let bankCard = accountBook.bankCard.card;
				Utils.setStorage('customerBankCard' , bankCard);
                this.setState({
                	totalProfit: accountBook.available + accountBook.regularAsset + accountBook.regularCurrProfit + accountBook.currentAsset + accountBook.currentInterest,
                	lastProfit: accountBook.regularLastProfit + accountBook.currentLastProfit,
					assetProfit: accountBook.regularTotalProfit + accountBook.currentTotalProfit,
                    available: accountBook.available,
                }) 
            }
		});
	}

	//获取当前是第几条数据
	// handleTest = (event) => {
	// 	console.log((event.target).closest('tr').getAttribute('data-row-key'))
	// }

	//切换回调
	callbackRegularAssets = (key) => {
		console.log(key)
		this.setState({
	      currentKey: key,
	      currentPage: 1,
	    }, () => {
	      	this.getRegularAssetList();
	    });
	}

	//获取列表数据
	getRegularAssetList() {
		let data = {};
    	data.status = this.state.currentKey;
    	data.current_page = this.state.currentPage;
    	data.page_size = this.state.pageSize;
    	let callFuc = (res) => {
    		if(res.rtn_code === 0) {
    			let regularAssets = JSON.parse(res.body).regularAssets;
    			let dataSource = [];
    			for (var i = 0; i < regularAssets.length; i++) {
		            dataSource.push({
		                key: i,
		                name: regularAssets[i].name,
		                interest: parseFloat(regularAssets[i].interest * 100).toFixed(1) + '%', 
		                money: Tools.isNumeral(regularAssets[i].money),
		                profit: Tools.isNumeral(regularAssets[i].profit),
		                buyTime: regularAssets[i].buyTime,
		                endTime: regularAssets[i].endTime,
		                status: regularAssets[i].isExpired,
		                detail:'出借详情',
		                assetId: regularAssets[i].assetId
		            })
		        }
    			this.setState({
    				tableData: dataSource,
					total: JSON.parse(res.body).total
    			})
    		} else {
    			Message.error(res.rtn_msg);
    		}
        }
        Utils.postRequest(Api.asset_getRegularAssetList, data, callFuc);
	}

	//分页
	onChangePagination = (e) => {
		this.setState({
            currentPage: e
        },()=>{
            this.getRegularAssetList()
        })
	}
	

	render() {
		let that = this;
		return (
			<div className="myAssets">
				<div className="titleAccount">
					<Title title="账户总览" />
					<div className="account">
						<Row>
		                    <Col md={5}>
		                        <h5>总资产：</h5>
		                        <p>{this.state.totalProfit.toFixed(2)}<em>元</em></p>
		                    </Col>
		                    <Col md={5}>
		                        <h5>昨日收益：</h5>
		                        <p>{this.state.lastProfit.toFixed(2)}<em>元</em></p>
		                    </Col>
		                    <Col md={5}>
		                        <h5>累计收益：</h5>
		                        <p>{this.state.assetProfit.toFixed(2)}<em>元</em></p>
		                    </Col>
		                    <Col md={9}>
		                        <h5>账户余额：<i>{this.state.available.toFixed(2)}</i>元</h5>
		                        <p>
		                        	<Link to="/member/recharge"><Button type="primary">充值</Button></Link>
		                        	<Link to="/member/cash"><Button>提现</Button></Link>
		                        </p>
		                    </Col>
		                </Row>
	                </div>
	                <h4>总资产=定期资产(本金+当前收益）+活期资产(本金+当前收益）+账户余额</h4>
                </div>
                <div>
                	<Title title="资产记录" />
                	<Tabs onChange={this.callbackRegularAssets} type="card">
	                    {
	                        this.state.panes.map((item) => {
	                            return (
	                                <TabPane tab={item.title} key={item.key}>
	                                	<Table 
	                                		tableData={that.state.tableData} 
	                                		columns={that.state.columns}
	                                	/>
	                                </TabPane>
	                            )
	                        })
	                    }
	                </Tabs>
	                <Pagination
						currentPage={this.state.currentPage}
						pageSize={this.state.pageSize}
						total={this.state.total}
						onChangePagination={this.onChangePagination}
	                />
                </div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        accountData: state.accountGetInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ accountGetInfoData }, dispatch);
}
export default connect(mapStateToProps , mapDispatchToProps)(MyAssets)