import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from 'component/header/header';
import SubBanner from 'component/subBanner/subBanner'
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import sc1 from 'static/images/about/sign_c1.png';
import sc2 from 'static/images/about/sign_c2.png';
import sc3 from 'static/images/about/sign_c3.png';
import n1 from 'static/images/about/new1.jpg';
import n2 from 'static/images/about/new2.jpg';
import money from 'static/images/about/img_11.jpg';
import pic9 from 'static/images/about/news9.jpg';
import pic10 from 'static/images/about/news10.jpg';
import pic3 from 'static/images/about/new3.gif';
import pic4 from 'static/images/about/new4.jpg';
import pic5 from 'static/images/about/new5.jpg';
import pic6 from 'static/images/about/new6.jpg';
import pic8 from 'static/images/about/new8.jpg';
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
                    <p className='tit'>华赢宝累计成交突破10亿元</p>

                    <p className='come'><span>来源：</span><span><a href="http://www.sohu.com/a/203533435_209597">搜狐</a></span><span>发布时间:</span><span>2017-11-10 14:17</span></p>

                    <p> 11月初，华赢宝累计出借金额突破10亿元。</p>

                    <p>对于一个两年的互金平台而言，华赢宝踏踏实实走好了每一步，与用户一起写下圆满的答卷。</p>

                    <p><img src={money} alt=""/></p>

                    <p>截至2017年11月10日，华赢宝出借用户数18.19万人，累计交易成功出借金额10.32亿元，客户赚取收益累计已达670万元，安全运营时间755天。</p>

                    <p>华赢宝隶属支氏控股集团旗下，平台注册资本实缴1000万元人民币，具备香港主板上市企业背景。</p>

                    <p>华赢宝致力于打造一个专业、规范、安全、高效、诚信的网络借贷中介。在提高金融服务质量和效率的同时，降低服务成本，为个人、微型企业提供简单、规范、高效的金融解决方案，践行普惠金融。</p>
                    
                    <p>两年期间华赢宝从无到有，各种活动福利，福利日、红包的惊喜让用户体验到出借的意义与价值。持续的版本升级，界面优化，让用户的体验更上一层。助力萧山网络歌手大赛，广场舞大赛，让华赢宝走入当地群众，践行普惠金融。从银行存管、资产端战略合作到ICP许可证，华赢宝都在积极响应国家政策监管。</p>
                    
                    <p>华赢宝将始终秉承合规经营的宗旨，按照监管政策要求严格推进合规进程，为出借者精心筑造一个稳健放心、值得信赖的P2P平台。</p>
                    
                    </div>
				<Footer />
				<BackTop />
            </div>
        );
    }
}
 