import React from "react";
import { Icon, Row, Col } from 'antd';
import safeImg1 from '../../../static/images/safe/img1.png';
import safeImg2 from '../../../static/images/safe/img2.png';

export default class page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            safeImg1: safeImg1,
            safeImg2: safeImg2,
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="page">
                <section className="column">
                    <h5 className="textC">什么是银行存管？</h5>
                    <p>
                        根据银监会等四部委发布的《网络借贷信息中介机构业务活动管理暂行办法》以及《网络借贷资金存管业务指引》，网贷平台必须选择符合条件的银行机构作为出借人与借款人的资金存管机构。银行存管上线后，资金交易环节均在银行系统中进行，平台与用户资金完全隔离，彻底杜绝资金池。2017年6月28日，华赢宝正式与海口联合农商银行签订存管协议，标志着华赢宝合规化建设步入新台阶。
                    </p>
                </section>
                <section className="column textC">
                    <h5 className="textL">银行存管流程图</h5>
                    <img className="safeImg1" src={this.state.safeImg1} alt="银行存管" />
                </section>
                <section className="column textC">
                    <h5>为什么要接银行存管？</h5>
                    <Row gutter={0}>
                        <Col md={12}>
                            <b className="bank info1"></b>
                            <p>对客户身份及交易授权进行认证</p>
                            <p>防止网贷机构非法挪用客户资金</p>
                        </Col>
                        <Col md={12}>
                            <b className="bank info2"></b>
                            <p>对客户身份及交易授权进行认证</p>
                            <p>防止网贷机构非法挪用客户资金</p>
                        </Col>
                        <Col md={12} className="bottom">
                            <b className="bank info3"></b>
                            <p>对客户身份及交易授权进行认证</p>
                            <p>防止网贷机构非法挪用客户资金</p>
                        </Col>
                        <Col md={12} className="bottom">
                            <b className="bank info4"></b>
                            <p>对客户身份及交易授权进行认证</p>
                            <p>防止网贷机构非法挪用客户资金</p>
                        </Col>
                    </Row>
                </section>
                <section className="column textC">
                    <h5>资金存管的优势</h5>
                    <p className="textL">
                        银行全程存管用户资金，提升资金安全，避免了平台跑路、资金池以及资金往来不透明的风险。
                    </p>
                    <img className="safeImg2" src={this.state.safeImg2} alt="资金存管优势" />
                </section>
                <section className="column">
                    <h5 className="textC">什么是银行存管？</h5>
                    <p>
                        资金存管银行名称：海口联合农商银行
                    </p>
                    <p>
                        主要权利义务描述： 
                    </p>
                    <p>
                        杭州华赢宝网络科技有限公司是资金存管业务中的委托人，海口联合农商银行是存管人。存管人接受委托人委托，开展客户资金存管业务。
                    </p>
                    <p>
                        委托人的工作职责主要包括：
                    </p>
                    <p>
                        （一）负责网络借贷平台技术系统的持续开发及安全运营；
                    </p>
                    <p>
                        （二）组织实施网络借贷信息中介机构信息披露工作，包括但不限于委托人基本信息、借贷项目信息、借款人基本信息及经营情况、各参与方信息等应向存管人充分披露的信息； 
                    </p>
                    <p>
                        （三）每日与存管人进行账务核对，确保系统数据的准确性； 
                    </p>
                    <p>
                        （四）妥善保管网络借贷资金存管业务活动的记录、账册、报表等相关资料，相关纸质或电子介质信息应当自借贷合同到期后保存5年以上。
存管人的工作职责主要包括：
                    </p>
                    <p>
                        （一）为委托人开立网络借贷资金存管专用账户和自有资金账户，为出借人、借款人和担保人等在网络借贷资金存管专用账户下分别开立子账户，确保客户网络借贷资金和网络借贷信息中介机构自有资金分账管理，安全保管客户交易结算资金；
                    </p>
                    <p>
                        （二）根据法律法规规定和存管合同约定，按照出借人与借款人发出的指令或业务授权指令，办理网络借贷资金的清算支付；
                    </p>
                    <p>
                        （三）记录资金在各交易方、各类账户之间的资金流转情况；
                    </p>
                    <p>
                        （四）妥善保管网络借贷资金存管业务相关的交易数据、账户信息、资金流水、存管报告等包括纸质或电子介质在内的相关数据信息和业务档案，相关资料应当自借贷合同到期后保存5年以上。
                    </p>
                    <p>
                        资金存管方式：直接存管
                    </p>
                    <p>
                        资金存管方法：双方业务系统对接  
                    </p>
                    <p>
                        资金存管依据：<span>《网络借贷资金存管业务指引》</span>
                    </p>
                </section>
            </div>
        );
    }
}