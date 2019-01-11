/** 下拉菜单 **/
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Radio } from 'antd';
import "./radio.scss";

const RadioGroup = Radio.Group;

export default class radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioList: [
                {label: 'aa', value: 1},
                {label: 'bb', value: 2},
                {label: 'cc', value: 3},
                {label: 'dd', value: 1},
                {label: 'ee', value: 2},
                {label: 'ff', value: 1},
            ],
            value: 1
        };
    }

    onChange = (e) => {
        console.log('radio1 checked', e.target.value);
        this.setState({
            value1: e.target.value,
        });
    }

    onChange1 = (e) => {
        console.log('radio1 checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {
                    this.state.radioList.map((item, index) => {
                        return (
                            <RadioGroup onChange={this.onChange} value={item.value} key={index} >
                                <Radio value={1}>Option A</Radio>
                                <Radio value={2}>Option B</Radio>
                                <Radio value={3}>Option C</Radio>
                            </RadioGroup>
                        )
                    })
                }   
                <br />    <br />    <br />    
                <RadioGroup onChange={this.onChange1} value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>    
                <br />    <br />    <br />         
            </div>
        ); 
    }
}