import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd-mobile';
import Header from '../../component/header/header';
import { setImg } from '../../actions';
import Utils from '../../utils';
import Config from '../../../config';
import ImgTest from "../../static/images/bannerHalf.png";

class Index extends React.Component {
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

  render() {
    return (
      <div className="page page-index">
        <Header />
        {
          this.state.imageUrl ?
            <img src={Config.api + this.state.imageUrl} />
            : null
        }
        <Button>按钮</Button>
        <img src={ImgTest} />
        <div className="btn" onClick={this.goOther} data-name={"姓名"}>获取数据跳转页面</div>
      </div>

    );
  }
}

// 修改redux调用mapDispatchToProps，里面bind绑定对应的方法,这里是setImg
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setImg }, dispatch);
}

// 这个页面不获取redux，所以connect第一个参数为null;
export default connect(null, mapDispatchToProps)(Index);
