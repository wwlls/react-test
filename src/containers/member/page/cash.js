import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from 'utils';
import Title from 'component/title/title';
import download from "static/images/common/app.png";

class Cash extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="cash">
	  			<Title title="账户提现" />
	  			<div className="cashMain">
	  				<h5>温馨提示：提现功能正在研发中，如需提现可下载APP，更方便</h5>
	  				<img src={download} alt="下载APP" />
	  				<p>扫码下载APP，提现，出借更方便</p>
	  			</div>
	  		</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default connect(mapStateToProps)(Cash)