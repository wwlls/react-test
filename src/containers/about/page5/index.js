import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Icon, Row, Col } from 'antd';
import aboutNews2 from 'static/images/about/news2.png';
import aboutNews3 from 'static/images/about/news3.png';
import aboutNews4 from 'static/images/about/news4.png';
import aboutNews5 from 'static/images/about/news5.png';
import aboutNews6 from 'static/images/about/news6.png';

export default class page5 extends React.Component {
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
                    <h5 className="textC">媒体报道</h5>
                    <ol>
                        <li>
                            <Row gutter={20}>
                                <Col md={6}>
                                    <img src={aboutNews6} alt="媒体报道" />
                                </Col>
                                <Col md={18}>
                                    <p><Link to="" target="_blank">华赢宝累计成交突破10亿元</Link></p>
                                    <p>2017年11月10日</p>
                                    <p>11月初，华赢宝累计出借金额突破10亿元。对于一个两年的互金平台而言，华赢宝踏踏实实走好了每一步，与用户一起写下圆满的答卷。截至2017年11月10日，华赢宝理财用户数18.19万人，累计交易成功出借金额10.32亿元，客户赚取收益累计已达670万元，安全运营时间755天。</p>
                                </Col>
                            </Row>
                        </li>   
                        <li>
                            <Row gutter={20}>
                                <Col md={6}>
                                    <img src={aboutNews5} alt="媒体报道" />
                                </Col>
                                <Col md={18}>
                                    <p><Link to="/news" target="_blank">「华赢宝征文活动」有华赢宝的日子，树桩吐绿，鸟语花香</Link></p>
                                    <p>2017年11月08日</p>
                                    <p>《道德经》第四十二章曰：道生一，一生二，二生三，三生万物......拟以此句，喻华赢宝惠泽近二十万出借用户，其意深远。</p>
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row gutter={20}>
                                <Col md={6}>
                                    <img src={aboutNews6} alt="媒体报道" />
                                </Col>
                                <Col md={18}>
                                    <p><Link to="" target="_blank">华赢宝获批ICP证，积极响应监管政策变化</Link></p>
                                    <p>2017年10月27日</p>
                                    <p>ICP成稀缺资质 全国仅10%平台获批据数据显示全国正常运营的互金平台数量近2000家。其中约有两百余家家平台拥有有效的ICP经营性许可证，约占网贷行业正常运营平台总数量的10%，ICP经营许可证成为挡在多数平台合规之路前的拦路虎。</p>
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row gutter={20}>
                                <Col md={6}>
                                    <img src={aboutNews4} alt="媒体报道" />
                                </Col>
                                <Col md={18}>
                                    <p><Link to="" target="_blank">华赢宝赞助2017萧山广场舞大赛完美结束</Link></p>
                                    <p>2017年08月30日</p>
                                    <p>8月27号由区委宣传部、区妇联、萧山日报、萧山网主办，华赢宝移动理财平台赞助的2017萧山广场舞大赛完美结束。来自瓜沥、北干、靖江、临浦、宁围、新塘等地的13支队伍闪耀登场，决战王者之夜，经过4个多小时的激烈角逐艺飞艺术团问鼎冠军宝座。</p>
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row gutter={20}>
                                <Col md={6}>
                                    <img src={aboutNews3} alt="媒体报道" />
                                </Col>
                                <Col md={18}>
                                    <p><Link to="" target="_blank">华赢宝携手三家优质资产对接，加速合规建设</Link></p>
                                    <p>2017年08月07日</p>
                                    <p>华赢宝上线以来一直把风控和获取优质资产放在首位，为了满足出借人对优质资产的需求，华赢宝选择与实力较强的机构合作扩展业务线;在国家消费拉动经济增长的政策环境下，瞄准C端用户刚需、开发消费金融和现金贷市场等，合理布局资产端。华赢宝将和合作机构打造全新的“消费分期”和“现金贷”产品，该产品以其小额、分散、灵活、收益更高的特点，受到了出借人的热捧。</p>
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row gutter={20}>
                                <Col md={6}>
                                    <img src={aboutNews2} alt="媒体报道" />
                                </Col>
                                <Col md={18}>
                                    <p><Link to="" target="_blank">支氏控股集团华赢宝发布验资报告</Link></p>
                                    <p>2017年07月07日</p>
                                    <p>2016年10月28日，中国互联网金融协会正式发布《互联网金融信息披露 个体网络借贷》标准(T/NIFA  1—2016)(下称信披标准)，信披标准明确提出，互联网金融行业从业机构应主动披露从业机构的注册资本与实缴资本。</p>
                                </Col>
                            </Row>
                        </li>
                    </ol>
                </section>
            </div>
        );
    }
}