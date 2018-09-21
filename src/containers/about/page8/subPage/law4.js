import React from "react";
import Header from '../../../../component/header/header';
import SubBanner from '../../../../component/subBanner/subBanner'
import Footer from '../../../../component/footer/footer';
import BackTop from '../../../../component/backTop/backTop';
import "./law.scss";

export default class Law1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="law">
                <Header />
                <SubBanner />
                <div className="page law">
                    <h5>出借人风险评估制度：</h5>
                    <p>
                        为方便出借人了解自身的风险承受能力，选择合适的出借产品和服务，按照网络借贷相关法律法规规定，华赢宝根据出借人的风险评估结果，将出借人的风险承受能力由低到高分为保守型、稳健型和积极型三种类型。出借人在进行出借之前，需要完成风险承受能力测评。 华赢宝根据项目的风险特征对每一个项目进行风险评定，以供出借人参考，最高为中等风险，最低为低风险。风险越低代表发生违约的概率越小。 原则上，出借人风险承受能力与项目评级相匹配。保守型出借人可以出借项目评级为低风险的项目，在出借中低风险项目时会强制弹出风险提示，不允许出借中等风险级项目。稳健型用户可以出借中等风险、中低风险、低风险项目，但在出借中等风险项目时会强制弹出风险提示。积极型用户可以出借中等风险、中低风险、低风险项目。 出借人在一个自然年内最多可进行3次风险承受能力评估，风险评估的结果有效期为一年。
                    </p>
                </div>
                <Footer />
                <BackTop />
            </div>
        );
    }
}