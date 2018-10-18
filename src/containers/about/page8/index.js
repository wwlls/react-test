import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Page8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="page">
                <section className="column">
                    <h5 className="textC"><span></span>媒体报道</h5>
                    <div className="line"></div>
                    <p className="textC"><Link to="/about/law1">《网络借贷风险认知书》</Link></p>
                    <p className="textC"><Link to="/about/law2">《网络借贷禁止性行为提示书》</Link></p>
                    <p className="textC"><Link to="/about/law3">《资金来源合法承诺书》</Link></p>
                    <p className="textC"><Link to="/about/law4">出借人风险评估制度</Link></p>
                    <p className="textC"><Link to="/about/law5">网贷风险教育</Link></p>
                    <p className="textC"><Link to="/about/law6">相关法律法规</Link></p>   
                </section>
            </div>
        );
    }
}