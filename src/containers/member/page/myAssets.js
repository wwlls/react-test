import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Tabs } from 'antd';
import Utils from 'utils/index';
import Title from 'component/title/title';
import AssetList from "./assets/assetList"; // tab子页面

const TabPane = Tabs.TabPane;

class MyAssets extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	panes : [
		      { title: '全部记录', key: '0' },
		      { title: '持有资产', key: '1' },
		      { title: '已到期资产', key: '2' },
		    ],
		    currentPage: 1,
		    pageSize: 10, 
		    regularAssets: [],
	    };
	}

	componentDidMount() {
		let key = 0;
		this.getRegularAssetList(key)	
	}

	//切换回调
	callback = (key) =>	 {
		// console.log(key)
		this.getRegularAssetList(key);
	}

	getRegularAssetList(key) {
		let data = {};
    	data.status = key;
    	data.current_page = this.state.currentPage;
    	data.page_size = this.state.pageSize;
    	let callFuc = (res) => {
    		console.log(JSON.parse(res.body))
    		if(res.rtn_code === 0) {
    			this.setState({
					regularAssets: JSON.parse(res.body).regularAssets
    			})
    		} else {
    			Message.error(res.rtn_msg);
    		}
        }
        Utils.postRequest('asset/getRegularAssetList', data, callFuc);

	}

	render() {
		let getRegularAssets = this.state.regularAssets;
		return (
			<div className="myAssets">
				<div className="titleAccount">
					<Title title="账户总览" />
					<div className="account">
						<Row>
		                    <Col md={5}>
		                        <h5>总资产：</h5>
		                        <p>0<em>元</em></p>
		                    </Col>
		                    <Col md={5}>
		                        <h5>昨日收益：</h5>
		                        <p>0<em>元</em></p>
		                    </Col>
		                    <Col md={5}>
		                        <h5>累计收益：</h5>
		                        <p>0<em>元</em></p>
		                    </Col>
		                    <Col md={9}>
		                        <h5>账户余额：<i>0</i>元</h5>
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
                	<Tabs onChange={this.callback} type="card">
                    {
                        this.state.panes.map(function (item) {
                                return (
                                    <TabPane tab={item.title} key={item.key}>
                                    	<AssetList regularAssets={getRegularAssets} />
                                    </TabPane>
                                )
                            })
                    }
                </Tabs>
                </div>
			</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default connect(mapStateToProps)(MyAssets)