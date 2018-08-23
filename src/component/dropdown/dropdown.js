/** 下拉菜单 **/
import React from "react";
import { Menu, Dropdown } from 'antd';
import imgHover1 from "../../static/images/common/header/hover1.png";
import imgHover2 from "../../static/images/common/header/hover2.png";
import imgHover3 from "../../static/images/common/header/hover3.png";
import app from "../../static/images/common/download/app.png";
import wechat from "../../static/images/common/download/wechat.png";
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
        const menu4 = (
            <Menu>
                <Menu.Item>
                    <div className="backTopApp">
                        <img src={app} />
                        <p>扫码下载app领红包</p>
                    </div>
                </Menu.Item>
            </Menu>
        ); 
        const menu5 = (
            <Menu>
                <Menu.Item>
                    <div className="backTopApp">
                        <img src={wechat} />
                        <p>关注微信福利抢先知</p>
                    </div>
                </Menu.Item>
            </Menu>
        ); 
        const menu6 = (
            <Menu>
                <Menu.Item>
                    <div className="backTopApp">
                        <p>客服热线：</p>
                        <p>400-1190-717</p>
                        <p>工作时间：</p>
                        <p>9:00 ~ 21:00</p>
                        <p>QQ粉丝群：</p>
                        <p>251094151</p>
                    </div>
                </Menu.Item>
            </Menu>
        ); 
          
        if(name == 'weChat' || name == 'qq' || name == 'app') {
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
        } else if(name == 'appTop' || name == 'wechatTop' || name == 'customTop'){
            return (
                <Dropdown overlay={
                    name == 'appTop' ? menu4
                    : name == 'wechatTop' ? menu5
                    : name == 'customTop' ? menu6
                    : ''}
                >
                    <div className={'backTopIcon ' + name}></div>
                </Dropdown>
                
            );
        }  
    }
}