/** 导航 **/
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Row, Col } from 'antd';
import userPic from 'static/images/common/avatar_default.png';
import "./menu.scss";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            userPic: userPic,
            mobile: '13666606473',
        };
    } 

    componentDidMount() {
        let path = this.props.location.search;
        console.log(path)
        this.setMenuOpen(this.props);
        //console.log(path)
    }
    componentWillReceiveProps(nextProps) {
        this.setMenuOpen(nextProps);
    }

    setMenuOpen = props => {
        let path = this.props.location;
        console.log(path)
        this.setState({
            //openKey: path.substr(0, path.lastIndexOf('/')),
            current: path
        });
    };

    handleClick = (e) => {
        console.log('click', e);
        this.setState({
            current: e.key
        })
    }

    render() {
        const { current } = this.state;
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
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 240 }}
                    inlineIndent={0}
                    selectedKeys={[current]}
                    mode="inline"
                >
                    <Menu.Item key="1">我的资产</Menu.Item>
                    <Menu.Item key="2">账户充值</Menu.Item>
                    <Menu.Item key="3"><Link to="/Cash">账户提现</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/Capital">资金流水</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/Set">账户设置</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/Coupon">我的赠券</Link></Menu.Item>
                </Menu>
            </div>
        );
    }
}