import React from "react";
import { Icon, Row, Col } from 'antd';

export default class page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="page">
               <section className="column textC">
                    <h4 className="safeH5">隐私安全</h4>
                    <Row gutter={18}>
                        <Col md={12}>
                            <b className="safeBank safe1"></b>
                            <h3>技术保障</h3>
                            <p>华赢宝运用先进的安全技术保护用户在华赢宝账户中存储的个人信息、账户信息以及交易记录的安全。</p>
                        </Col>
                        <Col md={12}>
                            <b className="safeBank safe2"></b>
                            <h3>权限管理保障</h3>
                            <p>华赢宝严格遵守国家相关的法律法规，对用户的隐私信息进行保护。未经同意，华赢宝不会向任何第三方公司、组织和个人披露用户个人信息、账户信息以及交易信息。</p>
                        </Col>
                    </Row>
                </section>
                <section className="column textC">
                    <h4 className="safeH5">数据安全</h4>
                    <Row gutter={18}>
                        <Col md={12}>
                            <b className="safeBank safe3"></b>
                            <h3>安全监测</h3>
                            <p>华赢宝拥有完善的安全监测系统，可以及时发现网站的非正常访问并做相应的安全响应。</p>
                        </Col>
                        <Col md={12}>
                            <b className="safeBank safe4"></b>
                            <h3>数据加密</h3>
                            <p>华赢宝理财采用数据传输加密技术，对交易数据和记录不会有任何泄露。</p>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}