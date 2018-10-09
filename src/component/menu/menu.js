import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Row, Col } from 'antd';
import userPic from 'static/images/common/avatar_default.png';
import "./menu.scss";

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

export default class SiderCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: '', //选择的路径
            userPic: userPic,
            mobile: '13666606473',
        };
    } 

    componentDidMount() {
        this.setMenuOpen(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setMenuOpen(nextProps);
    }

    setMenuOpen = props => {
        const {path} = props;
        this.setState({
            selectedKey: path
        });
    };

    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
    };

    render() {
        const { selectedKey } = this.state;
        return (
            <div className="menu">
                <div className="menuHeader">
                    <Row>
                        <Col md={8}>
                            <img src={this.state.userPic} alt="userPic" />
                        </Col>
                        <Col md={16}>
                            <p>您好，欢迎来到华赢宝！</p>
                            <p>用户名：{this.state.mobile.substring(0,3)}....{this.state.mobile.substring(7)}</p>
                        </Col>
                    </Row>
                </div>
                <Sider>
                    <Menu
                        onClick={this.menuClick}
                        style={{ width: 240 }}
                        inlineIndent={0}
                        selectedKeys={[selectedKey]}
                        mode="inline"
                        onOpenChange={this.openMenu}
                    >
                        <Menu.Item key={"/member"}>
                            <Link to={"/member"}>我的资产</Link>
                        </Menu.Item>
                        <Menu.Item key={"/member/recharge"}>
                            <Link to={"/member/recharge"}>账户充值</Link>
                        </Menu.Item>
                        <Menu.Item key={"/member/cash"}>
                            <Link to={"/member/cash"}>账户提现</Link>
                        </Menu.Item>
                        <Menu.Item key={"/member/capital"}>
                            <Link to={"/member/capital"}>资金流水</Link>
                        </Menu.Item>
                        <Menu.Item key={"/member/set"}>
                            <Link to={"/member/set"}>账户设置</Link>
                        </Menu.Item>
                        <Menu.Item key={"/member/coupon"}>
                            <Link to={"/member/coupon"}>我的赠券</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </div>
        );
    }
}