//翻页组件
import React from "react";
import { Pagination } from 'antd';
import './pagination.scss';

export default class AssetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>上一页</a>;
        } if (type === 'next') {
            return <a>下一页</a>;
        }
          return originalElement;
    }
    
    render() {
        return (
            <div className="Pagination">
                <Pagination 
                    showQuickJumper 
                    hideOnSinglePage={true}     //是否可以快速跳转至某页
                    hideOnSinglePage={true}     //只有一页时是否隐藏分页器
                    // showSizeChanger={true}  //是否可以改变 pageSize
                    // pageSizeOptions={['1', '2', '3']}  //指定每页可以显示多少条
                    current={this.props.currentPage} 
                    pageSize={this.props.pageSize} 
                    total={this.props.total} 
                    onChange={this.props.onChangePagination} 
                    itemRender={this.itemRender}
                />
            </div>
        );
    }
}