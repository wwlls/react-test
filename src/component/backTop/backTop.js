/** 回到顶部 **/
import React from "react";
import { BackTop } from 'antd';
import download from "../../static/images/common/header/download.png";
import "./backTop.scss";


export default class backTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    onClick() {
    	alert(1)
    }

    render() {
        
        return (
            <div className="backTop">
               	<BackTop visibilityHeight={100} onClick={this.onClick.bind(this)}>
               		<div className="backTopIcon app">
               			<div className="backTopApp">
	               			<img src={download} />
	               			<p>扫码下载app领红包</p>
               			</div>
               		</div>
               		<div className="backTopIcon wechat"></div>
               		<div className="backTopIcon custom"></div>
			      	<div className="backTopIcon top"></div>
			    </BackTop> 
            </div>
        );
    }
}