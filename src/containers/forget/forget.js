import React from 'react';
import { Route, Switch, Link, Prompt } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Form, Checkbox, Input, Button, Row, Col, Icon, Message } from 'antd';
import md5 from 'md5';
import { checkMobile, getVerifyCode } from 'actions';
import Utils from 'utils/index';
import Tools from 'utils/tools';
import Header from 'component/header/header';
import Title from 'component/title/title';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import CountDown from 'component/countDown/countDown';
import "./forget.scss";

const FormItem = Form.Item;

class ForgetForm extends React.Component {
	static propTypes = {
		checkMobileData: PropTypes.object.isRequired,
        checkMobile: PropTypes.func.isRequired,
        verifyCodeData: PropTypes.object.isRequired,
        getVerifyCode: PropTypes.func.isRequired,
    }
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
	        	let data = {};
	        	data.mobile = values.mobile;
	        	data.verify_code = values.code;
	        	data.new_passwd = 'hyb_' + md5(values.password);
	        	let callFuc = (res) => {
            	console.log(res)
            		if(res.rtn_code === 0) {
            			this.props.history.push('/login');
            		} else {
            			Message.error(res.rtn_msg);
            		}
	            }
	            Utils.postRequest('login/updatePasswd', data, callFuc);
	      	}
	    });
	}

	//获取验证码
	habdelGetCode = () => {
		let form = this.props.form;
        let value = form.getFieldValue('mobile');
        //点击验证码判断手机号
        let { checkMobileData } = this.props;
		if((Tools.isMobile(value))) {
			if(checkMobileData.rtn_code === 10010 || checkMobileData.rtn_code === 10013) {
	            Message.info('您的账户不存在，请注册');
            } else if(checkMobileData.rtn_code === 0) {
				let data = {};
	            data.mobile = value;
	            data.reason = '修改登录密码';
	            this.props.getVerifyCode(data).then(() => {
	            	let { verifyCodeData } = this.props;
	            	console.log(verifyCodeData)
	            	if(verifyCodeData.rtn_code == 0) {
	            		this.setTime();
	            	} else {
	            		Message.error(verifyCodeData.rtn_msg);
	            	}
	            });
	            // let callFuc = (res) => {
	            // 	console.log(res)
	            // 	
	            // }
	            // Utils.postRequest('verifyCode/get', data, callFuc);
			} else if(checkMobileData.rtn_code === 10018) {
				Message.info('您输入的手机号存在风险！请联系客服');
			}
        } else {
        	form.validateFields(['mobile'], { force: true });
        } 
    };

    //倒计时方法
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
		//是否登录
		let customerMobile = Utils.getStorage('customerMobile');
		if(customerMobile !== '' && customerMobile !== null && customerMobile !== undefined) {
			this.props.history.push('/home');
		}
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
            this.props.checkMobile(data);
   //          let data = {};
			// data.mobile = value;
			// this.props.checkMobile(data).then(() => {
			// 	let { checkMobileData } = this.props;
			// 	console.log(checkMobileData)
			//    	if(checkMobileData.rtn_code === 0) {
			// 		Message.info('您的账户已存在，请登录');
			// 	} else if(checkMobileData.rtn_code === 10010 || checkMobileData.rtn_code === 10013) {
			// 		Message.info('您的账户不存在，请注册');
			// 	} else if(checkMobileData.rtn_code === 10018) {
			// 		Message.info('您输入的手机号存在风险！请联系客服');
			// 	}
			// });
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
			<div>
				<Header />
				<div className="forget">
					<div className="layout">
						<div className="subLogin">
							<section className="bgLogin">
								<Title title="忘记密码" />
								<Form className="submit textC" onSubmit={this.handleSubmit}>
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
							        <FormItem>
							        	<div className="submitBtn textC">
								          	<Button type="primary" htmlType="submit" className="login-form-button">
								            	确定
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
				<Prompt message={() => {
				  return clearInterval(this.timer);
				}} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
    	checkMobileData: state.checkMobile,
    	verifyCodeData: state.getVerifyCode,
    }
}

const mapDispatchToProps = (dispatch) => {
  	return bindActionCreators({ checkMobile, getVerifyCode }, dispatch);
}

const Forget = Form.create()(ForgetForm);
export default connect(mapStateToProps , mapDispatchToProps)(Forget)