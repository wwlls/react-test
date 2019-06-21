import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Config from 'config';
import Header from 'component/header/header';
import SubBanner from 'component/subBanner/subBanner'
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import Tabs from 'component/tabs/tabs';
import Page1 from "./page1"; // 子页面1
import Page2 from "./page2"; // 子页面2
import Page3 from "./page3"; // 子页面3
import Page4 from "./page4"; // 子页面4
import "./safe.scss";

class Safe extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	panes : [
		      { title: '银行存管', content: <Page1 />, key: '1' },
		      { title: '风险管理', content: <Page2 />, key: '2' },
		      { title: '股东背景', content: <Page3 />, key: '3' },
		      { title: '网站安全', content: <Page4 />, key: '4' },
		    ],
	    	id: this.props.location.search.split('?id=')[1] !== undefined ? this.props.location.search.split('?id=')[1] : '1',
	    };
	}

	componentDidMount() {
		document.title = Config.title + '|稳健发展';
	}

	componentWillReceiveProps(nextProps){
	    let id = this.props.location.search.split('?id=')[1];
	    let nextPropsId = nextProps.location.search.split('?id=')[1];
	    if(id !== nextPropsId) {
	    	this.setState({
		    	id: nextPropsId,
		    })
	    }
	}

	//切换回调
	callback = (key) => {
		this.props.history.push('/safe?id=' + key);
	}

	render() {

		return (
			<div className="container">
				<Header />
				<SubBanner />
				<div className="safe layout">
					<Tabs panes={this.state.panes} id={this.state.id} callback={this.callback} />
				</div>
				<Footer />
				<BackTop />
			</div>
		)
	}
}

function mapStateToProps() {
  return {
  };
}
export default  connect(mapStateToProps)(Safe)