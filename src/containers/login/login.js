import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Checkbox, Button } from 'antd';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import BackTop from '../../component/backTop/backTop';
import Input from '../../component/input/input';
import "./login.scss";

const FormItem = Form.Item;
class LoginForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}

	handleSubmit(e) {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	    	console.log(err)
	      	if (!err) {
	        	console.log('Received values of form: ', values);
	      	}
	    });
	}

	componentDidMount() {
	}

	render() {
		const { getFieldDecorator } = this.props.form;
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
								<Form className="submit textC" onSubmit={this.handleSubmit.bind(this)}>
									<h5>登录我的华赢宝账户</h5>
									<p>没有账户？<Link to="/register">注册</Link></p>
									<ul>
										<li>
											<FormItem>
									          	{getFieldDecorator('userName', {
										            rules: [{ required: true, message: 'Please input your username!' }],
										        })(
									            	<Input type="user" name="userName" maxLength="11" placeholder="请输入手机号" />
									         	 )}
									        </FormItem>
									        <FormItem>
									          	{getFieldDecorator('password', {
									            	rules: [{ required: true, message: 'Please input your Password!' }],
									          	})(
									            <Input type="password" name="password" minLength="6" maxLength="16" placeholder="请输入密码" />
									          )}
									        </FormItem>
									        <FormItem>
									          	{getFieldDecorator('remember', {
										            valuePropName: 'checked',
										            initialValue: true,
									          	})(
									            	<Checkbox>Remember me</Checkbox>
									          	)}
									          	<a className="login-form-forgot" href="">Forgot password</a>
									          	<Button type="primary" htmlType="submit" className="login-form-button">
									            	Log in
									          	</Button>
									        </FormItem>
										</li>
									</ul>
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