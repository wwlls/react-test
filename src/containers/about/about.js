import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../component/header/header';
import SubBanner from '../../component/subBanner/subBanner'
import Anchor  from '../../component/anchor/anchor'
import Footer from '../../component/footer/footer';
import BackTop from '../../component/backTop/backTop';
import Tabs from '../../component/tabs/tabs';
import safeBanner from '../../static/images/safe/safeBanner.jpg';
import Page1 from "./page1"; // 子页面1
import Page2 from "./page2"; // 子页面2
import Page3 from "./page3"; // 子页面3
import Page4 from "./page4"; // 子页面4
import Page5 from "./page5"; // 子页面5
import Page6 from "./page6"; // 子页面6
import Page7 from "./page7"; // 子页面7
import Page8 from "./page8"; // 子页面8
import "./about.scss";

class About extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	safeBanner: safeBanner,
	    	panes : [
		      { title: '关于华赢宝', content: <Page1 />, key: '1' },
		      { title: '团队介绍', content: <Page2 />, key: '2' },
		      { title: '业务介绍', content: <Page3 />, key: '3' },
		      { title: '运营数据', content: <Page4 />, key: '4' },
		      { title: '媒体报道', content: <Page5 />, key: '5' },
		      { title: '公司动态', content: <Page6 />, key: '6' },
		      { title: '从业机构信息', content: <Page7 />, key: '7' },
		      { title: '相关法律法规披露', content: <Page8 />, key: '8' },
		    ],
	    	id: this.props.location.search.split('?id=')[1] !== undefined ? this.props.location.search.split('?id=')[1] : '1',
	    };
	}

	componentDidMount() {
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
	callback = (key) =>	 {
		this.props.history.push('/about?id=' + key);
	}

	render() {
		return (
			<div className="container">
				<Header />
				<SubBanner safeBanner={this.state.safeBanner} />
				<div className="about layout">
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
export default  connect(mapStateToProps)(About)