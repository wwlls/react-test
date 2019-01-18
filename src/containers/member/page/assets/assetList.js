import React from "react";
import { Message } from 'antd';
import moment from 'moment';
import Utils from 'utils/index';
import Title from 'component/title/title';
import Table from "component/table/table"; // tab子页面
import Pagination from "component/pagination/pagination";

export default class AssetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            pageSize: 10, 
            total: 10,
            columns: [{  //表格header
                title: '已匹配本金(元)',
                dataIndex: 'money',
                key: 'money',
                width: 120,
            }, {
                title: '项目编号',
                dataIndex: 'projectNo',
                key: 'projectNo',
                width: 160,
            }, {
                title: '借款人',
                dataIndex: 'borrowerName',
                key: 'borrowerName',
                width: 160,
            }, {
                title: '证件号',
                dataIndex: 'borrowerIdCard',
                key: 'borrowerIdCard',
                width: 160,
            }],
            tableData: [],
        };
    }

    componentDidMount() {
        this.getCreditAssetList();
    }
    
    //获取列表数据
    getCreditAssetList() {
        let assetId = this.props.location.search.split('?id=')[1];
        let data = {};
        data.asset_id = assetId;
        data.current_page = this.state.currentPage;
        data.page_size = this.state.pageSize;
        Utils.postRequest('asset/getCreditAssetList', data).then((res) => {
            if(res.rtn_code === 0) {
                let creditAssets = JSON.parse(res.body).creditAssets;
                let dataSource = [];
                for (var i = 0; i < creditAssets.length; i++) {
                    dataSource.push({
                        key: i,
                        money: creditAssets[i].money,
                        projectNo: creditAssets[i].projectNo,
                        borrowerName: creditAssets[i].borrowerName.substring(0,1)+"**",
                        borrowerIdCard: creditAssets[i].borrowerIdCard.substring(0,3)+"***********"+creditAssets[i].borrowerIdCard.substring(14),
                    })
                }
                this.setState({
                    tableData: dataSource,
                    total: JSON.parse(res.body).total
                })
            } else {
                Message.error(res.rtn_msg);
            }
        })
    }

    //分页
    onChangePagination = (e) => {
        this.setState({
            currentPage: e
        },()=>{
            this.getCreditAssetList()
        })
    }

    render() {
        return (
            <div>
                <Title title="出借详情" />
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
        );
    }
}