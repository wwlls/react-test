/** 回到顶部 **/
import React from "react";
import { BackTop , Tooltip} from 'antd';
import app from "static/images/common/app.png";
import wechat from "static/images/common/wechat.png";
import "./backTop.scss";


export default class backTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const appTop = <div>
	               			<img src={app} />
	               			<p>扫码下载app领红包</p>
               			</div>;
		const wechatTop = <div>
	               			<img src={wechat} />
	               			<p>关注微信福利抢先知</p>
               			</div>;
		const customTop = <div>
							<ul>
								<li>
									<p>客服热线：</p>
	               					<p>400-1190-717</p>
								</li>
								<li>
									<p>工作时间：</p>
	               					<p>9:00 ~ 21:00</p>
								</li>
								<li>
									<p>QQ粉丝群：</p>
           							<p>251094151</p>
								</li>	
							</ul>
               			</div>;
        return (
            <div className="backTop">
               	<BackTop visibilityHeight={100}>
               		<Tooltip placement="leftTop" title={appTop}>
				        <div className="backTopIcon appTop"></div>
				    </Tooltip>
               		<Tooltip placement="leftTop" title={wechatTop}>
				        <div className="backTopIcon wechatTop"></div>
				    </Tooltip>
				    <Tooltip placement="leftTop" title={customTop}>
				        <div className="backTopIcon customTop"></div>
				    </Tooltip>
			      	<div className="backTopIcon top"></div>
			    </BackTop> 
            </div>
        );
    }
}