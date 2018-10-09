/** 面包屑 **/
import React from "react";
import { Breadcrumb } from 'antd';
import "./breadcrumb.scss";

export default class breadcrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <Breadcrumb separator=">">
                <Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
                <Breadcrumb.Item href={this.props.secondHref}>{this.props.secondSize}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.threeHref}</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}