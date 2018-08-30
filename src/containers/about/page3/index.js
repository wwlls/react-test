import React from "react";
import aboutImg9 from '../../../static/images/about/img9.png';
import aboutImg10 from '../../../static/images/about/img10.png';

export default class page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutImg9: aboutImg9,
            aboutImg10: aboutImg10,
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="page">
               <section className="column">
                    <h4 className="textC">业务介绍</h4>
                    <p className="size">
                        <i></i><b>资产安全</b>
                    </p>
                    <p className="size">
                        互联网金融的本质还是金融，随着监管政策的落实及网贷平台银行存管的上线，优质稀缺资产是决定网贷平台出借收益和安全性的根本因素。华赢宝主打优质安全的消费金融产品。
                    </p>
                </section>
                <section className="column">
                    <p>
                        <i></i><b>产品特点</b>
                    </p>
                    <p className="size">
                        <em>优质借款人：</em>借款人均为具有稳定收入来源的优质青年客户群体，月收入在2000-5000元，借款用于短期消费借款，工作稳定，违约成本高。
                    </p>
                    <p>
                        <em>金额小、期限短：</em>借款期限一般不超过3个月，单笔借款金额90%以上不超过5000元，单笔借款期限短、金额小，借款人极度分散；      
                    </p>
                    <p>
                        <em>多重风险控制：</em>通过信息认证、征信查询、人脸识别、本地黑名单数据等等大数据及风控系统，对借款人信息进行严格审核，且以银行卡代扣作为主要的还款保障，有效降低逾期风险，同时通过成熟的风控模型和大数据测评系统全面核实借款人信用记录、通讯、工作、家庭等相关信息。
                    </p>
                </section>
                <section className="column textC">
                    <p className="textL">
                        <i></i><b>产品原理</b>
                    </p>
                    <img className="aboutImg9" src={this.state.aboutImg9} alt="产品原理" />
                </section>
                <section className="column textC">
                    <p className="textL">
                        <i></i><b>合作机构</b>
                    </p>
                    <img className="aboutImg9" src={this.state.aboutImg10} alt="合作机构" />
                </section>
                <section className="column">
                    <p>
                        <i></i><b>资金保障</b>
                    </p>
                    <p className="size">
                        <em>小额贷款出借分散：</em>单个借款人单笔借款最多不超过5000元，智能匹配，出借人可分散出借给多个借款债权人，极大降低出借风险
                    </p>
                    <p>
                        <em>项目真实透明：</em>三类信息，公开透明，有凭证，可追溯，透明无虚假（出借人可随时到公司交流考察）      
                    </p>
                    <p>
                        <em>担保/回购保障：</em>合作资产机构对项目的本息支付提供连带责任担保，若借款人未能按期还款，由其进行代偿。
                    </p>
                </section>
            </div>
        );
    }
}