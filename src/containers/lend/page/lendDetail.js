import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {} from 'actions';
import { Icon, Row, Col, Button, Message } from 'antd';
import Header from 'component/header/header';
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import './lendDetail.scss';

class LendDetail extends React.Component {
	static propTypes = {
        // productListData: PropTypes.object.isRequired,
        // getProductList: PropTypes.func.isRequired,
    }
	constructor(props) {
	    super(props);
	    this.state = {
	    	active: 'active',
	    };
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="container">
				<Header active={this.state.active} />
				<div className="layout">
					1111
				</div>
				<Footer />
				<BackTop />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  	return {
  	};
}

const mapDispatchToProps = (dispatch) => {
  	return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LendDetail)