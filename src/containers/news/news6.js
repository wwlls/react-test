
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../component/header/header';
import SubBanner from '../../component/subBanner/subBanner'
import Footer from '../../component/footer/footer';
import BackTop from '../../component/backTop/backTop';
import sc1 from '../../static/images/about/sign_c1.png';
import sc2 from '../../static/images/about/sign_c2.png';
import sc3 from '../../static/images/about/sign_c3.png';
import n1 from '../../static/images/about/new1.jpg';
import n2 from '../../static/images/about/new2.jpg';
import money from '../../static/images/about/img_11.jpg';
import pic9 from '../../static/images/about/news9.jpg';
import pic10 from '../../static/images/about/news10.jpg';
import pic3 from '../../static/images/about/new3.gif';
import pic4 from '../../static/images/about/new4.jpg';
import pic5 from '../../static/images/about/new5.jpg';
import pic6 from '../../static/images/about/new6.jpg';
import pic8 from '../../static/images/about/new8.jpg';
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
                    <p className='tit'>支氏控股集团华赢宝发布验资报告，完成首次实缴1000万元</p>

                    <p className='come'><span>来源：</span><span><a href="http://finance.hsw.cn/system/2017/0707/235251.shtml">苏南网</a></span><span>发布时间:</span><span>017-07-07 10:27:43</span></p>

                    <p> 
                        2016年10月28日，中国互联网金融协会正式发布《互联网金融信息披露 个体网络借贷》标准(T/NIFA  1—2016)(下称信披标准)，信披标准明确提出，互联网金融行业从业机构应主动披露从业机构的注册资本与实缴资本。
                        6月19日，浙江中孜会计师事务所完成对华赢宝(即杭州华赢宝网络科技有限公司)平台股东的出资情况审验，并出具《杭州华赢宝网络科技有限公司验资报告》(浙中孜验字[2017]第120号)，经验资证明，华赢宝已完成实缴资本1000万元人民币。
                        2015年12月22日，杭州华赢宝网络科技有限公司经杭州市市场监督管理局登记注册，注册资本为5000万元(认缴)，由全体股东分期缴足。
                    </p>

                    <p>
                        6月19日，公司全体股东采用货币出资方式，实缴人民币1000万元，占注册资本的20%。本次出资为首次出资，其余注册资本还将在后期分期缴足。本次实缴出资信息也将在后续前往工商部门进行变更登记，变更登记后，用户可前往全国企业信息用信息公示系统查证。
                        验资报告是会计师事务所或者审计事务所及其他具有验资资格的机构出具的证明资金真实性的文件。依照《公司法》规定，公司的注册资本必须经法定的验资机构出具验资报告，验资机构出具的验资报告是表明公司注册资本数额的合法证明。
                    </p>

                    <p>
                        华赢宝为打造值得信赖的互联网平台，一直在合规发展的道路上持续发力。
                        6月28日，华赢宝正式与海口联合农商银行签订资金存管协议，双方将进一步完成资金存管的系统对接工作。此次牵手海口联合农商银行，标志着华赢宝在网贷合规化道路中取得实质性进展，同时表明双方将构建稳定和谐的合作关系，共同助力互金行业健康成长。
                    </p>

                   
                    <p className="img">
                        <img src={pic8}/>
                    </p>
                </div>
				<Footer />
				<BackTop />
            </div>
        );
    }
}
 