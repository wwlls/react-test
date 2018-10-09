import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from 'utils';

class Set extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}

	componentDidMount() {
		// let userMobile = Utils.getStorage('userMobile');
		// if(userMobile == '' || userMobile == null || userMobile == undefined) {
		// 	this.props.history.push('/login?toHref=member');
		// 	return;
		// }
	}

	render() {
		return (
			<div>
	  			5
	  		</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default connect(mapStateToProps)(Set)