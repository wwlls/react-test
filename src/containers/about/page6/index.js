import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getNoticeMessageList } from 'actions';
import { Icon, Row, Col, Message } from 'antd';
import Tools from 'utils/tools';
import Pagination from "component/pagination/pagination";
import './page6.scss'

class Page6 extends React.Component {
    static propTypes = {
        getNoticeMessageListData: PropTypes.object.isRequired,
        getNoticeMessageList: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 6,
            currentPage: 1,
            noticeMessages: [],
        };
    }

    componentDidMount() {
        this.getinfo()      
    }

    //获取公司动态
    getinfo = () => {       
        let data = {};
        data.page_size = this.state.pageSize;
        data.current_page = this.state.currentPage;
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
        const { getNoticeMessageListData } = this.props;
        return (
            <div className="page page6">
                <div className='notice'>
                    <ul>
                        {
                            getNoticeMessageListData.noticeMessages.map((item,index)=>{
                                return(
                                    <li key={index}>
                                        <Link to={'/about/details?id=' +  item.id} target="_blank">
                                            <div className='tit'></div>
                                            <p>{item.content}</p>
                                            <p className='p2'>{Tools.isMoment(item.createTime, 1)}</p>
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
                    total={getNoticeMessageListData.total}
                    onChangePagination={this.onChangePagination}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getNoticeMessageListData: state.getNoticeMessageList
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getNoticeMessageList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page6)