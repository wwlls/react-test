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
                    <p className='tit'>华赢宝赞助2017萧山广场舞大赛完美结束</p>

                    <p className='come'><span>来源：</span><span><a href="http://www.dzxwnews.com/shangye/2476.html">大众经济网</a></span><span>发布时间:</span><span>2017-08-30 16:18</span></p>

                    <p>
                       上周日（8月27号），由区委宣传部、区妇联、萧山日报、萧山网主办，华赢宝移动平台赞助的2017萧山广场舞大赛完美结束。
                    </p>
                    <p className="img img1">
                        <img src={pic3}/>
                    </p>
                    <p>
                        来自瓜沥、北干、靖江、临浦、宁围、新塘等地的13支队伍闪耀登场，决战王者之夜，经过4个多小时的激烈角逐艺飞艺术团问鼎冠军宝座。
                        除了精彩热情的舞蹈以外，本次比赛最大的亮点就是以水景为天然荧幕的湘湖音乐喷泉，可谓前无古人。
                    </p>
                    <p className="img">
                        <img src={pic4}/>
                    </p>
                    <p>
                        来自瓜沥、北干、靖江、临浦、宁围、新塘等地的13支队伍闪耀登场，决战王者之夜，经过4个多小时的激烈角逐艺飞艺术团问鼎冠军宝座。
                        除了精彩热情的舞蹈以外，本次比赛最大的亮点就是以水景为天然荧幕的湘湖音乐喷泉，可谓前无古人。
                    </p>
                    <p className="img">
                    <img src={pic5}/>
                </p>
                    <p>
                    壮丽的喷泉灯光秀让舞蹈更加美轮美奂话不多说
                    现场视频一睹为快↓↓↓
                    广场舞虽然很精彩，华赢宝的七夕活动也非常给力啊，巴厘岛双人游／2部iPhone 7／Macbook Pro带回家，活动还有两天，错过等一年哦~~
                    </p>

                    <p className="img">
                    <img src={pic6}/>
                </p>

                   
                </div>
				<Footer />
				<BackTop />
            </div>
        );
    }
}
 