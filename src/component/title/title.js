/** 公用title **/
import React from "react";
import "./title.scss";

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="title">
                <span></span>{this.props.title}
            </div>
        );
    }
}