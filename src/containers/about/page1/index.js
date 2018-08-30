import React from "react";
import { Icon, Row, Col } from 'antd';
import aboutImg5 from '../../../static/images/about/img5.jpg';

export default class page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutImg5: aboutImg5,
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="page">
                <section className="column">
                    <h5 className="textC">关于华赢宝</h5>
                    <p>
                        华赢宝，系杭州华赢宝网络科技有限公司旗下的互联网金融平台，由支氏控股集团直接控股，致力于为国内投融资客户提供信息中介服务。注册资本5000万元人民币，平台以互联网为主要渠道，为借贷双方实现直接借贷提供信息搜集、信息公布、资信评估、信息交互、借贷撮合等服务，华赢宝一方面服务于广大微型企业及个人消费者，解决他们最迫切的融资需求；另一方面通过互联网技术，提供期限灵活、资产优质的借款标的，为广大出借人提供稳健、高效、轻松的出借服务。
                    </p>
                </section>
                <section className="column">
                    <h5 className="textC">资质证书</h5>
                    <Row gutter={40} className="textC">
                        <Col md={12}>
                            <b className="about about1"></b>
                            <h2>信息系统安全等级测评报告</h2>
                        </Col>
                        <Col md={12}>
                            <b className="about about2"></b>
                            <h2>华赢宝开户证</h2>
                        </Col>
                        <Col md={12} className="bottom">
                            <b className="about about3"></b>
                            <h2>ICP许可证</h2>
                        </Col>
                        <Col md={12} className="bottom">
                            <b className="about about4"></b>
                            <h2>营业执照</h2>
                        </Col>
                    </Row>
                </section>
                <section className="column">
                    <h5 className="textC">关于支氏控股集团</h5>
                    <p>
                        支氏控股集团由支华先生创办，注册资本3亿元。集团下属企业分布在房产建筑、市政建设、矿产资源、停车服务、进出口贸易及互联网金融等行业，秉承稳健的发展战略、合作的发展思路以及诚信的发展理念，集团经过数年发展总资产超过50亿元，持有的经营性物业将近5万平方米；在此基础上，集团积极响应各级政府提出的“大众创业、万众创新”号召，通过不断创新寻找新的经济增长点。
                    </p>
                </section>
                <section className="column">
                    <h5 className="textC">办公环境</h5>
                    <img className="aboutImg5" src={this.state.aboutImg5} alt="办公环境" />
                </section>
            </div>
        );
    }
}