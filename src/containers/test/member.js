import React from 'react';
import Button from '../../component/button/button';
import CountDown from '../../component/countDown/countDown';
import VCode from '../../component/vCode/vCode';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 60,
            stop: true,
            disabled: '',
            text: '立即获取'
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
                <CountDown habdelGetCode={this.habdelGetCode} stop={this.state.stop} text={this.state.text} count={this.state.count} disabled={this.state.disabled} getCode='getCode' />
                <VCode />
             </div>
        );
    }
}