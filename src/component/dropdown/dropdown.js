/** 下拉菜单 **/
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import imgHover1 from "static/images/common/header/hover1.png";
import imgHover2 from "static/images/common/header/hover2.png";
import imgHover3 from "static/images/common/header/hover3.png";
import "./dropdown.scss";


export default class dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeMenuList: [
                {jump: '/about?id=1', name: '关于华赢宝', sort: 1},
                {jump: '/about?id=2', name: '团队介绍', sort: 2},
                {jump: '/about?id=3', name: '业务介绍', sort: 3},
                {jump: '/about?id=4', name: '运营数据', sort: 4},
                {jump: '/about?id=5', name: '媒体报道', sort: 5},
                {jump: '/about?id=6', name: '公司动态', sort: 6},
                {jump: '/about?id=7', name: '从业机构信息', sort: 7},
                {jump: '/about?id=8', name: '相关法律法规披露', sort: 8},
            ],
        };
    }

    componentDidMount() {

    }

    render() {
        let name = this.props.name
        const menu1 = (
            <Menu>
                <Menu.Item>
                    <img className="hover hover1" src={imgHover1} />
                </Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu>
                <Menu.Item>
                    <img className="hover hover2" src={imgHover2} />
                </Menu.Item>
            </Menu>
        ); 
        const menu3 = (
            <Menu>
                <Menu.Item>
                    <img className="hover hover3" src={imgHover3} />
                </Menu.Item>
            </Menu>
        ); 
        const menu4 = (
            <Menu className="selectNav">
                {
                    this.state.homeMenuList.map((item, index) =>{
                        return (
                            <Menu.Item key={index}>
                                <Link to={item.jump}>{item.name}</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        );
       
        return (
            <Dropdown overlay={
                name === 'weChat' ? menu1
                : name === 'qq' ? menu2
                : name === 'app' ? menu3
                : name === 'open' ? menu4
                : ''}
            >
                {
                    name === 'weChat' || name === 'qq' || name === 'app' ? <b className={name}></b>
                    : name === 'open' ? <NavLink to="/about">信息披露</NavLink>
                    : ''
                }
            </Dropdown>
            
        ); 
    }
}