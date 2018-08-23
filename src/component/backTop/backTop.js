/** 回到顶部 **/
import React from "react";
import { BackTop } from 'antd';
import Dropdown from '../dropdown/dropdown';
import "./backTop.scss";


export default class backTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    onClick() {
    	alert(1)
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="backTop">
               	<BackTop visibilityHeight={100} onClick={this.onClick.bind(this)}>
               		<Dropdown name="appTop" />
               		<Dropdown name="wechatTop" />
               		<Dropdown name="customTop" />
			      	<div className="backTopIcon top"></div>
			    </BackTop> 
            </div>
        );
    }
}