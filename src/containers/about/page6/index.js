import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getNoticeMessageList } from 'actions';
import { Icon, Row, Col, Pagination } from 'antd';
import moment from 'moment';
import Utils from 'utils';
import './page6.scss'

class Page6 extends React.Component {
    static propTypes = {
        //getCountData: PropTypes.object.isRequired,
        getNoticeMessageList: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            infolist: [],
            page_size: 6,
            current_page: 1,
        };
    }

    componentDidMount() {
        this.getinfo()      
    }

    //获取公司动态
    getinfo = () => {       
        let data = {
            page_size: this.state.page_size,
            current_page: this.state.current_page
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
    onChange = (e) => {
        this.setState({
            current_page: e
        },()=>{
            this.getinfo()
        })
    }

    render() {
        const { totalData } = this.props;
        const { getNoticeMessageListData } = this.props;
        return (
            <div className="page page6">
                <div className='notice'>
                    <ul>
                    {
                        getNoticeMessageListData.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <Link to={item.link} target="_blank">
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
                <div style={{float:'right',marginTop:20}}>
                    <Pagination showQuickJumper hideOnSinglePage={true} current={this.state.current_page} pageSize={this.state.page_size} total={totalData} onChange={this.onChange} itemRender={this.itemRender} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        totalData: state.getNoticeMessage.total,
        getNoticeMessageListData: state.getNoticeMessage.noticeMessages
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getNoticeMessageList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page6)