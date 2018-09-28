import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Checkbox, Input, Button, Row, Col, message } from 'antd';
import { checkMobile } from '../../actions';
import Utils from '../../utils/index';
import Tools from '../../utils/tools';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import BackTop from '../../component/backTop/backTop';
import CountDown from '../../component/countDown/countDown';
import "./register.scss";

const FormItem = Form.Item;

class RegisterForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	mobile: '',
	    	count: 60,
            stop: true,
            disabled: '',
            text: '立即获取'
	    };
	}

	//form提交数据
	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	    	console.log(err)
	      	if (!err) {
	        	console.log('Received values of form: ', values);
	      	}
	    });
	}

	//获取验证码
	habdelGetCode = () => {
		let form = this.props.form;
        let value = form.getFieldValue('mobile');
        if((Tools.isMobile(value))) {
            let data = {};
            data.mobile = value;
            data.reason = '注册验证';
            let callFuc = (res) => {
            	console.log(res)
            	this.setTime();
            }
            Utils.postRequest('verifyCode/get', data, callFuc);
        } else {
        	form.validateFields(['mobile'], { force: true });
        } 
    };

    setTime = () => {
    	clearInterval(this.timer);
        this.state.stop = false;
        this.setState({
            disabled: 'disabled'
        })
        this.timer = setInterval(function() {
            let count = this.state.count;
            this.state.liked = false;
            count -= 1;
            this.setState({
                count: count
            });
            if (count < 1) {
                this.state.stop = true;
                this.setState({
                    liked: true,
                    disabled: '',
                    text: '重发',
                    count: 60
                });
　　　　　　　　clearInterval(this.timer);
            }
        }.bind(this), 1000);
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
            let data = {};
			data.mobile = value;
			let callFuc = function(res) {
				console.log(res)
				if(res.rtn_code === 0) {
					message.info('您的账户已存在，请登录');
				} else if(res.rtn_code === 10010 || res.rtn_code === 10013) {
					message.info('您的账户不存在，请注册');
				} else if(res.rtn_code === 10018) {
					message.info('您输入的手机号存在风险！请联系客服');
				}
			}
			this.props.checkMobile('login/checkMobile', data, callFuc);
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

	//验证协议
	checkRemember = (rule, value, callback) => {
		if(value === false) {
			callback("请同意服务协议");
		} else {
			callback();
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
			<div>
				<Header />
				<div className="register">
					<div className="layout">
						<div className="subLogin">
							<section className="bgLogin">
								<h4>
									<span></span>新用户注册
								</h4>
								<Form className="submit textC" onSubmit={this.handleSubmit}>
									<h5>免费注册华赢宝账户</h5>
									<p>已有账户？<Link to="/login">登录</Link></p>
									<FormItem 
										hasFeedback
										{...formItemLayout}
  										label="手机号"	
  									>
							          	{getFieldDecorator('mobile', {
								            rules: [
								            	{ required: true, whitespace : true, message: '请输入手机号' },
								            	{ validator: this.checkPhone },
								            	// { max: 11, message: '不是有效的手机号!' }, 
								        	],
								        	validateFirst: true,
								        	// trigger: 'onBlur',
								        	//validateTrigger: 'onBlur'
								        })(
							            	<Input type="text" autoFocus="autoFocus" name="mobile" maxLength="11" placeholder="请输入手机号" />
							         	 )}
							        </FormItem>
							        <FormItem
							          	{...formItemLayout}
							          	label="短信验证码："
							        	>
							          	<Row gutter={8}>
								            <Col span={18}>
								              	{getFieldDecorator('code', {
								                	rules: [{ required: true, message: '请输入验证码' }],
								              	})(
								                	<Input type="text" maxLength="6" placeholder="请输入验证码" />
								              	)}
								            </Col>
							            	<Col span={6}>
								              	<CountDown habdelGetCode={this.habdelGetCode} stop={this.state.stop} text={this.state.text} count={this.state.count} disabled={this.state.disabled} getCode='getCode' />
							            	</Col>
							          	</Row>
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
							        <FormItem 
										{...formItemLayout}
  										label="邀请码："
  									>
							          	{getFieldDecorator('invite', {
								        })(
							            	<Input type="text" name="invite" placeholder="请输入验证码(选填)" />
							         	 )}
							        </FormItem>
							        <div className="remember">
								        <FormItem>
								          	{getFieldDecorator('remember', {
								          		valuePropName: 'checked',
									            initialValue: true,
								          		rules: [
								            		{ required: true, message: '请同意服务协议' },
								            		{ validator: this.checkRemember },
								            	],
								          	})(
								            	<Checkbox>已同意<Link to="" target="_blank">《定存计划服务协议》</Link><Link to="" target="_blank">《用户授权委托书》</Link><Link to="" target="_blank">《风险揭示书》</Link></Checkbox>
								          	)}
								        </FormItem>
							        </div>
							        <FormItem>
							        	<div className="submitBtn textC">
								          	<Button type="primary" htmlType="submit" className="login-form-button">
								            	注册
								          	</Button>
							          	</div>
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
    return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ checkMobile }, dispatch);
}

const Register = Form.create()(RegisterForm);
export default connect(mapStateToProps , mapDispatchToProps)(Register)