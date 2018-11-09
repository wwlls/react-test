import React from "react";
import { Table, Divider, Tag } from 'antd';
import moment from 'moment';

export default class AssetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    
    render() {
        const columns = [{
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
            render: (text, record) => (
                <a href="/member?id=">{record.detail}</a>
            )
        }];

        const { regularAssets } = this.props;
        console.log(regularAssets)
        const data = [];
        //table数据渲染
        for (var i = 0; i < regularAssets.length; i++) {
            let status = '';
            if(regularAssets[i].isExpired === 1) {
                status = Math.ceil((regularAssets[i].endTime - regularAssets[i].buyTime)/(24*60*60*1000) - (new Date().getTime() - regularAssets[i].buyTime)/(24*60*60*1000)) + '天后还款';
            } else if(regularAssets[i].isExpired === 3){
                status = '已到期';
            } else if(regularAssets[i].isExpired === 3){
                status = '已变现';
            }
            data.push({
                key: i,
                name: regularAssets[i].name,
                interest: parseFloat(regularAssets[i].interest * 100).toFixed(1) + '%', 
                money: parseFloat(regularAssets[i].money).toFixed(2),
                profit: parseFloat(regularAssets[i].profit).toFixed(2),
                buyTime: moment(regularAssets[i].buyTime).format('YYYY-MM-DD'),
                endTime: moment(regularAssets[i].endTime).format('YYYY-MM-DD'),
                isExpired: status,
                detail:'出借详情',
                assetId: regularAssets[i].assetId
            })
        }
        return (
            <Table columns={columns} dataSource={data} pagination={false} rowClassName={(record, index) => record.isExpired === '3'?'csbsTypes':''} />
        );
    }
}