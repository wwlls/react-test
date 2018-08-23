/** 输入框 **/
import React from "react";
import { Input } from 'antd';
import "./input.scss";


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
            <Input type={this.props.type} placeholder="Basic usage" />
        );
    }
}