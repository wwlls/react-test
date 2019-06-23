/** 导航 **/
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Affix, Modal, Message, Button } from 'antd';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import { getInfoData } from 'actions';
import Utils from 'utils/index';
import Tools from 'utils/tools';
import Dropdown from '../dropdown/dropdown';
import imgLogo from "static/images/common/header/logo.png";
import "./header.scss";

class Header extends React.Component {
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
        console.log(props)
        console.log(context + '=====>222')
        this.state = {
            top: 0,
            name: '',
            visible: false,
            contact: '确定要退出华赢宝吗？'
        };
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
        Utils.postRequest('logout', data).then((res) => {
            console.log(res)
            if(res.rtn_code === 0) {
                Utils.removeSession();
                this.setState({
                    visible: false,
                });
                Message.success('退出成功');
                this.context.router.history.push('/home');
            }
        })
    }
    //取消
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    componentDidMount() {
        //获取天气信息
        let city = '杭州';
        Utils.thirdRrquest({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })

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
                            <img className="weather" src={this.state.dayPictureUrl} alt="" />
                            {this.state.weather}
                        </div>
                        <div className="subLoginbarRight">
                            {customerMobile !== '' &&  customerMobile !== null && customerMobile !== undefined
                            ? <div className="floatL">
                                <Link to="/member">{Tools.formatPhone(customerMobile)}</Link>
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
                                    <li>
                                        <Dropdown name="open" />
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
                  <p>{this.state.contact}</p>
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
 export default Header
