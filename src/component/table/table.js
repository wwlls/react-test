//table组件
import React from "react";
import { Table, Divider, Tag } from 'antd';
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
                pagination={false}
            />
        );
    }
}