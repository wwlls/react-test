import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Checkbox, Input, Button, Row, Col } from 'antd';
import Utils from '../../utils/index';
import Tools from '../../utils/tools';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import BackTop from '../../component/backTop/backTop';
import "./login.scss";

const FormItem = Form.Item;

class LoginForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}

	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	    	console.log(err)
	      	if (!err) {
	        	console.log('Received values of form: ', values);
	      	}
	    });
	}

	componentDidMount() {
		let data = {};
		let callback = function(res) {
			console.log(res)
		}
		Utils.postRequest('/api/login/checkMobile',data ,callback);

		//初始化
		// let phone = this.refs.phone;
		// phone.fouce
	}

	checkPhone = (rule, value, callback) => {
		if(!(Tools.isMobile(value)) || value.length !== 11) {
            callback("手机号码有误");
        } else {
            callback();
        }
	    // const { validateFields } = this.props.form
	    // if (value) {
	    //   // validateFields([''])
	    // }
	    // callback()
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
		        sm: { span: 14 },
		    },
	    };
		return (
			<div>
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
								            	// { max: 11, message: '不是有效的手机号!' }, 
								        	],
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
							            		{ min: 6, max: 16, message: '密码输入有误'}
							            	],
							          	})(
							            <Input type="password" name="password" minLength="6" maxLength="16" placeholder="请输入密码" />
							          )}
							        </FormItem>
							        <FormItem
							        	{...formItemLayout}
							        >
							          	{getFieldDecorator('remember', {
								            valuePropName: 'checked',
								            initialValue: true,
							          	})(
							            	<Checkbox>您的信息已使用128位SGC加密技术，保护数据传输安全</Checkbox>
							          	)}
							          	<div className="submitBtn textC">
								          	<Button type="primary" htmlType="submit" className="login-form-button">
								            	立即登录
								          	</Button>
							          	</div>
						          		<Link to="/register">忘记密码？</Link>
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

function mapStateToProps() {
  return {
  };
}
const Login = Form.create()(LoginForm);
export default  connect(mapStateToProps)(Login)