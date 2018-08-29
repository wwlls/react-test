import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs } from 'antd';
import Header from '../../component/header/header';
import SubBanner from '../../component/subBanner/subBanner'
import Footer from '../../component/footer/footer';
import BackTop from '../../component/backTop/backTop';
import safeBanner from '../../static/images/safe/safeBanner.jpg';
import safeImg1 from '../../static/images/safe/img1.png';
import safeImg2 from '../../static/images/safe/img2.png';
import safeImg3 from '../../static/images/safe/img3.png';
import safeImg4 from '../../static/images/safe/img4.png';
import safeImg5 from '../../static/images/safe/img5.png';
import safeImg6 from '../../static/images/safe/img6.jpg';
import Page1 from "./page1"; // 子页面1
import Page2 from "./page2"; // 子页面2
import Page3 from "./page3"; // 子页面3
import Page4 from "./page4"; // 子页面4
import "./safe.scss";

class Safe extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	safeBanner: safeBanner,
	    	safeImg1: safeImg1,
	    	safeImg2: safeImg2,
	    	safeImg3: safeImg3,
	    	safeImg4: safeImg4,
	    	safeImg5: safeImg5,
	    	safeImg6: safeImg6,
	    	id: this.props.location.search.split('?id=')[1] !== undefined ? this.props.location.search.split('?id=')[1] : '1',
	    };
	}

	componentDidMount() {
	}

	callback(key) {
		this.props.history.push('/safe?id=' + key);
	  	console.log(key);
	}

	render() {
		const TabPane = Tabs.TabPane;
		return (
			<div className="container">
				<Header />
				<SubBanner safeBanner={this.state.safeBanner} />
				<div className="safe layout">
					<Tabs defaultActiveKey={this.state.id} onChange={this.callback.bind(this)}>
					    <TabPane tab="银行存管" key="1">
					    	<Page1 safeImg1={this.state.safeImg1} safeImg2={this.state.safeImg2} />
					    </TabPane>
					    <TabPane tab="风险管理" key="2">
					    	<Page2 safeImg3={this.state.safeImg3} safeImg4={this.state.safeImg4} safeImg5={this.state.safeImg5} />
					    </TabPane>
					    <TabPane tab="股东背景" key="3">
					    	<Page3 safeImg6={this.state.safeImg6} />
					    </TabPane>
					    <TabPane tab="网站安全" key="4">
					    	<Page4 />
					    </TabPane>
				  	</Tabs>
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