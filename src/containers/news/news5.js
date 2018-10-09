
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../component/header/header';
import SubBanner from '../../component/subBanner/subBanner'
import Footer from '../../component/footer/footer';
import BackTop from '../../component/backTop/backTop';

import n1 from 'static/images/about/new1.jpg';
import n2 from 'static/images/about/new2.jpg';

import jg from 'static/images/about/jigou.png';
import './news.scss'

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
                <div className="news1 page">
                    <p className='tit'>华赢宝携手三家优质资产对接，加速合规建设</p>

                    <p className='come'><span>来源：</span><span><a href="http://hebei.sina.com.cn/edu/zh/2017-08-07/1025198929.html">新浪河北</a></span><span>发布时间:</span><span>2017年8月7日</span></p>

                    <p> 
                        近来，“资产荒”之说在业内甚嚣尘上，不少平台表示：在经济下行的大背景下，现在获取优质资产十分困难。相较于资金端，资产端对一个平台的意义更大，优质资产直接决定平台的低坏账、低逾期。
                        多位业内人士表示，未来互联网金融资产端的创新越来越重要，互联网金融的本质还是金融，随着监管政策的落实及网贷平台银行存管的上线，平台已经无法卷钱跑路，目前专业的出借人都把优质稀缺资产作为决定网贷平台出借收益和安全性的根本因素。
                    </p>
                    <p className="img">
                        <img src={n1}/>
                    </p>
                    <p>
                        华赢宝上线以来一直把风控和获取优质资产放在首位，为了满足出借人对优质资产的需求，华赢宝选择与实力较强的机构合作扩展业务线;在国家消费拉动经济增长的政策环境下，瞄准C端用户刚需、开发消费金融和现金贷市场等，合理布局资产端。华赢宝将和合作机构打造全新的“消费分期”和“现金贷”产品，该产品以其小额、分散、灵活、收益更高的特点，受到了出借人的热捧。
                        7月26日，华赢宝与水象分期、有贝钱袋、啪啪钱包三家机构达成合作，共同致力于为年轻人提供金融信息中介服务。根据双方合作方案，华赢宝提供资金运营网络借贷撮合方案，合作机构提供专业风控和优质资产。由合作机构向华赢宝平台推荐优质借款人，在双方共同进行风控调查，并通过华赢宝风控准入审核之后，由华赢宝为借款人提供资金借贷撮合服务。
                    </p>
                    <p className="img">
                        <img src={n2}/>
                    </p>
                    <p>
                        2017年是互联网金融“合规发展”最为重要的一年，随着《网络借贷信息中介机构业务活动管理暂行办法》的发布以及网络借贷风险专项整治行动的开展，平台的合规性建设成为各从业机构首要任务。而资产端的合规是重中之重，华赢宝通过与机构合作获取合作方的专业风控与优质资产，再次强化了平台的业务合规性。同时，凭借各方资源，包括资金运营方、资产开发方、风控资管方以及其他金融业务资源进行整合，充分发挥各方主体的专业优势，提高华赢宝平台的竞争优势。
                    </p>

                    <p className="img" style={{marginTop:'2%'}}>
                        <img src={jg}/>
                    </p>

                   
                </div>
				<Footer />
				<BackTop />
            </div>
        );
    }
}
 