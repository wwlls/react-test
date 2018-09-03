import React from 'react';
import { connect } from 'react-redux';
import Config from '../../../config';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.imgSrc
    };
  }

  goMember = () => {
    alert(1)
    this.props.history.push('/member');
  }

  render() {
    return (
      <div className="page page-list">
        <p>list页面</p>
        <p onClick={this.goMember}>跳转到member页面</p>
      {
        this.state.imageUrl ?
          <img src={Config.api + this.state.imageUrl} />
          : null
      }
      </div>
    );
  }
}

function mapStateToProps({ imgSrc }) {
  return {
    imgSrc
  };
}

export default connect(mapStateToProps)(List);
