import React from 'react';
import CarouselPage from 'component/carousel/carousel';
import Cascader from 'component/cascader/cascader';
import CountDown from '../../component/countDown/countDown';
import VCode from '../../component/vCode/vCode';
import Map from '../../component/map/map';
import Pagination from '../../component/pagination/pagination';
import Table from "component/table/table"; // tab子页面
import Tabs from 'component/tabs/tabs';
import BackTop from 'component/backTop/backTop';
import Radio from 'component/radio/radio';
import CountUp from 'react-countup';
import Tools from 'utils/tools';
import imgbanner1 from 'static/images/common/banner/banner1.jpg';
import imgbanner2 from 'static/images/common/banner/banner2.jpg';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselList: [
                {img : imgbanner1 , id : 0 , url: 'index'} , 
                {img : imgbanner2 , id : 1 , url: 'list'}
            ],
            money: 1000000000,
            time: Tools.isMoment(new Date().getTime(), 1),
            count: 60,
            stop: true,
            disabled: '',
            text: '立即获取',
            currentPage: 1,
            pageSize: 10, 
            total: 100,
            columns: [{  //表格header
                title: '项目名称',
                dataIndex: 'name',
                key: 'name',
                width: 170,
            }, {
                title: '年化率(%)',
                dataIndex: 'interest',
                key: 'interest',
                width: 100,
            }, {
                title: '投资金额(元)',
                dataIndex: 'money',
                key: 'money',
                width: 120,
            }, {
                title: '收益(元)',
                dataIndex: 'profit',
                key: 'profit',
                width: 90,
            }, {
                title: '投资时间',
                dataIndex: 'buyTime',
                key: 'buyTime',
                width: 120,
                render: (text, record) => (
                    <span>{moment(new Date().getTime()).format('YYYY-MM-DD')}</span>
                )
            }, {
                title: '还款时间',
                dataIndex: 'endTime',
                key: 'endTime',
                width: 120,
            }, {
                title: '状态',
                dataIndex: 'isExpired',
                key: 'isExpired',
                width: 120,
            }, {
                title: '操作',
                dataIndex: 'detail',
                key: 'detail',
            }],
            tableData: [],
            panes : [
              { title: '银行存管', content: '1234', key: '1' },
              { title: '风险管理', content: '5678', key: '2' },
              { title: '股东背景', content: '3457', key: '3' },
              { title: '网站安全', content: '4567', key: '4' },
            ],
            id: this.props.location.search.split('?id=')[1] !== undefined ? this.props.location.search.split('?id=')[1] : '1',
        };
    }

    componentDidMount() {

    }

    //tab
    componentWillReceiveProps(nextProps){
        let id = this.props.location.search.split('?id=')[1];
        let nextPropsId = nextProps.location.search.split('?id=')[1];
        if(id !== nextPropsId) {
            this.setState({
                id: nextPropsId,
            })
        }
    }
    //切换回调
    callback = (key) => {
        this.setState({
            id: key
        })
        //this.props.history.push('/safe?id=' + key);
    }

    //获取验证码
    handelGetCode = () => {
        this.setTime();
    };

    //倒计时方法
    setTime = () => {
        clearInterval(this.timer);
        this.state.stop = false;
        this.setState({
            disabled: 'disabled'
        })
        this.timer = setInterval(function() {
            let count = this.state.count;
            this.state.liked = false;
            count -= 1;
            this.setState({
                count: count
            });
            if (count < 1) {
                this.state.stop = true;
                this.setState({
                    liked: true,
                    disabled: '',
                    text: '重发',
                    count: 60
                });
　　　　　　　　clearInterval(this.timer);
            }
        }.bind(this), 1000);
    }

    //翻页
    onChangePagination = (e) => {
        this.setState({
            currentPage: e
        },()=>{
            //this.getRegularAssetList()
        })
    }

    render() {
        return (
            <div className="page page-Member">
                <p>member页面</p>
                <div>金额格式化：{Tools.isNumeral(this.state.money)}</div>
                <div>时间格式化：{Tools.isMoment(this.state.time, 0)}<br/>{Tools.isMoment(this.state.time, 1)}<br/>{Tools.isMoment(this.state.time, 2)}</div>
                <CountUp start={0} end={1000000} decimals={2} duration={4}></CountUp>
                <Cascader />
                <CarouselPage carouselList={this.state.carouselList} carousel="indexList" open="block" />
                <CountDown handelGetCode={this.handelGetCode} stop={this.state.stop} text={this.state.text} count={this.state.count} disabled={this.state.disabled} getCode='getCode' />
                <VCode />
                <Map />
                <Pagination
                    currentPage={this.state.currentPage}
                    pageSize={this.state.pageSize}
                    total={this.state.total}
                    onChangePagination={this.onChangePagination}
                />
                <Table 
                    tableData={this.state.tableData} 
                    columns={this.state.columns}
                />
                <Tabs panes={this.state.panes} id={this.state.id} callback={this.callback} />
                <Radio />
                <BackTop />
             </div>
        );
    }
}