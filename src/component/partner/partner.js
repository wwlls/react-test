/** 合作单位 **/
import React from "react";
import partnerIcon from "../../static/images/home/partnerIcon.png";
import "./partner.scss";


export default class partner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }
    
    render() {
        return (
            <div className="partner layout">
               	<h5><img src={partnerIcon} alt="合作单位" />合作单位</h5>
            </div>
        );
    }
}