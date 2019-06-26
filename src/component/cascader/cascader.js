/** 回到顶部 **/
import React from "react";
import { Cascader, Button } from 'antd';
import CascaderData from './cascaderData';
import  './cascader.scss';

export default class cascader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addressOptions: CascaderData,
            defaultValue: []
        };
    }

    componentDidMount() {

	}
	handleCascader = () =>{
		console.log(this.state.defaultValue)
	} 
    onChange = (value) => {
    	console.log(value)
    	this.setState({
    		defaultValue: value
    	})
    }

    render() {
        return (
            <div className="cascader">
               	<Cascader options={this.state.addressOptions} placeholder="请选择省市区" value={this.state.defaultValue} onChange={this.onChange} />
               	<Button onClick={() => this.handleCascader()}>选择</Button>
            </div>
        );
    }
}