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

class Capital extends React.Component {
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
            today: '',
            oneMonth: '',
            threeMonth: '',
            columns: [{  //表格header
                title: '时间',
                dataIndex: 'occurencyDate',
                key: 'occurencyDate',
                width: 200,
            }, {
                title: '金额(元)',
                dataIndex: 'money',
                key: 'money',
                width: 200,
                render: (text, record) => (
                	<div
                		style={
                			record.occurencyType === 2 || record.occurencyType === 4 || record.occurencyType === 5 || record.occurencyType === 6 || record.occurencyType === 7 || record.occurencyType === 8 || 
                			record.occurencyType === 10 || record.occurencyType === 12 || record.occurencyType === 14 || record.occurencyType === 15 || record.occurencyType === 17 || record.occurencyType === 18 
                			? {color: '#E0391C'}
                			: {color: '#00C571'}
                		}
                	>
                	{
                		record.occurencyType === 2 || record.occurencyType === 4 || record.occurencyType === 5 || record.occurencyType === 6 || record.occurencyType === 7 || record.occurencyType === 8 || 
                		record.occurencyType === 10 || record.occurencyType === 12 || record.occurencyType === 14 || record.occurencyType === 15 || record.occurencyType === 17 || record.occurencyType === 18 
                		? '+' + record.money
                		: '-' + record.money
                	}
                	</div>
                )
            }, {
                title: '资金去向',
                dataIndex: 'reason',
                key: 'reason',
                width: 160, 
            }],
            tableData: [],
	    };
	}
	componentDidMount() {
		this.getAccountDetailList();
	}

	//获取列表数据
    getAccountDetailList() {
        let data = {};
        data.start_date = this.state.start_date;
        data.end_date = this.state.end_date;
        data.current_page = this.state.currentPage;
        data.page_size = this.state.pageSize;
        let callFuc = (res) => {
            console.log(JSON.parse(res.body))
            if(res.rtn_code === 0) {
                let accountDetails = JSON.parse(res.body).accountDetails;
                let dataSource = [];
                for (var i = 0; i < accountDetails.length; i++) {
                    dataSource.push({
                        key: i,
                        occurencyDate: Tools.isMoment(accountDetails[i].occurencyDate, 0),
                        money: Tools.isNumeral(accountDetails[i].money),
                        occurencyType: accountDetails[i].occurencyType,
                        reason: accountDetails[i].reason,
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
        Utils.postRequest(Api.asset_getAccountDetailList, data, callFuc);
    }

    //分页
    onChangePagination = (e) => {
        this.setState({
            currentPage: e
        },()=>{
            this.getAccountDetailList()
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

	//今天
	today = () => {
		this.setState({
			defaultStartDate: Tools.isMoment(new Date().getTime(), 1),
			defaultEndDate: Tools.isMoment(new Date().getTime(), 1),
	  		start_date: Tools.isMoment(new Date().getTime(), 1),
	  		end_date: Tools.isMoment(new Date().getTime(), 1),
	  		today: 'active',
	  		oneMonth: '',
	  		threeMonth: '',
	  	}, () => {
	      	this.getAccountDetailList()
	    })
	}
	//近一个月
	oneMonth = () => {
		this.setState({
			defaultStartDate: Tools.isMoment(new Date().setMonth(new Date().getMonth()-1), 1),
			defaultEndDate: Tools.isMoment(new Date().getTime(), 1),
	  		start_date: Tools.isMoment(new Date().setMonth(new Date().getMonth()-1), 1),
	  		end_date: Tools.isMoment(new Date().getTime(), 1),
	  		today: '',
	  		oneMonth: 'active',
	  		threeMonth: '',
	  	}, () => {
	      	this.getAccountDetailList()
	    })
	}
	//近3个月
	threeMonth = () => {
		this.setState({
			defaultStartDate: Tools.isMoment(new Date().setMonth(new Date().getMonth()-3), 1),
			defaultEndDate: Tools.isMoment(new Date().getTime(), 1),
	  		start_date: Tools.isMoment(new Date().setMonth(new Date().getMonth()-3), 1),
	  		end_date: Tools.isMoment(new Date().getTime(), 1),
	  		today: '',
	  		oneMonth: '',
	  		threeMonth: 'active',
	  	}, () => {
	      	this.getAccountDetailList()
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
			this.setState({
				today: '',
		  		oneMonth: '',
		  		threeMonth: '',
			})
			this.getAccountDetailList()
		} else {
			Message.error('结束时间大于等于开始时间');
		}	
	}

	render() {
		console.log(this.state.defaultStartDate)
		const dateFormat = 'YYYY-MM-DD';
		return (
	  		<div className="capital">
	  			<Title title="资金流水" />
	  			<div className="capitalMain">
	  				<Row>
	  					<Col md={3}>
	  						<em>起止时间：</em>
	  					</Col>
	  					<Col md={21}>
			  				<DatePicker onChange={this.onChangeStart} allowClear={true} value={moment(this.state.defaultStartDate, dateFormat)} locale={locale} />
			  				<DatePicker onChange={this.onChangeEnd} allowClear={true} value={moment(this.state.defaultEndDate, dateFormat)} locale={locale} />
			  				<a className={this.state.today} href="javascript:;" onClick={this.today}>今天</a>
	  						<a className={this.state.oneMonth} onClick={this.oneMonth} href="javascript:;">近一个月</a>
	  						<a className={this.state.threeMonth} onClick={this.threeMonth} href="javascript:;">近3个月</a>
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
export default connect(mapStateToProps)(Capital)