import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getNoticeMessageList } from 'actions';
import { Icon, Row, Col } from 'antd';
import moment from 'moment';
import Utils from 'utils';
import Pagination from "component/pagination/pagination";
import './page6.scss'

class Page6 extends React.Component {
    static propTypes = {
        total: PropTypes.number.isRequired,
        getNoticeMessageListData: PropTypes.array.isRequired,
        getNoticeMessageList: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 6,
            currentPage: 1,
        };
    }

    componentDidMount() {
        this.getinfo()      
    }

    //获取公司动态
    getinfo = () => {       
        let data = {
            pageSize: this.state.pageSize,
            currentPage: this.state.currentPage
        };
		this.props.getNoticeMessageList(data);
    }

    itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>上一页</a>;
        } if (type === 'next') {
            return <a>下一页</a>;
        }
          return originalElement;
    }

    //分页改变
    onChangePagination = (e) => {
        this.setState({
            currentPage: e
        },()=>{
            this.getinfo()
        })
    }

    render() {
        const { total } = this.props;
        const { getNoticeMessageListData } = this.props;
        return (
            <div className="page page6">
                <div className='notice'>
                    <ul>
                    {
                        getNoticeMessageListData.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <Link to={'/about/details?id=' +  item.id} target="_blank">
                                        <div className='tit'></div>
                                        <p>{item.content}</p>
                                        <p className='p2'>{moment(item.createTime).format('YYYY-MM-DD')}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <Pagination
                    currentPage={this.state.currentPage}
                    pageSize={this.state.pageSize}
                    total={total}
                    onChangePagination={this.onChangePagination}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        total: state.getNoticeMessageList.total,
        getNoticeMessageListData: state.getNoticeMessageList.noticeMessages
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getNoticeMessageList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page6)