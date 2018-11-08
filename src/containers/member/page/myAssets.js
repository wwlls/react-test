import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button } from 'antd';
import Utils from 'utils';
import Title from 'component/title/title';

class MyAssets extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}

	componentDidMount() {
		
	}

	render() {
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
			</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default connect(mapStateToProps)(MyAssets)