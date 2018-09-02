import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./register.scss";

class Register extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="register">
				2
			</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default  connect(mapStateToProps)(Register)