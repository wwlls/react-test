import React from "react";
import { Icon, Row, Col } from 'antd';
import pic1 from 'static/images/about/001.png'
import pic2 from 'static/images/about/002.png'

export default class page7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        var information = document.getElementById('information')
        information.innerHTML=`
          <div class="tab_content" style="display: block;">
        <div class="tab7_tt"><div id="diamond"></div><span>从业机构基本信息</span></div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">公司全称：</span><span class="tab7_r_span">杭州华赢宝网络科技有限公司</span></li>
                <li><span class="tab7_l_span">公司简称：</span><span class="tab7_r_span">华赢宝</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">统一社会信用代码：</span><span class="tab7_r_span">91330108MA27WJDG79</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">注册资本：</span><span class="tab7_r_span">5000万人民币</span></li>
                <li><span class="tab7_l_span">实缴资本：</span><span class="tab7_r_span">1000万人民币</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">公司注册/经营地：</span><span class="tab7_r_span">杭州市滨江区信诚路33号2幢911室</span></li>
                <li><span class="tab7_l_span">公司成立时间：</span><span class="tab7_r_span">2015-12-22</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">公司经营期限：</span><span class="tab7_r_span">2015-12-22至2045-12-21</span></li>
                <li><span class="tab7_l_span">公司经营状态：</span><span class="tab7_r_span">开业</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">法定代表人：</span><span class="tab7_r_span">支华</span></li>
                <li><span class="tab7_l_span">分支机构信息：</span><span class="tab7_r_span">暂无分支机构</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li style="width: 1000px"><span class="tab7_l_span">经营范围：</span><span class="tab7_r_span" style="width: 600px">技术开发、技术服务、技术咨询、成果转让：计算机网络技术、计算机软硬件、电子产品；服务：出借管理、出借咨询（除证券、期货）(未经金融等监管部门批准，不得从事向公众融资存款、代客出借等金融服务) 财务管理；实业出借（依法须经批准的项目，经相关部门批准后方可开展经营活动）</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li style="width: 1000px"><span class="tab7_l_span">资金存管情况：</span><span class="tab7_r_span" style="width: 600px">银行存管技术对接中未上线</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom" style="border-bottom: 1px solid #8997B0">
            <ul>
                <li><span class="tab7_l_span">客户投诉情况：</span><span class="tab7_r_span">华赢宝一直秉承规范运营、公开透明、服务客户的理念。<br>截至目前，并无重大投诉。</span></li>
                <li><span class="tab7_l_span">客户联系电话：</span><span class="tab7_r_span">400-1190-717</span></li>
            </ul>
        </div>
        <div class="tab7_tt"><div id="diamond"></div><span>平台及备案信息</span></div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">平台网址：</span><span class="tab7_r_span">www.huayingbaolicai.com</span></li>
                <li><span class="tab7_l_span">公司简称：</span><span class="tab7_r_span">华赢宝</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">平台上线运营时间</span><span class="tab7_r_span">2015-10-17</span></li>
                <li><span class="tab7_l_span">APP应用/微信名称：</span><span class="tab7_r_span">华赢宝</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">工信部网站备案信息：</span><span class="tab7_r_span">浙ICP备15000913号-2</span></li>
                <li><span class="tab7_l_span">公安部网站备案信息：</span><span class="tab7_r_span">33010802005885</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom" style="border-bottom: 1px solid #8997B0">
            <ul>
                <!-- <li><span class="tab7_l_span" style="width: 155px">信息安全测评认证信息：</span><span class="tab7_r_span">信息系统安全等级保护三级备案</span></li> -->
                <li><span class="tab7_l_span">电信业务经营许可证：</span><span class="tab7_r_span">浙B2-20171023</span></li>
            </ul>
        </div>
        <div class="tab7_tt"><div id="diamond"></div><span>重大事项信息</span></div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span" style="width:300px">公司减资、合并、分立、解散或申请破产：</span><span style="padding: 0 0 0 20px;" class="tab7_r_span">无</span></li>
                <li><span class="tab7_l_span" style="width:300px">公司依法进入破产程序：</span><span style="padding: 0 0 0 20px;" class="tab7_r_span">无</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span" style="width:300px">公司被责令停业、整顿、关闭：</span><span style="padding: 0 0 0 20px;" class="tab7_r_span">无</span></li>
                <li><span class="tab7_l_span" style="width:300px">公司主要或者全部业务陷入停顿：</span><span style="padding: 0 0 0 20px;" class="tab7_r_span">无</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span" style="width:300px">公司涉及重大诉讼、仲裁，或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚</span><span class="tab7_r_span" style="padding: 8px 0 0 20px;">无</span></li>
                <li><span class="tab7_l_span" style="width:300px;">存在欺诈、损害出借人利益等其他影响网络借贷信息中介机构经营活动的重大事项</span><span class="tab7_r_span" style="padding: 8px 0 0 20px;">无</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom" style="border-bottom: 1px solid #8997B0">
            <ul>
                <li><span class="tab7_l_span" style="width:300px">公司法定代表人、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁或涉嫌违法违纪被有权机关调查，或受到刑事处罚、重大行政处罚，或被采取强制措施</span><span style="padding: 28px 0 0 20px;" class="tab7_r_span">无</span></li>
            </ul>
        </div>
        <div class="tab7_tt"><div id="diamond"></div><span>股东、团队及股权占比</span></div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">董事长：</span><span class="tab7_r_span">支华</span></li>
                <li><span class="tab7_l_span">监事：</span><span class="tab7_r_span">俞晓玲</span></li>
            </ul>
        </div>
        <div class="tab7_main border_bottom">
            <ul>
                <li><span class="tab7_l_span">高级管理人员：</span><span class="tab7_r_span">陈文海；吴廷忠；王凤亮</span></li>
                <li><span class="tab7_l_span">实际控制人：</span><span class="tab7_r_span">支华</span></li>
            </ul>
        </div>
        <div class="tab7_tt"><img src="${pic1}" alt=""></div>
        <div class="tab7_tt"><div id="diamond"></div><span>从业机构组织架构</span></div>
        <div class="tab7_tt"><img src="${pic2}" alt=""></div>
    </div>
        `
    }
    
    render() {
        return (
            <div className="page">
               <div id='information'></div>
            </div>
        );
    }
}