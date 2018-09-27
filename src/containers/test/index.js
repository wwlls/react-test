import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button } from 'antd-mobile';
import Header from '../../component/header/header';
import { setImg, addNum , removeNum } from '../../actions';
import Utils from '../../utils';
import Config from '../../../config';
import ImgTest from "../../static/images/bannerHalf.png";

class Index extends React.Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        addNum: PropTypes.func.isRequired,
        removeNum: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            noBack: ''
        };
    }
    componentDidMount() {
        //token/get
        // Utils.postRequest('/api/login/checkMobile').then((res) => {
        //   console.log(res);
        // });
    }
    goOther (event) {
        // let name = event.target.getAttribute("data-name")
        // console.log(name)
        //redux存图片例子
        this.props.setImg(this.state.imageUrl);
        //this.props.history.push('/list');
        }

    addBtn = () => {
        this.props.addNum()
    }

    removeBtn = () => {
       if(this.props.count !== 0) {
         this.props.removeNum()
       } 
    }    

    render() {
        const { count } = this.props
        return (
            <div className="page-index">
                <Header />
                {
                  this.state.imageUrl ?
                    <img src={Config.api + this.state.imageUrl} />
                    : null
                }
                <Button>按钮</Button>
                <img src={ImgTest} />
                <div className="btn" onClick={this.goOther} data-name={"姓名"}>获取数据跳转页面</div>
                <h5>{count}</h5>
                <button onClick={this.addBtn}>add</button>
                <button onClick={this.removeBtn}>remove</button>
            </div>
        )
    }
}

//这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}


// 修改redux调用mapDispatchToProps，里面bind绑定对应的方法,这里是setImg
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setImg, addNum, removeNum }, dispatch);
}

// 这个页面不获取redux，所以connect第一个参数为null;
export default connect(mapStateToProps , mapDispatchToProps)(Index);
