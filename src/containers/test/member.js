import React from 'react';
import Button from '../../component/button/button';
import CountDown from '../../component/countDown/countDown';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'',
        };
    }

    handleOne = () => {
        alert(1)
        clearInterval(this.timer)
    }

    handleTwo = () => {
        alert(2)
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page page-Member">
                <p>member页面</p>
                <Button handleSame={this.handleOne} text="11" />
                <Button handleSame={this.handleTwo} text="22" />
                <CountDown />
             </div>
        );
    }
}