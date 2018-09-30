import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Checkbox, Input, Button, Row, Col } from 'antd';
import Utils from 'utils/index';
import Tools from 'utils/tools';
import Header from 'component/header/header';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import CountDown from 'component/countDown/countDown';
import "./forget.scss";

const FormItem = Form.Item;

class ForgetForm extends React.Component {
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
        } else {
        	form.validateFields(['mobile'], { force: true });
        }
         
    };

	componentDidMount() {
	}

	//验证手机号
	checkPhone = (rule, value, callback) => {
		const form = this.props.form;	
		if(!(Tools.isMobile(value)) || value.length !== 11) {
            callback("手机号码输入有误");
        } else {
            callback();
            // this.setState({
            // 	mobile: form.getFieldValue('mobile')
            // 	this.props.form.validateFields(['nickname'], { force: true });
            // })
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
								<h4>
									<span></span>忘记密码
								</h4>
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
			</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
const Forget = Form.create()(ForgetForm);
export default  connect(mapStateToProps)(Forget)