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
                    <h5>银监会发布《网络借贷资金存管业务指引》 :http://www.cbrc.gov.cn/chinese/home/docView/ADBA919718424013997B848840730EB1.html 银监会关于印发</h5>
                    <p>
                        P2P网络借贷风险专项整治工作实施方案》的通知:http://www.cbrc.gov.cn/chinese/home/docDOC_ReadView/D81B52D3D20A49A99522C48FA8F1 C752.html 
                    </p>
                    <p>
                        银监会等四部委《网络借贷信息中介机构业务活动管理暂行办法》 :http://www.cbrc.gov.cn/govView_37D312933F1A4CECBC18F9A96293F450.html
                    </p>
                    <p>
                        中国人民银行等十部委发布《关于促进互联网金融健康发展的指导意见》:http://www.pbc.gov.cn/goutongjiaoliu/113456/113469/2813898/index.html
                    </p>
                    <p>
                        最高人民法院关于审理民间借贷案件适用法律若干问题的规定:http://www.court.gov.cn/fabu-xiangqing-15146.html
                    </p>
                    <p>
                        风险提示 《网络借贷风险认知书》 《网络借贷禁止性行为提示书》 《资金来源合法承诺书》 《出借人风险评估制度》 《网贷风险教育》
                    </p>
                </div>
                <Footer />
                <BackTop />
            </div>
        );
    }
}