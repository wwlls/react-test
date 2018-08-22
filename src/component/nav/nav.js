/** 下拉菜单 **/
import React from "react";
import { Menu } from 'antd';
import "./nav.scss";

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default class nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'home',
        };
    }

    handleClick(e) {
        console.log(e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick.bind(this)}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <a href="#/home" rel="noopener noreferrer">首页</a>
                </Menu.Item>
                <Menu.Item key="lend">
                    <a href="#/lend" rel="noopener noreferrer">我要出借</a>
                </Menu.Item>
                <Menu.Item key="safe">
                    <a href="#/safe" rel="noopener noreferrer">安全保障</a>
                </Menu.Item>
                <SubMenu title={<a href="#/information">信息披露</a>}>
                    <Menu.Item key="one">
                        <a href="#/index">关于华赢宝</a>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a href="#/index">团队介绍</a>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <a href="#/index">业务介绍</a>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <a href="#/index">运营数据</a>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <a href="#/index">媒体报道</a>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <a href="#/index">公司动态</a>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <a href="#/index">从业机构信息</a>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <a>相关法律法规披露</a>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="alipay">
          <a href="#/safe" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
            </Menu>
        );
    }
}