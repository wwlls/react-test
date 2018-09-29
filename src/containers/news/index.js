
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../component/header/header';
import SubBanner from '../../component/subBanner/subBanner'
import Footer from '../../component/footer/footer';
import BackTop from '../../component/backTop/backTop';

export default class news extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div>
            <Header />
				<SubBanner />
				<div className="page">
                            <div id="news1" style={{width:1000,margin: '0 auto',marginTop: 60,}}>
                                 <div className="tab7_tt"><span>华赢宝携手三家优质资产对接，加速合规建设</span></div>
                                 <div className="tab7_main border_bottom">
                                    <ul>
                                        <li ><span style={{paddingleft: 180}} className="tab7_l_span">来源：</span><span className="tab7_r_span"><a href="http://hebei.sina.com.cn/edu/zh/2017-08-07/1025198929.html" style={{color: 'blue',textDecoration: 'underline'}}>新浪河北</a></span></li>
                                        <li><span style={{paddingLeft: 50}} className="tab7_l_span">发布时间：</span><span className="tab7_r_span">2017年8月7日</span></li>
                                    </ul>
                                 </div>
                            
                       
                           </div>
                                
				</div>
				<Footer />
				<BackTop />
            </div>
        );
    }
}
 