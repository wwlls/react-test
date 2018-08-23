import React from 'react';
import Input from '../../component/input/input';
import Button from '../../component/button/button';
import CountDown from '../../component/countDown/countDown';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'',
        };
    }

    handleOne() {
        alert(1)
        clearInterval(this.timer)
    }

    handleTwo() {
        alert(2)
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page page-Member">
                <p>member页面</p>
                <Input type="password" />
                <Input type="date" />
                <Button handleSame={this.handleOne.bind(this)} text="11" />
                <Button handleSame={this.handleTwo.bind(this)} text="22" />
                <CountDown />
             </div>
        );
    }
}