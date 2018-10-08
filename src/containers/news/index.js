
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
        console.log(window.location.href.split('id=')[1])
        var num = window.location.href.split('id=')[1]
        const news  = document.getElementById('news1')
        if(num=='1'){
            news.innerHTML=`<div>
            <div class="tab7_tt"><span>华赢宝累计成交突破10亿元</span></div>
            <div class="tab7_main border_bottom">
                <ul>
                    <li ><span style="margin-left: 180px" class="tab7_l_span">来源：</span><span class="tab7_r_span"><a href="http://www.sohu.com/a/203533435_209597" style="color: blue;text-decoration: underline;">搜狐</a></span></li>
                    <li><span style="padding-left: 50px" class="tab7_l_span">发布时间：</span><span class="tab7_r_span">2017-11-10 14:17</span></li>
                </ul>
            </div>
            <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                11月初，华赢宝累计出借金额突破10亿元。
            </div>
            <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                对于一个两年的互金平台而言，华赢宝踏踏实实走好了每一步，与用户一起写下圆满的答卷。
            </div>
            <div style="text-align: center;padding: 20px 0;"><img src="${money}" alt=""></div>
            <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                截至2017年11月10日，华赢宝出借用户数18.19万人，累计交易成功出借金额10.32亿元，客户赚取收益累计已达670万元，安全运营时间755天。
            </div>
            <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                华赢宝隶属支氏控股集团旗下，平台注册资本实缴1000万元人民币，具备香港主板上市企业背景。
            </div>
            <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                华赢宝致力于打造一个专业、规范、安全、高效、诚信的网络借贷中介。在提高金融服务质量和效率的同时，降低服务成本，为个人、微型企业提供简单、规范、高效的金融解决方案，践行普惠金融。
            </div>
            <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                两年期间华赢宝从无到有，各种活动福利，福利日、红包的惊喜让用户体验到出借的意义与价值。持续的版本升级，界面优化，让用户的体验更上一层。助力萧山网络歌手大赛，广场舞大赛，让华赢宝走入当地群众，践行普惠金融。从银行存管、资产端战略合作到ICP许可证，华赢宝都在积极响应国家政策监管。
            </div>
            <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                华赢宝将始终秉承合规经营的宗旨，按照监管政策要求严格推进合规进程，为出借者精心筑造一个稳健放心、值得信赖的P2P平台。
            </div>
            </div>`
        }else if(num=='2'){
            news.innerHTML=`<div>
            <div class="tab7_tt"><span>【华赢宝征文活动】有华赢宝的日子，树桩吐绿，鸟语花香</span></div>
            <div class="tab7_main border_bottom">
                <ul>
                    <li ><span style="margin-left: 180px" class="tab7_l_span">来源：</span><span class="tab7_r_span"><a href="https://www.toutiao.com/i6485851307771953677/" style="color: blue;text-decoration: underline;">今日头条</a></span></li>
                    <li><span style="padding-left: 50px" class="tab7_l_span">发布时间：</span><span class="tab7_r_span">2017-11-08 09:35:35 </span></li>
                </ul>
            </div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px;line-height: 35px;">
                前言
        《道德经》第四十二章曰：道生一，一生二，二生三，三生万物......拟以此句，喻华赢宝惠泽近二十万出借用户，其意深远。<br>
        
        你是清晨那一缕最温暖的阳光，装饰着出借者购房买车的美梦；你是一颗用真心凝结而成的红豆，徐徐地传播着“专注小额分散的消费金融”的发展愿景；你是从彩云间飘落凡尘的凤凰，奉献“高度合规、稳健经营”的发展原则。这一切皆因有你：华赢宝。正是与华赢宝银行的两年日子，让我和我的家庭真正感受到了树桩吐绿，鸟语花香。<br>
        和华赢宝的第一次亲密接触是2015年年底，我那时候没有想到，从此一键出借、P2P、银行存管、定期出借、第三方机构收购债权等，这些远在“人民日报”上的普惠金融的词语，会如同春风细雨一般滋润着我这个出借人。<br>
        
        在2015年年底，我幸运摇中北京车号，我在年底的幸福“钱”景就是:尽快买一辆适合三口之家的中档车。但是选购一款一辆既适合家庭外出的经济型中档车需要时间挑选，对还没有购买车的这段时间，买车款暂时闲置。<br>
        
        我同事给出了他的意见：不妨试试华赢宝，10月17日华赢宝正式上线，是支氏控股集团旗下的互联网金融平台，注册资本5000万元，有支氏控股3亿资金，下个app就可以操作，可谓轻松便捷。<br>
        
        她一句话善意的话提醒了我：时下资金的意义并不在于解决燃眉之急的买车，更多的是对稍纵即逝的机会的把握，中签后到买车有半年时间，现在的资金闲置，在预期收益较好的前提下不如多想想如何利用这段时间选车和赚收益。<br>
        
        一语惊醒梦中人！我之前着眼与选择买车，现在还不如将鱼与熊掌兼得，也就是一边赚收益一边选车。<br>
        
        细微之处总关情。下载完华赢宝app后，自动存活期的贴心服务，活动专区的真诚赠券，福利日的加息，积分商城的兑换活动，当天到账的惊喜，贴心的短信提醒，让我目不暇接。我拨打华赢宝客服电话：4001-190-717询问相关出借事宜，客服同刘三姐唱的民歌那般亲切动听，我立刻感到温暖盈身。她随即详细地跟我介绍了华赢宝的出借产品：零钱包和定期出借，定期出借时间分30天、90天、180天、360天，总有一款适合你。还友好地提醒，可以用优惠券，到期还本付息。最后，根据我自己情况，我选择30天和90天的定期出借。<br>
        
        那时候，国有银行的活期存款利率0.36%，哪怕是稍微“一天通知存0款”和“七天通知存款”，利率分别是0.85％和1.35％，虽然是活期存款利率0.36%的2.36倍和3.75倍，但是和华赢宝产品一比较，高下立现。于是，我在华赢宝投下我信任的第一笔资金。<br>
        
        亚里士多德曾说过：“人类并不需要外在的财富才能获得或保持德行，反而是外在的财富要借助德行。”借助华赢宝的“德行”，合理安排财富，作为普惠金融的受益者，我最终获得亚里士多德认为的“那些有着高度教养却只有适度身外财富的人们身上才能够得到的”幸福 。<br>
        
        细莫于沙，小莫于滴。在几个月后，当我坐在我的爱车里，享受有车一族的舒适与安逸时，深深体会到：华赢宝就像保护自己眼睛那样，珍惜客户信任，将“知你所需，达你所愿”的满足客户的宗旨，润物细无声地传递给出借者。<br>
        
        是啊，千言万语道不尽与华赢宝的情，千难万难掰不开与华赢宝的缘。两年来一直用心回报出借人的华赢宝，用自己的信任串联起大家的情缘，从2015年10月17日，正式上线，到2017年6月28日，正式与海口联合农商银行签订资金存管协议，再到前几天平台获得ICP电信业务经营许可证，让近二十万出借者在靓丽和喧嚣中，重新感受到了P2P市场的青草碧绿，鸟语花香，花团锦簇，流云万千
        </div>
        
            </div>`
        }else if(num=='3'){
             news.innerHTML=`<div>
             <div class="tab7_tt"><span>华赢宝获批ICP证，积极响应监管政策变化</span></div>
             <div class="tab7_main border_bottom">
                 <ul>
                     <li ><span style="margin-left: 180px" class="tab7_l_span">来源：</span><span class="tab7_r_span"><a href="http://www.sohu.com/a/200588221_229893" style="color: blue;text-decoration: underline;">搜狐</a></span></li>
                     <li><span style="padding-left: 50px" class="tab7_l_span">发布时间：</span><span class="tab7_r_span">2017-10-27 14:36</span></li>
                 </ul>
             </div>
             <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                 ICP成稀缺资质 全国仅10%平台获批
             </div>
             <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                 8月24日出台的《网络借贷信息中介机构业务活动管理暂行办法》中规定，网贷平台必须要持有ICP（电信业务经营许可证）而未取得经营许可或未履行备案手续，擅自从事互联网信息服务的，由相关主管部门依法责令限期改正，给予罚款、责令关闭网站等行政处罚;构成犯罪的，依法追究刑事责任。而据数据显示全国正常运营的互金平台数量近2000家。其中约有两百余家家平台拥有有效的ICP经营性许可证，约占网贷行业正常运营平台总数量的10%，ICP经营许可证成为挡在多数平台合规之路前的拦路虎。
             </div>
             <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                 业内人士表示，互联网金融企业的网站由于直接牵涉出借者的资金、个人信息、银行账户等敏感信息，故其存在的网络安全漏洞造成的危险性比一般网站更高，因此互联网金融平台也应依法办理ICP许可证。由于ICP证对平台资质要求很高，再加上金融监管部门向通信局出具批文要担当责任，所以导致对平台的审核很严很细，有90%以上的平台拿不到批文。
             </div>
             <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                 正因为ICP许可证的审批难导致了该证件的稀缺性，而这也在侧边印证了一个事实，能够拿到此证件的平台必拥有强大的背景实力。
             </div>
             <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                 华赢宝落实合规积极拥抱监管
             </div>
             <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                 自上线以来，华赢宝积极响应国家监管政策，致力于打造一个规范、安全、高效、透明的P2P平台。此次成功获批ICP电信业务经营许可证，使平台合规运营迈入一个新阶段。
             </div>
             <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                 根据银监会等相关部门出台的《网络借贷资金存管业务指引（征求意见稿）》和《网络借贷信息中介机构业务活动管理暂行办法》，P2P网贷平台必须按照通信主管部门的相关规定申请获得相应的电信业务经营许可，监管政策中要求平台办理的电信业务经营许可证就是我们常说的ICP经营许可证，也叫互联网信息服务业务经营许可证。根据规定，未取得经营许可证，擅自从事经营性互联网信息服务，将对其进行没收违法所得、罚款，甚至是责令关闭网站的处罚。而P2P网贷平台作为从事经营性互联网信息服务的网站，办理ICP许可证也成为其合法开展业务必须的一环。
             </div>
             <div style="font-size: 14px;color: #222C57;padding-top: 20px;text-indent: 25px">
                 华赢宝将始终秉承合规经营的宗旨，积极拥抱行业监管，按照监管政策要求严格推进合规进程，为出借者精心筑造一个稳健放心、值得信赖的P2P平台。此次华赢宝获批ICP经营许可证，将为广大企业和个人提供更加规范透明的金融信息服务。
             </div>
             <div style="text-align: center;padding: 20px 0;"><img src="${pic9}" alt=""></div>
             <div style="text-align: center;padding: 20px 0;"><img src="${pic10}" alt=""></div>
             </div>`
        }
        else if(num=='4'){
            news.innerHTML=`<div>
            <div class="tab7_tt"><span>华赢宝赞助2017萧山广场舞大赛完美结束</span></div>
            <div class="tab7_main border_bottom">
                <ul>
                    <li ><span style="margin-left: 180px" class="tab7_l_span">来源：</span><span class="tab7_r_span"><a href="http://www.dzxwnews.com/shangye/2476.html" style="color: blue;text-decoration: underline;">大众经济网</a></span></li>
                    <li><span style="padding-left: 50px" class="tab7_l_span">发布时间：</span><span class="tab7_r_span">2017-08-30 16:18:50</span></li>
                </ul>
            </div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px">上周日（8月27号），由区委宣传部、区妇联、萧山日报、萧山网主办，华赢宝移动平台赞助的2017萧山广场舞大赛完美结束。
            </div>
            <div style="text-align: center"><img src="${pic3}" width="800"></div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px">来自瓜沥、北干、靖江、临浦、宁围、新塘等地的13支队伍闪耀登场，决战王者之夜，经过4个多小时的激烈角逐艺飞艺术团问鼎冠军宝座。
        除了精彩热情的舞蹈以外，本次比赛最大的亮点就是以水景为天然荧幕的湘湖音乐喷泉，可谓前无古人。
            </div>
            <div style="text-align: center"><img src="${pic4}" alt=""></div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px">来自瓜沥、北干、靖江、临浦、宁围、新塘等地的13支队伍闪耀登场，决战王者之夜，经过4个多小时的激烈角逐艺飞艺术团问鼎冠军宝座。
        除了精彩热情的舞蹈以外，本次比赛最大的亮点就是以水景为天然荧幕的湘湖音乐喷泉，可谓前无古人。
            </div>
            <div style="text-align: center"><img src="${pic5}" alt=""></div>
            <div style="text-align: center"><img src="" alt=""></div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px">壮丽的喷泉灯光秀让舞蹈更加美轮美奂
        话不多说
        现场视频一睹为快↓↓↓
        广场舞虽然很精彩，华赢宝的七夕活动也非常给力啊，巴厘岛双人游／2部iPhone 7／Macbook Pro带回家，活动还有两天，错过等一年哦~~
            </div>
            <div style="text-align: center"><img src="${pic6}" alt=""></div>
            </div>`
        }
        else if(num=='6'){
            news.innerHTML=`<div>
            <div class="tab7_tt"><span>支氏控股集团华赢宝发布验资报告，完成首次实缴1000万元</span></div>
            <div class="tab7_main border_bottom">
                <ul>
                    <li ><span style="margin-left: 180px" class="tab7_l_span">来源：</span><span class="tab7_r_span"><a href="http://finance.hsw.cn/system/2017/0707/235251.shtml" style="color: blue;text-decoration: underline;">苏南网</a></span></li>
                    <li><span style="padding-left: 50px" class="tab7_l_span">发布时间：</span><span class="tab7_r_span">2017-07-07 10:27:43 </span></li>
                </ul>
            </div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px">2016年10月28日，中国互联网金融协会正式发布《互联网金融信息披露 个体网络借贷》标准(T/NIFA  1—2016)(下称信披标准)，信披标准明确提出，互联网金融行业从业机构应主动披露从业机构的注册资本与实缴资本。
        6月19日，浙江中孜会计师事务所完成对华赢宝(即杭州华赢宝网络科技有限公司)平台股东的出资情况审验，并出具《杭州华赢宝网络科技有限公司验资报告》(浙中孜验字[2017]第120号)，经验资证明，华赢宝已完成实缴资本1000万元人民币。
        2015年12月22日，杭州华赢宝网络科技有限公司经杭州市市场监督管理局登记注册，注册资本为5000万元(认缴)，由全体股东分期缴足。
        6月19日，公司全体股东采用货币出资方式，实缴人民币1000万元，占注册资本的20%。本次出资为首次出资，其余注册资本还将在后期分期缴足。本次实缴出资信息也将在后续前往工商部门进行变更登记，变更登记后，用户可前往全国企业信息用信息公示系统查证。
        验资报告是会计师事务所或者审计事务所及其他具有验资资格的机构出具的证明资金真实性的文件。依照《公司法》规定，公司的注册资本必须经法定的验资机构出具验资报告，验资机构出具的验资报告是表明公司注册资本数额的合法证明。
            </div>
            <div style="text-align: center"><img src="" alt=""></div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px">华赢宝为打造值得信赖的互联网平台，一直在合规发展的道路上持续发力。
        6月28日，华赢宝正式与海口联合农商银行签订资金存管协议，双方将进一步完成资金存管的系统对接工作。此次牵手海口联合农商银行，标志着华赢宝在网贷合规化道路中取得实质性进展，同时表明双方将构建稳定和谐的合作关系，共同助力互金行业健康成长。
            </div>
            <div style="text-align: center"><img src="${pic8}" alt=""></div>
            </div>`
        }
        else if(num=='5'){
            news.innerHTML=`<div>
            <div class="tab7_tt"><span>华赢宝携手三家优质资产对接，加速合规建设</span></div>
            <div class="tab7_main border_bottom">
                <ul>
                    <li ><span style="margin-left: 180px" class="tab7_l_span">来源：</span><span class="tab7_r_span"><a href="http://hebei.sina.com.cn/edu/zh/2017-08-07/1025198929.html" style="color: blue;text-decoration: underline;">新浪河北</a></span></li>
                    <li><span style="padding-left: 50px" class="tab7_l_span">发布时间：</span><span class="tab7_r_span">2017年8月7日</span></li>
                </ul>
            </div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px">近来，“资产荒”之说在业内甚嚣尘上，不少平台表示：在经济下行的大背景下，现在获取优质资产十分困难。相较于资金端，资产端对一个平台的意义更大，优质资产直接决定平台的低坏账、低逾期。
              多位业内人士表示，未来互联网金融资产端的创新越来越重要，互联网金融的本质还是金融，随着监管政策的落实及网贷平台银行存管的上线，平台已经无法卷钱跑路，目前专业的出借人都把优质稀缺资产作为决定网贷平台出借收益和安全性的根本因素。
            </div>
            <div style="text-align: center"><img src="${n1}" alt=""></div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px">华赢宝上线以来一直把风控和获取优质资产放在首位，为了满足出借人对优质资产的需求，华赢宝选择与实力较强的机构合作扩展业务线;在国家消费拉动经济增长的政策环境下，瞄准C端用户刚需、开发消费金融和现金贷市场等，合理布局资产端。华赢宝将和合作机构打造全新的“消费分期”和“现金贷”产品，该产品以其小额、分散、灵活、收益更高的特点，受到了出借人的热捧。
        7月26日，华赢宝与水象分期、有贝钱袋、啪啪钱包三家机构达成合作，共同致力于为年轻人提供金融信息中介服务。根据双方合作方案，华赢宝提供资金运营网络借贷撮合方案，合作机构提供专业风控和优质资产。由合作机构向华赢宝平台推荐优质借款人，在双方共同进行风控调查，并通过华赢宝风控准入审核之后，由华赢宝为借款人提供资金借贷撮合服务。
            </div>
            <div style="text-align: center"><img src="${n2}" alt=""></div>
            <div style="font-size: 14px;color: #222C57;padding: 49px 0;text-indent: 25px">2017年是互联网金融“合规发展”最为重要的一年，随着《网络借贷信息中介机构业务活动管理暂行办法》的发布以及网络借贷风险专项整治行动的开展，平台的合规性建设成为各从业机构首要任务。而资产端的合规是重中之重，华赢宝通过与机构合作获取合作方的专业风控与优质资产，再次强化了平台的业务合规性。同时，凭借各方资源，包括资金运营方、资产开发方、风控资管方以及其他金融业务资源进行整合，充分发挥各方主体的专业优势，提高华赢宝平台的竞争优势。
            </div>
            <div class="tab7_tt"><div id="diamond"></div><span>华赢宝资产端战略签约合作机构名单</span></div>
            <div class="sign_bg3">
                    <div class="sign_title3"></div>
                    <div class="sign_footer">
                        <ul>
                            <li style="width:426px;">合作机构</li>
                            <li style="width:256px;text-align: center">机构简称</li>
                            <li style="width:316px;">业务类型</li>
                        </ul>
                    </div>
                    <div class="sign_footer">
                        <ul>
                            <li style="width:426px;padding-top: 25px;">上海水象金融信息服务有限公司</li>
                            <li style="width:256px;margin-top:13px;text-align: center;height: 29px;background: url(${sc1}) no-repeat center center"></li>
                            <li style="width:316px;padding-top: 25px;">消费分期</li>
                        </ul>
                    </div>
                    <div class="sign_footer">
                        <ul>
                            <li style="width:426px;padding-top: 25px;">有贝网络科技(杭州)有限公司</li>
                            <li style="width:256px;margin-top:13px;text-align: center;height: 29px;background: url(${sc2}) no-repeat center center"></li>
                            <li style="width:316px;padding-top: 25px;">消费分期</li>
                        </ul>
                    </div>
                    <div class="sign_footer">
                        <ul>
                            <li style="width:426px;padding-top: 25px;">杭州银榕汇金融信息服务有限公司</li>
                            <li style="width:256px;margin-top:13px;text-align: center;height: 29px;background: url(${sc3}) no-repeat center center"></li>
                            <li style="width:316px;padding-top: 25px;">消费分期</li>
                        </ul>
                    </div>
                </div>
            </div>`
        }
        
    }
    
    render() {
        return (
            <div>
            <Header />
				<SubBanner />
				<div className="page">
                            <div id="news1" style={{width:1000,margin: '0 auto',marginTop: 60,}}>
                                
                            
                       
                           </div>
                                
				</div>
				<Footer />
				<BackTop />
            </div>
        );
    }
}
 