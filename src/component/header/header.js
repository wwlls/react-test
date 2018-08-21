/** 导航 **/
import React from "react";
import { NavLink } from "react-router-dom";
import { Affix } from 'antd';
import imgLogo from "../../static/images/common/header/logo.png";
import imgHover1 from "../../static/images/common/header/hover1.png";
import imgHover2 from "../../static/images/common/header/hover2.png";
import imgHover3 from "../../static/images/common/header/hover3.png";
import "./header.scss";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 'none',
            hover1: 'none',
            hover2: 'none',
            hover3: 'none',
            top: 0,
        };
    }


    handleMouseUserOver(event) {
        let source = event.target.getAttribute("source");
        if (source === 'wx') {
            this.setState({
                hover1: 'block',
            })
        } else if (source === 'qq') {
            this.setState({
                hover2: 'block',
            })
        } else if (source === 'app') {
            this.setState({
                hover3: 'block',
            })
        } else if (source === 'news') {
            this.setState({
                open: 'block',
            })
        } 
    }
    handleMouseOut(event) {
        let source = event.target.getAttribute("source");
        console.log(source)
        if (source === 'wx') {
            this.setState({
                hover1: 'none',
            })
        } else if (source === 'qq') {
            this.setState({
                hover2: 'none',
            })
        } else if (source === 'app') {
            this.setState({
                hover3: 'none',
            })
        } else if (source === 'news') {
            this.setState({
                open: 'none',
            })
        } 
    }  

    render() {
        return (
            <div className="header" onMouseLeave={this.handleMouseOut.bind(this)} source='news'>
                <nav className="loginbar">
                    <div className="subLoginbar layout">
                        <div className="subLoginbarLeft">
                            <b className="phone"></b>
                            客服热线： 400-1190-717（工作时间 09:00-21:00）
                            <b className="weChat" onMouseOver={this.handleMouseUserOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)} source='wx'></b>
                            <b className="qq" onMouseOver={this.handleMouseUserOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)}  source='qq'></b>
                        </div>
                        <div className="subLoginbarRight">
                            <a href="javascript:;">注册</a>
                            <i>/</i>
                            <a href="javascript:;">登录</a>
                            <b className="app" onMouseOver={this.handleMouseUserOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)} source='app'></b>
                            <span className="one">手机客户端</span>
                            <span className="two">市场有风险，出借需谨慎</span>
                        </div>
                        <img className="hover hover1" style={{display:this.state.hover1}} src={imgHover1} />
                        <img className="hover hover2" style={{display:this.state.hover2}} src={imgHover2} />
                        <img className="hover hover3" style={{display:this.state.hover3}} src={imgHover3} />
                    </div>
                </nav>
                <Affix offsetTop={this.state.top}>
                    <div className="nav layout">
                        <div className="navClear">
                            <div className="logo">
                                <img src={imgLogo} />
                            </div>
                            <div className="subNav">
                                <ul>
                                    <li><NavLink to="/home">首页</NavLink></li>
                                    <li><NavLink to="/lend">我要出借</NavLink></li>
                                    <li><NavLink to="/safe">安全保障</NavLink></li>
                                    <li onMouseOver={this.handleMouseUserOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)} source='news'>
                                        <NavLink to="/information">信息披露</NavLink>
                                        <div className="selectNav" style={{display:this.state.open}}>
                                            <ol>
                                                <li>
                                                    <a href="javascript:;">关于华赢宝</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">团队介绍</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">业务介绍</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">运营数据</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">媒体报道</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">公司动态</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">从业机构信息</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">相关法律法规披露</a>
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
            </div>
        );
    }
}

// <NavLink to={{
        //     pathname: "/test",
        //     search: "?a=123&b=abc",
        //     state: { c: "456", d: "ABC" }
        //   }}
        // >
        //   测试页面
        // </NavLink>|