/** 导航 **/
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Affix, Modal, Message, Button } from 'antd';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import { getInfoData } from 'actions';
import Utils from 'utils/index';
import Dropdown from '../dropdown/dropdown';
import imgLogo from "static/images/common/header/logo.png";
import "./header.scss";

export default class Header extends React.Component {
    //子组件路由无法跳转使用 Context
    static contextTypes = {
        router: PropTypes.object
    }
    //redux定义方法与参数
    // static propTypes = {
    //     checkMobileData: PropTypes.object.isRequired,
    //     checkMobile: PropTypes.func.isRequired,
    // }
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: 'none',
            top: 0,
            name: '',
            visible: false
        };
    }

    //二级导航
    handleMouseUserOver = (event) => {
        this.setState({
            open: 'block',
        }) 
    }
    handleMouseOut = () => {
        this.setState({
            open: 'none',
        })
    }  

    //退出登录
    handleLogout = () => {
        this.setState({
            visible: true,
        });
    }
    //确定
    handleOk = (e) => {
        let data = {};
        let callFuc = (res) => {
            console.log(res)
            if(res.rtn_code === 0) {
                Utils.removeStorage('customerMobile');
                this.setState({
                    visible: false,
                });
                Message.success('退出成功');
                this.context.router.history.push('/home');
            }
        }
        Utils.postRequest('logout', data, callFuc);
    }
    //取消
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    componentDidMount() {

        // this.props.getInfoData().then(() => {
        //     let { InfoData } = this.props;
        //     console.log(InfoData.rtn_code)
        //     // if(InfoData.rtn_code === 0) {
        //     //    let customerMobile = JSON.parse(InfoData.body).customer.mobile;
        //     //     this.setState({
        //     //         mobile: customerMobile
        //     //     }) 
        //     // }
        // });
    }

    render() {
        //获取缓存的手机号
        let customerMobile = Utils.getStorage('customerMobile');
        return (
            <div className="header">
                <nav className="loginbar">
                    <div className="subLoginbar layout">
                        <div className="subLoginbarLeft">
                            <b className="phone"></b>
                            客服热线： 400-1190-717（工作时间 09:00-21:00）
                            <Dropdown name="weChat" />
                            <Dropdown name="qq" />
                        </div>
                        <div className="subLoginbarRight">
                            {customerMobile !== '' &&  customerMobile !== null && customerMobile !== undefined
                            ? <div className="floatL">
                                <Link to="/member">{String(customerMobile).substring(0,3)}****{String(customerMobile).substring(7)}</Link>
                                <i>/</i>
                                <a href="javascript:;" onClick={this.handleLogout}>退出</a>
                              </div>
                            : <div className="floatL">
                                <Link to="/register">注册</Link>
                                <i>/</i>
                                <Link to="/login">登录</Link>
                              </div>
                            }
                            <Dropdown name="app" />
                            <span className="one">手机客户端</span>
                            <span className="two">市场有风险，出借需谨慎</span>
                        </div>
                    </div>
                </nav>
                <Affix offsetTop={this.state.top}>
                    <div className="nav layout">
                        <div className="navClear">
                            <div className="logo">
                                <img src={imgLogo} alt="logo" />
                            </div>
                            <div className="subNav">
                                <ul>
                                    <li><NavLink to="/home">首页</NavLink></li>
                                    <li><NavLink className={this.props.active} to="/lend">我要出借</NavLink></li>
                                    <li><NavLink to="/safe">稳健发展</NavLink></li>
                                    <li onMouseOver={this.handleMouseUserOver} onMouseLeave={this.handleMouseOut} source='news'>
                                        <NavLink to="/about">信息披露</NavLink>
                                        <div className="selectNav" style={{display:this.state.open}}>
                                            <ol>
                                                <li>
                                                    <Link to="/about?id=1">关于华赢宝</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=2">团队介绍</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=3">业务介绍</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=4">运营数据</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=5">媒体报道</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=6">公司动态</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=7">从业机构信息</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=8">相关法律法规披露</Link>
                                                </li>
                                            </ol>
                                        </div>
                                    </li>
                                    <li><NavLink to="/member">我的账户</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Affix>
                <Modal
                  title="提示"
                  centered
                  destroyOnClose={true}
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                  footer={[
                    <Button key="submit" type="primary" onClick={this.handleOk}>确认</Button>
                  ]}
                >
                  <p>确定要退出华赢宝吗？</p>
                </Modal>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         InfoData: state.getInfo,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ getInfoData }, dispatch);
// }
// export default connect(mapStateToProps , mapDispatchToProps)(Header)
// <NavLink to={{
        //     pathname: "/test",
        //     search: "?a=123&b=abc",
        //     state: { c: "456", d: "ABC" }
        //   }}
        // >
        //   测试页面
        // </NavLink>|