/** 其他页面banner图 **/
import React from "react";
import safeBanner from 'static/images/safe/safeBanner.jpg';
import "./subBanner.scss";

export default class subBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            safeBanner: safeBanner,
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="subBanner">
                <img src={this.state.safeBanner} alt="subBanner" />
            </div>
        );
    }
}