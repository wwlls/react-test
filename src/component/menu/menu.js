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
            userPic: userPic,
            collapsed: false,
        };
    } 

    componentDidMount() {
        this.setMenuOpen(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setMenuOpen(nextProps);
    }

    setMenuOpen = props => {
        const { path } = props;
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
        //选择的路径
        const { selectedKey } = this.state;
        return (
            <div className="menu">
                <div className="menuHeader">
                    <Row>
                        <Col md={8}>
                            <img src={
                                this.props.wxAvatar !== '' 
                                ?  this.props.wxAvatar
                                :  this.state.userPic
                            } alt="userPic" />
                        </Col>
                        <Col md={16}>
                            <p>您好，欢迎来到华赢宝！</p>
                            <p>用户名：{this.props.mobile.substring(0,3)}****{this.props.mobile.substring(7)}</p>
                        </Col>
                    </Row>
                </div>
                <Sider 
                    breakpoint="lg" 
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <Menu
                        onClick={this.menuClick}
                        style={{ width: 240 }}
                        inlineIndent={0}
                        selectedKeys={[selectedKey]}
                        mode="inline"
                        onOpenChange={this.openMenu}
                    >   
                        {
                            this.props.menuList.map((item, index) => {
                                return (
                                    <Menu.Item key={item.key}>
                                        <Link to={item.key}>{item.name}</Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
            </div>
        );
    }
}