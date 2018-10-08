import React from "react";
import Header from 'component/header/header';
import SubBanner from 'component/subBanner/subBanner'
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
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
                    <h5>《资金来源合法承诺书》</h5>
                    <p>
                        当您选择通过华赢宝平台进行资金出借时，华赢宝向您进行出借资金反洗钱、反恐怖融资告知及警示，您也需对出借资金来源的合法性做出保证和承诺。
                    </p>
                    <p>
                        1. 华赢宝平台在用户进行资金出借前对用户进行实名认证，以达到客户身份识别的目的，华赢宝有权拒绝为身份不明的用户或者涉嫌洗钱、进行可疑交易的用户提供资金出借、协助其进行资金划拨、流转操作等任何服务。因此当您在华赢宝平台进行实名认证时，您须保证并承诺：您向华赢宝平台提供的身份证明、银行账户、联系方式等信息真实、准确、完整，不存在任何虚假、错误、误导或者遗漏。
                    </p>
                    <p>
                        2. 根据《中华人民共和国反洗钱法》、《中华人民共和国刑法》等法律法规的规定，“洗钱”是指将违法所得及其产生的收益，通过各种手段掩饰、隐瞒其来源和性质，使其在形式上合法化的行为。因此当您通过华赢宝平台进行资金出借时，您须保证并承诺：
                    </p>
                    <p>
                        （1）您的出借资金来源合法，并非毒品犯罪、黑社会性质组织犯罪、恐怖活动犯罪、走私犯罪、贪污贿赂犯罪、破坏金融管理秩序犯罪、金融诈骗犯罪等任何犯罪或者其他任何非法活动所得及/或其产生的收益，您是出借资金的合法所有人，完全有权出借该笔资金。
                    </p>
                    <p>
                        2）您不会将在华赢宝平台出借资金及/或其产生的收益用作任何反国家、恐怖融资等违法犯罪活动，或以出借资金及所得收益支持、资助或变相帮助反国家、恐怖组织从事非法活动。 “本人已经阅读《网络借贷风险认知书》、《网络借贷禁止性行为提示书》和《资金来源合法承诺书》的所有内容，充分了解并清楚知晓相应的权利义务，并愿意承担相关风险及法律后果。”
                    </p>
                    <p>
                        网络借贷有风险，投资需谨慎！ 杭州华赢宝网络科技有限公司
                    </p>
                </div>
                <Footer />
                <BackTop />
            </div>
        );
    }
}