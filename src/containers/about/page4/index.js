import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getCount } from 'actions';
import moment from 'moment';
import { Icon, Row, Col, Tooltip } from 'antd';
import './page4.scss'
import op1 from 'static/images/about/op1.png'
import op2 from 'static/images/about/op2.png'
import op3 from 'static/images/about/op3.png'
import op4 from 'static/images/about/op4.png'
import op5 from 'static/images/about/op5.png'
import op6 from 'static/images/about/op6.png'
import op7 from 'static/images/about/op7.png'
import op8 from 'static/images/about/op8.png'
import op9 from 'static/images/about/op9.png'
import op10 from 'static/images/about/op10.png'
import op11 from 'static/images/about/op11.png'
import op12 from 'static/images/about/op12.png'
import op13 from 'static/images/about/op13.png'
import op14 from 'static/images/about/op14.png'


class Page4 extends React.Component {
    static propTypes = {
        getCountData: PropTypes.object.isRequired,
        getCount: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
           infolist:'',
           yuqi:[
                  {num:0,name:'逾期金额（元）',img:op10},
                  {num:0,name:'金额逾期率(%)',img:op11},
                  {num:0,name:'逾期笔数(笔)',img:op12},
                  {num:0,name:'项目逾期率(%)',img:op13},
                  {num:0,name:'代偿金额 (元)',img:op14},
                  {num:0,name:'代偿笔数（笔）',img:op12},
                  {num:0,name:'逾期90天（不含）以上金额',img:op10},
                  {num:0,name:'逾期90天（不含）以上笔数',img:op10},
                  {num:0,name:'项目分级逾期率1~90（天）',img:op13},
                  {num:0,name:'项目分级逾期率91~180 (天)',img:op13},
                  {num:0,name:'项目分级逾期率180天以上',img:op13},
                  {num:0,name:'金额分级逾期率1~91（天）',img:op11},
                  {num:0,name:'金额分级逾期率91~180（天）',img:op11},
                  {num:0,name:'金额分级逾期率180天以上',img:op11}
                ],
            tzsf:[
                  {name:'业务类型'},
                  {name:'用户注册'},
                  {name:'开通存管账户'},
                  {name:'充值'},
                  {name:'出借管理'},
                  {name:'提现'},
                
                ], 
            jksf:[
                {name:'业务类型'},
                {name:'用户注册'},
                {name:'开通存管账户	'},
                {name:'充值'},
                {name:'提现'},
                {name:'借款服务'},
              
              ]   
        };
    }

    componentDidMount() {
       //平台数据方法
        this.props.getCount();    
    }


    render() {
        //获取平台数据
        const { getCountData } = this.props;
        console.log(getCountData)
        return (
            <div className="page page4">
               <section className="column">
                    <p>
                        <b>交易数据 </b>截至日期：{moment(new Date(new Date().getTime()-86400000)).format('YYYY年MM月DD日')}
                    </p>
                    <div className="aboutData">
                        <Row gutter={40}>
                            <Col md={8} className='parent'>
                                <Tooltip className='flex' placement="bottomLeft" title="自华赢宝成立起，华赢宝撮合完成的所有交易总和">
                                    <img src={op1}/>
                                    <dl>
                                        <dd>{parseFloat(getCountData.investMoneyTotal).toFixed(2)}</dd>
                                        <dt>累计交易总金额（元）</dt>
                                    </dl>
                                </Tooltip>
                            </Col>
                            <Col md={8} className='parent'>
                                <Tooltip className='flex' placement="bottomLeft" title="自华赢宝成立起，华赢宝撮合完成的借贷交易笔数总和">
                                    <img src={op2}/>
                                    <dl>
                                        <dd>{getCountData.investCountTotal}</dd>
                                        <dt>累计交易笔数（笔）</dt>
                                    </dl>
                                </Tooltip>
                            </Col>
                            <Col md={8} className='parent'>
                                <Tooltip className='flex' placement="bottomLeft" title="借贷余额：在投总额">
                                    <img src={op3}/>
                                    <dl>
                                        <dd>{parseFloat(getCountData.investMoney).toFixed(2)}</dd>
                                        <dt>借贷余额（元）</dt>
                                    </dl>
                                </Tooltip>
                                    
                            </Col>
                            <Col md={8} className='parent'>
                                <Tooltip className='flex' placement="bottomLeft" title="借贷余额笔数：在投总额笔数">
                                <img src={op4}/>
                                    <dl>
                                        <dd>{getCountData.borrowingCount}</dd>
                                        <dt>借贷余额笔数（笔）</dt>
                                    </dl>
                                </Tooltip>
                                
                            </Col>
                            <Col md={8} className='parent'>
                                <Tooltip className='flex' placement="bottomLeft" title="利息余额：在投总额利息">
                                <img src={op5}/>
                                    <dl>
                                        <dd>{parseFloat(getCountData.totalInterest).toFixed(2)}</dd>
                                        <dt>利息余额（元）</dt>
                                    </dl>
                                </Tooltip>
                            
                            </Col>
                            <Col md={8} className='parent'>
                                <Tooltip className='flex' placement="bottomLeft" title="我们的平台暂无：默认为0笔">
                                <img src={op6}/>
                                    <dl>
                                        <dd>0</dd>
                                        <dt>关联关系借款余额(元)</dt>
                                    </dl>
                                </Tooltip>
                            </Col>
                        </Row>
                    </div>
                </section>  


                <section className="column">
                <p>
                    <b>借款人数据 </b>截至日期：{moment(new Date(new Date().getTime()-86400000)).format('YYYY年MM月DD日')}
                </p>
                <div className="aboutData">
                    <Row gutter={40}>
                        <Col md={8} className='parent'>
                            <Tooltip className='flex' placement="bottomLeft" title=" 在平台借款成功，累计借款人总数（去重）">
                                <img src={op7}/>
                                <dl>
                                    <dd>{getCountData.borrowUserCountTotal}</dd>
                                    <dt>累计借款用户</dt>
                                </dl>
                            </Tooltip>
                        </Col>
                        <Col md={8} className='parent'>
                            <Tooltip className='flex' placement="bottomLeft" title="平台（在借）借款人总数">
                                <img src={op7}/>
                                <dl>
                                    <dd>{getCountData.borrowUserCount}</dd>
                                    <dt>当前借款用户</dt>
                                </dl>
                            </Tooltip>
                        </Col>
                        <Col md={8} className='parent'>
                            <Tooltip className='flex' placement="bottomLeft" title="自平台运营上线起，借款人累计交易总额与累计借款人总数之比">
                                <img src={op8}/>
                                <dl>
                                    <dd>{parseFloat(getCountData.borrowingMoney / getCountData.borrowUserCountTotal).toFixed(2)}</dd>
                                    <dt>人均累计借款金额(元)</dt>
                                </dl>
                            </Tooltip>
                                
                        </Col>
                        <Col md={8} className='parent'>
                            <Tooltip className='flex' placement="bottomLeft" title="最大一单借款人借款余额与累计借款总额之比">
                            <img src={op9}/>
                                <dl>
                                    <dd>{parseFloat(getCountData.borrowingTop1WMoney / getCountData.borrowingMoney).toFixed(2)}</dd>
                                    <dt>最大单一借款人待还金额占比(%)</dt>
                                </dl>
                            </Tooltip>
                        </Col>
                        <Col md={8} className='parent'>
                            <Tooltip className='flex' placement="bottomLeft" title="借款最多的前十户借款人的借款余额与累计借款总额之比">
                            <img src={op9}/>
                                <dl>
                                    <dd>{parseFloat(getCountData.borrowingTop10WMoney / getCountData.borrowingMoney).toFixed(2)}</dd>
                                    <dt>前十大借款人待还金额占比(%)</dt>
                                </dl>
                            </Tooltip>
                        
                        </Col>
                       
                    </Row>
                </div>
            </section>  

            <section className="column">
            <p>
                <b>出借人信息 </b>截至日期：{moment(new Date(new Date().getTime()-86400000)).format('YYYY年MM月DD日')}
            </p>
            <div className="aboutData">
                <Row gutter={40}>
                    <Col md={8} className='parent'>
                        <Tooltip className='flex' placement="bottomLeft" title=" 在平台出借成功，累计出借人总数（去重）">
                            <img src={op1}/>
                            <dl>
                                <dd>{getCountData.investCountTotal}</dd>
                                <dt>累计出借人数量（人）</dt>
                            </dl>
                        </Tooltip>
                    </Col>
                    <Col md={8} className='parent'>
                        <Tooltip className='flex' placement="bottomLeft" title="平台（在投）出借人总数">
                            <img src={op2}/>
                            <dl>
                                <dd>{getCountData.investCount}</dd>
                                <dt>当前出借人数量（人）</dt>
                            </dl>
                        </Tooltip>
                    </Col>
                    <Col md={8} className='parent'>
                        <Tooltip className='flex' placement="bottomLeft" title="自平台运营上线起，平台出借人累计交易总额与累计出借人总数之比">
                            <img src={op3}/>
                            <dl>
                                <dd>{parseFloat(getCountData.investMoneyTotal / getCountData.investCountTotal).toFixed(2)}</dd>
                                <dt>人均累计出借金额（元）</dt>
                            </dl>
                        </Tooltip>
                            
                    </Col>
                    <Col md={8} className='parent'>
                        <Tooltip className='flex' placement="bottomLeft" title="出借金额最大的出借人出借金额总和与累计出借总额之比">
                        <img src={op4}/>
                            <dl>
                                <dd>{parseFloat(getCountData.top1InvestMoney / getCountData.investMoney).toFixed(2)}</dd>
                                <dt>最大单户出借余额占比(%)</dt>
                            </dl>
                        </Tooltip>
                        
                    </Col>
                    <Col md={8} className='parent'>
                        <Tooltip className='flex' placement="bottomLeft" title="出借最多的前十户出借人的出借金额总和与累计借款总额之比">
                        <img src={op5}/>
                            <dl>
                                <dd>{parseFloat(getCountData.top10InvestMoney / getCountData.investMoney).toFixed(2)}</dd>
                                <dt>最大十户出借余额占比(%)</dt>
                            </dl>
                        </Tooltip>
                    
                    </Col>
                   
                </Row>
            </div>
        </section>  

        <section className="column">
        <p>
            <b>出借人信息 </b>截至日期：{moment(new Date(new Date().getTime()-86400000)).format('YYYY年MM月DD日')}
        </p>
        <div className="aboutData">
            <Row gutter={40}>
            {
                this.state.yuqi.map((item,index)=>{
                  return(
                    <Col md={8} className='parent1' key={index}>
                    
                        <img src={item.img}/>
                        <dl>
                            <dd>{item.num}</dd>
                            <dt>{item.name}</dt>
                        </dl>
               
                    </Col>
                  )
                })
            }
                
              
            </Row>
        </div>
    </section>  
            <section className="column">
                <p>
                    <b>投资人收费标准 </b>
                </p>
                    <div className="aboutData1">
                    {
                        this.state.tzsf.map((item,index)=>{
                            if(index<1){
                                return(
                                    <div className='te te3' key={index}>{item.name}</div>
                                )
                                
                            }else{
                                return(
                                    <div className='te' key={index}>{item.name}</div>
                                )
                                
                            }
                        })
                    }
                    <div className='te te1 te3'>收费标准</div>
                    <div className='te te1 te2'>免费</div>
                    <div className='te te1 te2'>免费</div>
                    <div className='te te1'>充值费用，暂全部由华赢宝承担，不向出借人收取</div>
                    <div className='te te1'>目前免费</div>
                    <div className='te te1'><div><span>30</span>天内免费提现<span>5</span>次，超过次数收取<span>2</span>元/笔的费用</div></div>
                
                    
                    
                    </div>
            </section>
            <section className="column">
                <p>
                    <b>借款人收费标准 </b>
                </p>
                    <div className="aboutData1">
                    {
                        this.state.jksf.map((item,index)=>{
                            if(index<1){
                                return(
                                    <div className='te te3' key={index}>{item.name}</div>
                                )
                                
                            }else{
                                return(
                                    <div className='te' key={index}>{item.name}</div>
                                )
                                
                            }
                        })
                    }
                    <div className='te te1 te3'>收费标准</div>
                    <div className='te te1 te2'>免费</div>
                    <div className='te te1 te2'>免费</div>
                    <div className='te te1 te2'>免费</div>
                    <div className='te te1 te2'>免费</div>
                    <div className='te te1'>向借款人收取服务费</div>
                
                    
                    
                    </div>
            </section>    
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        getCountData: state.getCount
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page4)