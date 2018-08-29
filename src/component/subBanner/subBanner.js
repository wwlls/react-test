/** 其他页面banner图 **/
import React from "react";
import "./subBanner.scss";


export default class subBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="subBanner">
                <img src={this.props.safeBanner} alt="subBanner" />
            </div>
        );
    }
}