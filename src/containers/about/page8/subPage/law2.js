import React from "react";
import Header from '../../../../component/header/header';
import SubBanner from '../../../../component/subBanner/subBanner'
import Footer from '../../../../component/footer/footer';
import BackTop from '../../../../component/backTop/backTop';
import "./law.scss";

export default class Law2 extends React.Component {
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
                    <h5>《网络借贷禁止性行为提示书》</h5>
                    <p>
                        华赢宝平台作为网络借贷信息中介平台，将严格依据《网络借贷信息中介机构业务活动管理暂行办法》的规定，不予从事或者接受委托从事下列活动，请您知悉并共同进行监督：
                    </p>
                    <p>
                        1. 为自身或变相为自身融资；
                    </p>
                    <p>
                        2. 直接或间接接受、归集出借人的资金；
                    </p>
                    <p>
                        3. 自行或委托、授权第三方在互联网、固定电话、移动电话等电子渠道以外的物理场所进行宣传或推介融资项目；
                    </p>
                    <p>
                        4. 发放贷款，但法律法规另有规定的除外；
                    </p>
                    <p>
                        5. 将融资项目的期限进行拆分；
                    </p>
                    <p>
                        6. 自行发售出借等金融产品募集资金，代销银行出借、券商资管、基金、保险或信托产品等金融产品；
                    </p>
                    <p>
                        7. 开展类资产证券化业务或实现以打包资产、证券化资产、信托资产、基金份额等形式的债权转让行为；
                    </p>
                    <p>
                        8. 除法律法规和网络借贷有关监管规定允许外，与其他机构投资、代理销售、经纪等业务进行任何形式的混合、捆绑、代理；
                    </p>
                    <p>
                        9. 虚构、夸大融资项目的真实性、收益前景，隐瞒融资项目的瑕疵及风险，以歧义性语言或其他欺骗性手段等进行虚假片面宣传或促销等，捏造、散布虚假信息或不完整信息损害他人商业信誉，误导出借人或借款人；
                    </p>
                    <p>
                        10. 向借款用途为投资股票、场外配资、期货合约、结构化产品及其他衍生品等高风险的融资提供信息中介服务； 11. 从事股权众筹等业务。
                    </p>
                    <p>
                        禁止性行为提示方：杭州华赢宝网络科技有限公司
                    </p>
                </div>
                <Footer />
                <BackTop />
            </div>
        );
    }
}