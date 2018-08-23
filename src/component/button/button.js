/** 按钮 **/
import React from "react";
import { Button } from 'antd';
import "./button.scss";


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
            <Button onClick={this.props.handleSame} disabled={this.props.disabled}>{this.props.text}</Button>
        );
    }
}