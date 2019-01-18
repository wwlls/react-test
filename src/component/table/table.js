//table组件
import React from "react";
import { Table } from 'antd';
import './table.scss';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    
    render() {
        //table数据渲染
        const { tableData } = this.props;
        return (
            <Table 
                columns={this.props.columns}
                dataSource={tableData}  //表格数据渲染
                locale={{emptyText: '暂无数据'}}   //默认文案设置，目前包括排序、过滤、空数据文案
                pagination={false}
            />
        );
    }
}