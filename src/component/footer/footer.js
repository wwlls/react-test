/** 尾部 **/
import React from "react";
import keep from "../../static/images/common/footer/place.png";
import "./footer.scss";


export default class backTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="layout">
                <div className="footer clear">
                    <div className="subfooterLeft  floatL">
                        <dl className="floatL">
                            <dt>
                                <a href="javascript:;">安全保障</a>
                            </dt>
                            <dd>
                                <a href="javascript:;">银行存管</a>
                            </dd>
                            <dd>
                                <a href="javascript:;">风险管理</a>
                            </dd>
                            <dd>
                                <a href="javascript:;">股东背景</a>
                            </dd>
                        </dl>
                        <dl className="floatL">
                            <dt>
                                <a href="javascript:;">运营数据</a>
                            </dt>
                        </dl>
                        <dl className="floatL">
                            <dt>
                                <a href="javascript:;">信息披露</a>
                            </dt>
                            <dd>
                                <a href="javascript:;">关于我们</a>
                            </dd>
                            <dd>
                                <a href="javascript:;">业务介绍</a>
                            </dd>
                            <dd>
                                <a href="javascript:;">团队介绍</a>
                            </dd>
                        </dl>
                    </div>
                    <div className="subfooterCenter floatL">
                        <span className="phoneIcon footIcon floatL"></span>
                        <div className="phoneSize floatL">
                            <h5>客服热线：</h5>
                            <i>工作时间：9:00～21:00</i>
                        </div>
                        <h1 className="clear">400-1190-717</h1>
                    </div>
                    <div className="subfooterRight floatL">
                        <div className="clear">
                            <span className="adressIcon footIcon floatL"></span>
                            <div className="phoneSize floatL">
                                <h5>公司地址：</h5>
                                <i>杭州市滨江区信诚路33号支氏集团</i>
                            </div>
                        </div>
                        <div className="clear">
                            <span className="qqIcon footIcon floatL"></span>
                            <div className="phoneSize floatL">
                                <h5>QQ粉丝群：</h5>
                                <i>251094151</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyRight">
                    <p>Copyright ©2015 - 2018 杭州华赢宝网络科技有限公司</p>
                    <p>
                        <img src={keep} alt="备案号图标" />
                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802005885">浙公网安备：33010402000327</a>
                        &nbsp浙ICP备16046593号-1&nbsp ICP经营许可证编号：浙B2-20171023
                    </p>
                </div>
            </div>
        );
    }
}