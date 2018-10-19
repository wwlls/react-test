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
                    <p className='tit'>华赢宝获批ICP证，积极响应监管政策变化</p>

                    <p className='come'><span>来源：</span><span><a href="http://www.sohu.com/a/200588221_229893">搜狐</a></span><span>发布时间:</span><span>2017-10-27 14:36</span></p>

                    <p> ICP成稀缺资质 全国仅10%平台获批</p>

                    <p>
                        8月24日出台的《网络借贷信息中介机构业务活动管理暂行办法》中规定，网贷平台必须要持有ICP（电信业务经营许可证）而未取得经营许可或未履行备案手续，擅自从事互联网信息服务的，由相关主管部门依法责令限期改正，给予罚款、责令关闭网站等行政处罚;构成犯罪的，依法追究刑事责任。而据数据显示全国正常运营的互金平台数量近2000家。其中约有两百余家家平台拥有有效的ICP经营性许可证，约占网贷行业正常运营平台总数量的10%，ICP经营许可证成为挡在多数平台合规之路前的拦路虎。
                    </p>

                    <p>
                         业内人士表示，互联网金融企业的网站由于直接牵涉出借者的资金、个人信息、银行账户等敏感信息，故其存在的网络安全漏洞造成的危险性比一般网站更高，因此互联网金融平台也应依法办理ICP许可证。由于ICP证对平台资质要求很高，再加上金融监管部门向通信局出具批文要担当责任，所以导致对平台的审核很严很细，有90%以上的平台拿不到批文。
                    </p>

                    <p>
                         正因为ICP许可证的审批难导致了该证件的稀缺性，而这也在侧边印证了一个事实，能够拿到此证件的平台必拥有强大的背景实力。
                    </p>

                    <p>
                         华赢宝落实合规积极拥抱监管
                    </p>

                    <p>
                         自上线以来，华赢宝积极响应国家监管政策，致力于打造一个规范、安全、高效、透明的P2P平台。此次成功获批ICP电信业务经营许可证，使平台合规运营迈入一个新阶段。
                    </p>
                    
                    <p>
                         根据银监会等相关部门出台的《网络借贷资金存管业务指引（征求意见稿）》和《网络借贷信息中介机构业务活动管理暂行办法》，P2P网贷平台必须按照通信主管部门的相关规定申请获得相应的电信业务经营许可，监管政策中要求平台办理的电信业务经营许可证就是我们常说的ICP经营许可证，也叫互联网信息服务业务经营许可证。根据规定，未取得经营许可证，擅自从事经营性互联网信息服务，将对其进行没收违法所得、罚款，甚至是责令关闭网站的处罚。而P2P网贷平台作为从事经营性互联网信息服务的网站，办理ICP许可证也成为其合法开展业务必须的一环。
                    </p>
                    
                    <p>
                         华赢宝将始终秉承合规经营的宗旨，积极拥抱行业监管，按照监管政策要求严格推进合规进程，为出借者精心筑造一个稳健放心、值得信赖的P2P平台。此次华赢宝获批ICP经营许可证，将为广大企业和个人提供更加规范透明的金融信息服务。
                    </p>
                    <p className="img">
                        <img src={pic9}/>
                    </p>
                    <p className="img">
                        <img src={pic10}/>
                    </p>
                </div>
				<Footer />
				<BackTop />
            </div>
        );
    }
}
 