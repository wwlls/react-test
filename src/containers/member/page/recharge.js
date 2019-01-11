import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, DatePicker, Message } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import Utils from 'utils/index';
import Tools from 'utils/tools';
import Api from 'api/api';
import Title from 'component/title/title';
import Table from "component/table/table"; // tab子页面
import Pagination from "component/pagination/pagination";

class Recharge extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	defaultStartDate: Tools.isMoment(new Date().getTime(), 1),
	    	defaultEndDate: Tools.isMoment(new Date().getTime(), 1),
	    	currentPage: 1,
            pageSize: 10, 
            total: 10,
            start_date: '',
            end_date: '',
            columns: [{  //表格header
                title: '时间',
                dataIndex: 'createdTime',
                key: 'createdTime',
                width: 160,
            }, {
                title: '充值流水号',
                dataIndex: 'createdId',
                key: 'createdId',
                width: 160,
            }, {
                title: '充值方式',
                dataIndex: 'rechargeWay',
                key: 'rechargeWay',
                width: 160,
                render: (text, record) => (
                	<span>
                		{
                		  	record.rechargeWay === 1 ? '网银充值'
                		  	: ''
                		}
                	</span>
                )
            }, {
                title: '充值金额（元）',
                dataIndex: 'money',
                key: 'money',
                width: 160,
            }, {
                title: '状态',
                dataIndex: 'result',
                key: 'result',
                width: 160,
                render: (text, record) => (
	                <div 
	                    style={
	                        record.status === 0 ? {color: '#E0391C'}
	                        : record.status === 1 ? {color: '#00C571'}
	                        : ''
	                    }
	                >
	                    {
	                      	record.status === 0 ? '失败'
	                      	: record.status === 1 ? '成功'
	                      	: ''
	                    }
	                </div>
	            )
            }],
            tableData: [],
	    };
	}

	componentDidMount() {
		this.getRechargeRecordList();
	}

	//获取列表数据
    getRechargeRecordList() {
        let data = {};
        data.start_date = this.state.start_date;
        data.end_date = this.state.end_date;
        data.current_page = this.state.currentPage;
        data.page_size = this.state.pageSize;
        let callFuc = (res) => {
            console.log(JSON.parse(res.body))
            if(res.rtn_code === 0) {
                let rechargeRecords = JSON.parse(res.body).rechargeRecords;
                let dataSource = [];
                for (var i = 0; i < rechargeRecords.length; i++) {
                    dataSource.push({
                        key: i,
                        createdTime: Tools.isMoment(rechargeRecords[i].createdTime, 0),
                        createdId: rechargeRecords[i].id,
                        rechargeWay: rechargeRecords[i].rechargeWay,
                        money: Tools.isNumeral(rechargeRecords[i].money),
                        status: rechargeRecords[i].result
                    })
                }
                this.setState({
                    tableData: dataSource,
                    total: JSON.parse(res.body).total
                })
            } else {
                Message.error(res.rtn_msg);
            }
        }
        Utils.postRequest(Api.recharge_getRechargeRecordList, data, callFuc);
    }

    //分页
    onChangePagination = (e) => {
        this.setState({
            currentPage: e
        },()=>{
            this.getRechargeRecordList()
        })
    }

	//开始时间
	onChangeStart = (date, dateString) => {
	  	console.log(date, dateString);
	  	this.setState({
	  		defaultStartDate: dateString,
	  		start_date: dateString
	  	})
	}
	//结束时间
	onChangeEnd = (date, dateString) => {
	  	console.log(date, dateString);
	  	this.setState({
	  		defaultEndDate: dateString,
	  		end_date: dateString
	  	})
	}

	//搜索
	handleSearch = () => {
		if(this.state.start_date !== '' && this.state.end_date !== '') {
			this.search()
		} else {
			if(this.state.start_date === '' && this.state.end_date === '') {  //开始时间与结束时间同时没有选择
				this.setState({
			  		start_date: Tools.isMoment(new Date().getTime(), 1),
			  		end_date: Tools.isMoment(new Date().getTime(), 1)
			  	}, () => {
			      	this.search();
			    });
			} else if(this.state.start_date === '') { //开始时间没有选择
				this.setState({
			  		start_date: Tools.isMoment(new Date().getTime(), 1)
			  	}, () => {
					this.search();
			    });
			} else if(this.state.end_date === '') {	//结束时间没有选择
				this.setState({
			  		end_date: Tools.isMoment(new Date().getTime(), 1)
			  	}, () => {
			      	this.search();
			    });
			}

		}
	}
	search() {
		//结束时间大于等于开始时间
		if(this.state.end_date >= this.state.start_date) {
			this.getRechargeRecordList()
		} else {
			Message.error('结束时间大于等于开始时间');
		}	
	}

	render() {
		const dateFormat = 'YYYY-MM-DD';
		return (
			<div className="recharge">
	  			<Title title="充值记录" />
	  			<div className="rechargeMain">
	  				<Row>
	  					<Col md={3}>
	  						<em>起止时间：</em>
	  					</Col>
	  					<Col md={10}>
			  				<DatePicker onChange={this.onChangeStart} allowClear={true} value={moment(this.state.defaultStartDate, dateFormat)} locale={locale} />
			  				<DatePicker onChange={this.onChangeEnd} allowClear={true} value={moment(this.state.defaultEndDate, dateFormat)} locale={locale} />
	  					</Col>
	  					<Col md={5}>
	  						<Button onClick={this.handleSearch}>搜索</Button>
	  					</Col>
	  				</Row>
	  			</div>
	  			<Table 
                    tableData={this.state.tableData} 
                    columns={this.state.columns}
                />
                <Pagination
                    currentPage={this.state.currentPage}
                    pageSize={this.state.pageSize}
                    total={this.state.total}
                    onChangePagination={this.onChangePagination}
                />
	  		</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default connect(mapStateToProps)(Recharge)