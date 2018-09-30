import React from "react";
import aboutImg6 from 'static/images/about/img6.png';
import aboutImg7 from 'static/images/about/img7.png';
import aboutImg8 from 'static/images/about/img8.png';

export default class page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutImg6: aboutImg6,
            aboutImg7: aboutImg7,
            aboutImg8: aboutImg8,
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="page">
                <section className="column">
                    <h5 className="textC">团队介绍</h5>
                    <p>
                        华赢宝理财的创始人团队和高管，有来自四大国有银行的风控专家、来自知名资产管理公司的产品规划高手、来自知名阳光私募的出借顾问；也有移动互联网行业的佼佼者，知名美资外企的技术总监、来自通信央企的运营和渠道总监、以及各位实战经历丰富的精尖技术人员。
                    </p>
                </section>
                <section className="column">
                    <ul>
                        <li className="clear">
                            <img className="floatL" src={this.state.aboutImg6} alt="首席运营官COO" />
                            <dl className="floatR">
                                <dt>
                                    <span>陈文海</span>首席运营官COO
                                </dt>
                                <dd>
                                    浙江大学工学硕士，服务大型央企十余年，拥有丰富的业务运营和企业管理经验。两年前毅然放弃高管职位投身于互联网创业大潮，创立华赢宝理财并出任华赢宝理财COO，负责管理华赢宝的全面业务开拓与运营，大局观强，运营战略清晰，是平台线上运营推广专家。
                                </dd>
                            </dl>
                        </li>
                        <li className="clear">
                            <img className="floatL" src={this.state.aboutImg7} alt="首席技术官CTO" />
                            <dl className="floatR">
                                <dt>
                                    <span>吴廷忠</span>首席技术官CTO
                                </dt>
                                <dd>
                                    浙江大学竺可桢学院工程教育高级班，浙江大学机械电子工程硕士，具有近10年知名美资外企软件研发、技术管理工作经验。在复杂系统架构和设计、系统性能优化、数据分析和处理等方面有深入研究。擅长系统规划、架构设计、技术管理、团队管理等。
                                </dd>
                            </dl>
                        </li>
                        <li className="clear">
                            <img className="floatL" src={this.state.aboutImg8} alt="首席风控官" />
                            <dl className="floatR">
                                <dt>
                                    <span>王凤亮</span>首席风控官
                                </dt>
                                <dd>
                                    主管华赢宝理财在线风控，20多年银行从业经验，曾任工商银行、深圳发展银行等多家知名金融机构高管。从事金融行业达22年，在个人消费和小额信贷领域具有非常丰富的经验，是专业的风险经营及管控理念专家。
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}