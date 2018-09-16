import React from "react";
import { Icon, Row, Col, Tooltip } from 'antd';

export default class page4 extends React.Component {
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
               <section className="column">
                    <p>
                        <b>交易数据 </b>截止日期：2018年8月29日
                    </p>
                    <div className="aboutData">
                        <Row gutter={40}>
                            <Col md={8}>
                                <Tooltip placement="bottomLeft" title="自华赢宝成立起，华赢宝撮合完成的所有交易总和">
                                    <div className=""></div>
                                    <dl>
                                        <dt>累计交易总金额（元）</dt>
                                        <dd></dd>
                                    </dl>
                                </Tooltip>
                                
                            </Col>
                        </Row>
                    </div>
                </section>  
            </div>
        );
    }
}