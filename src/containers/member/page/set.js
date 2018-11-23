import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Modal } from 'antd';
import Utils from 'utils';
import Title from 'component/title/title';

class Set extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	visible: false,
	    };
	}

	componentDidMount() {
		let set = this.props.location.set
		console.log(set)
	}

	//修改手机号
	handleMobile = () => {
		this.setState({
			visible: true,
		})
	}
	handleCancel = () => {
		this.setState({
			visible: false,
		})
	}

	render() {	
		return (
			<div className="set">
				<div className="accountSet">
		  			<Title title="账户设置" />
		  			<div className="accountSetMain">
		  				<Row>
		  					<Col md={4}>
		  						<span>真实姓名</span>
		  					</Col>
		  					<Col md={4}>
		  						<span>危文亮</span>
		  					</Col>
		  				</Row>
		  				<Row>
		  					<Col md={4}>
		  						<span>手机号码</span>
		  					</Col>
		  					<Col md={4}>
		  						<span>136****6473</span>
		  					</Col>
		  				</Row>
		  				<Row>
		  					<Col md={4}>
		  						<span>证件号码</span>
		  					</Col>
		  					<Col md={4}>
		  						<span>429***********8031</span>
		  					</Col>
		  				</Row>
		  				<Row>
		  					<Col md={4}>
		  						<span>银行卡号</span>
		  					</Col>
		  					<Col md={4}>
		  						<span>6228***********4274</span>
		  					</Col>
		  				</Row>
		  			</div>
	  			</div>
	  			<div className="safeSet">
	  				<Title title="安全设置" />
	  				<div className="safeSetMain">
	  					<Row>
		  					<Col md={4}>
		  						<span>实名认证</span>
		  					</Col>
		  					<Col md={4}>
		  						<span>已认证</span>
		  					</Col>
		  					<Col md={14}>
		  						<span className="say">平台认证，绑定银行卡，资金提现有力，成功提交后不可修改</span>
		  					</Col>
		  				</Row>
		  				<Row>
		  					<Col md={4}>
		  						<span>手机绑定</span>
		  					</Col>
		  					<Col md={4}>
		  						<span>已绑定</span>
		  					</Col>
		  					<Col md={14}>
		  						<span className="say">为了确保您的账户安全，如需修改手机号，请联系客服为您处理</span>
		  					</Col>
		  					<Col md={2}>
		  						<a href="javascript:;" onClick={this.handleMobile}>修改</a>
		  					</Col>
		  				</Row>
		  				<Row>
		  					<Col md={4}>
		  						<span>登录密码</span>
		  					</Col>
		  					<Col md={4}>
		  						<span>已设置</span>
		  					</Col>
		  					<Col md={14}>
		  						<span className="say">定期修改密码，可以使您的账户更加安全</span>
		  					</Col>
		  					<Col md={2}>
		  						<Link to="">修改</Link>
		  					</Col>
		  				</Row>
	  				</div>
	  			</div>
	  			<Modal
	  				title="提示"
                 	centered
                  	destroyOnClose={true}
                  	visible={this.state.visible}
                  	footer={null}
                  	onCancel={this.handleCancel}
                >
                  <p>为了确保您的账户安全，如需修改手机号，请联系客服</p>
                  <p>为您处理，客服电话：400-1190-717</p>
                </Modal>
	  		</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default connect(mapStateToProps)(Set)