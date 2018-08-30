import React from "react";
import safeImg3 from '../../../static/images/safe/img3.png';
import safeImg4 from '../../../static/images/safe/img4.png';
import safeImg5 from '../../../static/images/safe/img5.png';

export default class page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            safeImg3: safeImg3,
            safeImg4: safeImg4,
            safeImg5: safeImg5,
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="page">
               <section className="column">
                    <h5 className="textC">华赢宝风险管理</h5>
                    <p>
                        <i></i><b>借款审核</b> — 严格的贷前审核流程，从源头控制贷款风险
                    </p>
                    <img className="safeImg3" src={this.state.safeImg3} alt="风险管理" />
                </section>
                <section className="column">
                    <p>
                        <i></i><b>小额分散</b> — 小额贷款、出借分散，极大降低出借风险
                    </p>
                    <img className="safeImg4" src={this.state.safeImg4} alt="风险管理" />
                </section>
                <section className="column">
                    <p>
                        <i></i><b>违约风险控制</b> — 贷后维护，逾期还款催收机制
                    </p>
                    <img className="safeImg5" src={this.state.safeImg5} alt="风险管理" />
                </section>
                <section className="column">
                    <p>
                        <i></i><b>风控把关</b>
                    </p>
                    <p className="size">
                        华赢宝拥有高效的风险管理团队，并与同盾、白骑士等多家风控机构合作。公司基于自行研发的大数据风控平台对借款人进行全方位多角度的评估。对借款人的审核要点包括评估借款人职业的稳定性、居住的稳定性、项目的稳定性、家庭社交网络的稳定性等，通过对这些关键点的把握，确保公司筛选出最有守信的意愿和守信的能力的借款人。
                    </p>
                </section>
                <section className="column">
                    <p>
                        <i></i><b>法律保障</b>
                    </p>
                    <p className="size">
                        根据《合同法》第196条规定“借款合同是借款人向贷款人借款，到期返还借款并支付利息的合同”，《合同法》允许普通民事主体之间发生借贷关系，并允许出借方到期可以收回本金和符合法律规定的利息。
                    </p>
                </section>
            </div>
        );
    }
}