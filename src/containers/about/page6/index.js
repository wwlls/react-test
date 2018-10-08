import React from "react";
import { Icon, Row, Col,Pagination } from 'antd';
import Utils from 'utils';
import './page6.scss'

export default class page6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infolist:[],
            page_size:10,
            current_page:1,
            total:1,
        };
    }

    componentDidMount() {
        this.getinfo()
    }
    getinfo=()=>{
       
        let data = {page_size:this.state.page_size,current_page:this.state.current_page};
		let callback = (res) => {
             this.setState({infolist:JSON.parse(res.body).noticeMessages,total:JSON.parse(res.body).total})
		
		}
        Utils.postRequest('home/getNoticeMessageList',data ,callback);
    }
    onChange=(e)=>{
       
        this.setState({
            current_page:e
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
                       <a href={item.link} target="_blank">
                         <div className='tit'></div>
                         <p>{item.content}</p>
                         <p className='p2'>{item.createTime}</p>
                       </a>
                    </li>
                      )
                  })
              }
              </ul>
              </div>
               <div style={{float:'right',marginTop:20}}>
               <Pagination defaultCurrent={1} total={this.state.total} onChange={this.onChange}/></div>
             
            </div>
        );
    }
}