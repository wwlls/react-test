/** 下拉菜单 **/
import React from "react";
import { Menu, Dropdown } from 'antd';
import imgHover1 from "static/images/common/header/hover1.png";
import imgHover2 from "static/images/common/header/hover2.png";
import imgHover3 from "static/images/common/header/hover3.png";
import "./dropdown.scss";


export default class dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open : 'none'
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
       
        return (
            <Dropdown overlay={
                name == 'weChat' ? menu1
                : name == 'qq' ? menu2
                : name == 'app' ? menu3
                : ''}
            >
                <b className={name}></b>
            </Dropdown>
            
        ); 
    }
}