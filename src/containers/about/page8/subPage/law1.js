import React from "react";
import Header from '../../../../component/header/header';
import SubBanner from '../../../../component/subBanner/subBanner'
import Footer from '../../../../component/footer/footer';
import BackTop from '../../../../component/backTop/backTop';
import { Icon, Row, Col } from 'antd';
import safeBanner from '../../../../static/images/safe/safeBanner.jpg';

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
                <SubBanner safeBanner={this.state.safeBanner} />
                123456
                <Footer />
                <BackTop />
            </div>
        );
    }
}