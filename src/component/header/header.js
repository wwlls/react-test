/** 导航 **/
import React from "react";
import { NavLink } from "react-router-dom";
import { Affix } from 'antd';
import Dropdown from '../dropdown/dropdown';
import imgLogo from "../../static/images/common/header/logo.png";

import "./header.scss";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 'none',
            top: 0,
            name: '',
        };
    }


    handleMouseUserOver(event) {
        this.setState({
            open: 'block',
        }) 
    }
    handleMouseOut() {
        this.setState({
            open: 'none',
        })
 
    }  

    render() {
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
                            <a href="javascript:;">注册</a>
                            <i>/</i>
                            <a href="javascript:;">登录</a>
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
                                    <li><NavLink to="/lend">我要出借</NavLink></li>
                                    <li><NavLink to="/safe">安全保障</NavLink></li>
                                    <li onMouseOver={this.handleMouseUserOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)} source='news'>
                                        <NavLink to="/information">信息披露</NavLink>
                                        <div className="selectNav" style={{display:this.state.open}}>
                                            <ol>
                                                <li>
                                                    <a href="#/list">关于华赢宝</a>
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