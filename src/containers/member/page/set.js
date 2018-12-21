import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Modal } from 'antd';
import Utils from 'utils/index';
import Tools from 'utils/tools';
import Title from 'component/title/title';

class Set extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	visible: false,
	    	name: '',
	    	mobile: '',
	    	idCard: '',
	    	bankCard: '',
	    	certified: '',
	    };
	}

	componentDidMount() {
		//姓名
		let name = Utils.getStorage('customerName');
		if(name != '' && name != null && name != 'undefined') {
			this.setState({
				name: name.substring(0,1) + '**',
			})
		} else {
			this.setState({
				name: '姓名认证请到微信或APP',
			})
		}
		//手机号
		let mobile = Utils.getStorage('customerMobile');
		if(mobile != '' && mobile != null && mobile != 'undefined') {
			this.setState({
				mobile: Tools.formatPhone(mobile),
			})
		}
		//身份证
		let idCard = Utils.getStorage('customerIdCard');
		if(idCard != '' && idCard != null && idCard != 'undefined') {
			this.setState({
				idCard: Tools.formatIdentity(idCard),
				certified: '已认证',
			})
		} else {
			this.setState({
				idCard: '身份证验证请到微信或APP',
				certified: '未认证',
			})
		}
		//银行卡号
		let bankCard = Utils.getStorage('customerBankCard');
		if(bankCard != '' && bankCard != null && bankCard != 'undefined') {
			this.setState({
				bankCard: String(bankCard).substring(0,4) + '***********' + String(bankCard).substring(15),
			})
		} else {
			this.setState({
				bankCard: '绑定银行卡请到微信或APP',
			})
		}
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
		  					<Col md={8}>
		  						<span>{this.state.name}</span>
		  					</Col>
		  				</Row>
		  				<Row>
		  					<Col md={4}>
		  						<span>手机号码</span>
		  					</Col>
		  					<Col md={8}>
		  						<span>{this.state.mobile}</span>
		  					</Col>
		  				</Row>
		  				<Row>
		  					<Col md={4}>
		  						<span>证件号码</span>
		  					</Col>
		  					<Col md={8}>
		  						<span>{this.state.idCard}</span>
		  					</Col>
		  				</Row>
		  				<Row>
		  					<Col md={4}>
		  						<span>银行卡号</span>
		  					</Col>
		  					<Col md={8}>
		  						<span>{this.state.bankCard}</span>
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
		  						<span>{this.state.certified}</span>
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