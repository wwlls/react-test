import React from "react";
import { Link } from 'react-router-dom';
import { Icon, Row, Col,Pagination } from 'antd';
import moment from 'moment';
import Utils from 'utils';
import './page6.scss'

export default class page6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infolist: [],
            page_size: 6,
            current_page: 1,
            total: 1,
        };
    }

    componentDidMount() {
        this.getinfo()
    }

    //获取信息
    getinfo = () => {       
        let data = {
            page_size: this.state.page_size,
            current_page: this.state.current_page
        };
		let callback = (res) => {
            console.log(JSON.parse(res.body).noticeMessages)
            this.setState({
                infolist: JSON.parse(res.body).noticeMessages,
                total: JSON.parse(res.body).total
            })
		}
        Utils.postRequest('home/getNoticeMessageList',data ,callback);
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
        return (
            <div className="page page6">
                <div className='notice'>
                    <ul>
                    {
                        this.state.infolist.map((item,index)=>{
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
                    <Pagination showSizeChanger  current={this.state.current_page} pageSize={this.state.page_size} total={this.state.total} onChange={this.onChange}/>
                </div>
            </div>
        );
    }
}