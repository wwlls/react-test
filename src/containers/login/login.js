import React from 'react';
import { Route, Switch, Link, Prompt } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Form, Checkbox, Input, Button, Row, Col, Icon, message } from 'antd';
import { checkMobile } from 'actions';
import Tools from 'utils/tools';
import Header from 'component/header/header';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import "./login.scss";

const FormItem = Form.Item;

class LoginForm extends React.Component {
	static propTypes = {
		//checkMobileData: PropTypes.object.isRequired,
        checkMobile: PropTypes.func.isRequired,
    }
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}

	//form提交数据
	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	    	console.log(err)
	      	if (!err) {
	        	console.log('Received values of form: ', values);
	        	this.props.history.push('/register');
	      	}
	    });
	}
	componentDidMount() {
		
	}

	//验证手机号
	checkPhone = (rule, value, callback) => {
		const form = this.props.form;
		if(!(Tools.isMobile(value)) || value.length !== 11) {
            callback("手机号码输入有误");
        } else {
            callback();
            //验证成功判断是否新老用户
            let data = {};
			data.mobile = value;
			this.props.checkMobile(data).then(() => {
				let { checkMobileData } = this.props;
				console.log(checkMobileData)
			   	if(checkMobileData.rtn_code === 0) {
					message.info('您的账户已存在，请登录');
				} else if(checkMobileData.rtn_code === 10010 || checkMobileData.rtn_code === 10013) {
					message.info('您的账户不存在，请注册');
				} else if(checkMobileData.rtn_code === 10018) {
					message.info('您输入的手机号存在风险！请联系客服');
				}
			});
        }
	}

	//验证密码
	checkPassword = (rule, value, callback) => {
		const form = this.props.form;	
		if(value.length < 6 || value.length > 16) {
            callback("请输入6位到16位的密码");
        } else {
            callback();
            //form.getFieldDecorator(['password'],{validateTrigger: 'onChange'});
        }
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
		    labelCol: {
		        xs: { span: 24 },
		        sm: { span: 9 },
		    },
		    wrapperCol: {
		        xs: { span: 24 },
		        sm: { span: 8 },
		    },
	    };
		return (
			<div className="container">
				<Header />
				<div className="login">
					<div className="layout">
						<div className="subLogin">
							<section className="bgLogin">
								<h4>
									<span></span>老用户登录
								</h4>
								<Form className="submit textC" onSubmit={this.handleSubmit}>
									<h5>登录我的华赢宝账户</h5>
									<p>没有账户？<Link to="/register">注册</Link></p>
									<FormItem 
										hasFeedback
										{...formItemLayout}
  										label="手机号"
  									>
							          	{getFieldDecorator('mobile', {
								            rules: [
								            	{ required: true, whitespace : true, message: '请输入手机号' },
								            	{ validator: this.checkPhone },
								        	],
								        	validateFirst: true,
								        })(
							            	<Input type="text" autoFocus="autoFocus" name="mobile" maxLength="11" placeholder="请输入手机号" />
							         	 )}
							        </FormItem>
							        <FormItem 
							        	hasFeedback
										{...formItemLayout}
  										label="密码"
  									>
							          	{getFieldDecorator('password', {
							            	rules: [
							            		{ required: true, whitespace : true, message: '请输入密码' },
							            		//{ min: 6, max: 16, message: '密码输入有误'},
							            		{ validator: this.checkPassword },
							            	],
							            	validateFirst: true,
							            	// trigger: 'onChange',
							            	//validateTrigger: 'onBlur'
							          	})(
							            <Input type="password" name="password" minLength="6" maxLength="16" placeholder="请输入密码" />
							          )}
							        </FormItem>
							        <FormItem>
							        	<div className="remember">
									        <Icon type="exclamation-circle" theme="twoTone" />您的信息已使用128位SGC加密技术，保护数据传输安全
								        </div>
							        	<div className="submitBtn textC">
								          	<Button type="primary" htmlType="submit" className="login-form-button">
								            	立即登录
								          	</Button>
							          	</div>
						          		<Link to="/forget">忘记密码？</Link>
							        </FormItem>
								</Form>
							</section>
						</div>
					</div>
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
    	checkMobileData: state.checkMobile,
    }
}

const mapDispatchToProps = (dispatch) => {
  	return bindActionCreators({ checkMobile }, dispatch);
}

const Login = Form.create()(LoginForm);
export default connect(mapStateToProps , mapDispatchToProps)(Login)



// <Prompt when={true} message="你确定要离开当前页面吗？" />	