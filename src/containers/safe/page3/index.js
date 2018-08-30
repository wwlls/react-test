import React from "react";
import Map from '../../../component/map/map';
import safeImg6 from '../../../static/images/safe/img6.jpg';
import safeImg7 from '../../../static/images/safe/img7.png';
import safeImg9 from '../../../static/images/safe/img9.jpg';

export default class page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            safeImg6: safeImg6,
            safeImg7: safeImg7,
            safeImg9: safeImg9,
        };
    }

    componentDidMount() {
        
    }
    
    render() {
        return (
            <div className="page">
               <section className="column">
                    <h4 className="textC">华赢宝股东背景</h4>
                    <h5 className="textC">股东背景（集团控股、上市背景）</h5>
                    <p>
                        <i></i><b>集团实力</b>
                    </p>
                    <p className="size">
                        华赢宝为支氏控股集团旗下互联网金融信息中介平台，办公地址为支氏控股集团自有办公大楼，股东背景强大。
                    </p>
                    <p>
                        支氏控股集团由支华先生创办，注册地址在浙江省杭州市滨江区信诚路33号，注册并实缴资本3亿元。集团下属企业分布在房地产开发、建筑工程、市政建设、矿产资源、停车服务、进出口贸易及互联网金融、旅游、医疗、农业、创新培训等行业，总资产超过50亿元。支氏控股集团的前身是成立于2003年的杭州支华市政工程有限公司，十余年来，企业从小到大，由弱到强，逐步形成“实业+互联网+金融”齐头并进的发展趋势，作为建筑行业起家的支氏控股集团，始终不忘初心，不断做大做强实体产业。        
                    </p>
                </section>
                <section className="column">
                    <p>
                        <i></i><b>集团业务</b>
                    </p>
                    <p className="size">
                        集团房地产板块主要与浙江省交通出借集团合作，目前合作项目位于杭州市淳安县千岛湖，该项目占地160亩，总计可建13万平方米住宅，截至2017年底已实现销售5亿元，未来3年的总销售额预计可突破10亿元。土地储备包括杭州市下沙街道37亩的开发用地和119亩的产业园用地，将在2018年进行开发，预计开发可售面积超过20万平米。集团市政建设板块先后承接了杭州萧山国际机场T3航站楼、杭州地铁工程、杭州奥体博览城工程、杭州东站铁路枢纽工程、杭州市民中心工程、杭州钱江新城国际会议中心工程等重大项目，每年产值保持在20亿元左右。
                    </p>
                    <p>
                        集团矿产资源板块通过拍卖方式取得了位于杭州市西湖区石矿的经营权，该石矿在有效经营期内的总销售额可达8亿元左右，目前日均销售额保持在100万元左右。        
                    </p>
                    <img className="safeImg6" src={this.state.safeImg6} alt="集团业务" />
                </section>
                <section className="column">
                    <p>
                        <i></i><b>固定资产  自有办公物业 </b>
                    </p>
                    <p className="size">
                        华赢宝作为互联网企业，并不是轻资产运营，公司运营总部位于集团办公大楼内，是行业内极少数有自己独栋办公大楼的互联网金融公司，华赢宝安全稳健性远高于其他租办公室运营的轻资产互联网金融公司，
                    </p>
                    <p>
                        滨江办公楼：2栋        
                    </p>
                    <p>
                        总层数：1栋10层，1栋5层
                    </p>
                    <p>
                        总面积：15000m2
                    </p>
                    <p>
                        总价值：评估价2亿元
                    </p>
                    <p>
                        位置：杭州市滨江区信诚路33号支氏控股大厦
                    </p>
                    <p>
                        优势：商业黄金地段、交通便利
                    </p>
                    <img className="safeImg7" src={this.state.safeImg7} alt="固定资产" />
                    <Map />
                </section>
                <section className="column">
                    <p>
                        <i></i><b>股东上市公司背景 </b>
                    </p>
                    <p className="size">
                        杭州华赢宝网络科技有限公司具备香港主板上市企业背景,隶属于支氏控股集团有限公司。支氏控股集团在2 0 1 7 年斥资3 亿元完成对香港主板上市公司高锐中国物联(HK.01682)的股权收购，控股并改名华隆金控，并已着手开展资本运作，增资扩股，整合装入集团旗下优质资产，提高集团综合实力和品牌影响力。
                    </p>
                    <img className="safeImg9" src={this.state.safeImg9} alt="集团业务" />
                </section>
            </div>
        );
    }
}