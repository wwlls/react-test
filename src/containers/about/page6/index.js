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
<<<<<<< HEAD
            infolist: [],
            page_size: 6,
            current_page: 1,
            total: 1,
=======
            infolist:[],
            page_size:10,//每页数
            current_page:1,//分页开始
            total:0,//总数
>>>>>>> 9664afcd8ab090e87640a8d4b6464fa1878f0507
        };
    }

    componentDidMount() {
        this.getinfo()
    }
<<<<<<< HEAD

    getinfo = () => {
        let data = {
            page_size: this.state.page_size,
            current_page: this.state.current_page
        };
=======
    //获取信息
    getinfo=()=>{
       
        let data = {page_size:this.state.page_size,current_page:this.state.current_page};
>>>>>>> 9664afcd8ab090e87640a8d4b6464fa1878f0507
		let callback = (res) => {
            console.log(JSON.parse(res.body).noticeMessages)
            this.setState({
                infolist: JSON.parse(res.body).noticeMessages,
                total: JSON.parse(res.body).total
            })
		}
        Utils.postRequest('home/getNoticeMessageList',data ,callback);
    }
<<<<<<< HEAD

    onChange = (e) => {
=======
    //分页改变
    onChange=(e)=>{
       
>>>>>>> 9664afcd8ab090e87640a8d4b6464fa1878f0507
        this.setState({
            current_page: e
        },()=>{
            this.getinfo()
        })
    }
<<<<<<< HEAD
=======
    //时间戳转换
     timestampToTime=(timestamp)=> {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = ((date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1)) + '-';
        var D = (date.getDate()<10?'0'+date.getDate():date.getDate())+ '';
        var h = date.getHours() + ':';
        var m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
        var s = date.getSeconds();
        return Y+M+D;
    }
>>>>>>> 9664afcd8ab090e87640a8d4b6464fa1878f0507

    render() {
        return (
            <div className="page page6">
<<<<<<< HEAD
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
                    <Pagination current={this.state.current_page} pageSize={this.state.page_size} total={this.state.total} onChange={this.onChange}/>
                </div>
=======
              <div className='notice'>
              <ul>
              {
                  this.state.infolist.map((item,index)=>{
                      return(
                       <li key={index}>
                       <a href={item.link} target="_blank">
                         <div className='tit'></div>
                         <p>{item.content}</p>
                         <p className='p2'>{this.timestampToTime(item.createTime)}</p>
                       </a>
                    </li>
                      )
                  })
              }
              </ul>
              </div>
               <div style={{float:'right',marginTop:20}}>

               <Pagination defaultCurrent={1} total={this.state.total} onChange={this.onChange}/></div>
             
>>>>>>> 9664afcd8ab090e87640a8d4b6464fa1878f0507
            </div>
        );
    }
}