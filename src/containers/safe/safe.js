import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../component/header/header';
import Anchor from '../../component/anchor/anchor'

class Safe extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className="home">
				<Header />
				<Anchor />
			</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default  connect(mapStateToProps)(Safe)