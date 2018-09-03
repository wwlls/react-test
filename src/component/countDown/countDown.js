/** 60秒倒计时 **/
import React from "react";
import Button from '../../component/button/button';
import "./countDown.scss";


export default class partner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 60,
            stop: true,
            disabled: '',
            size: '点击开始计时'
        };
    }

    handleClick = () => {
        clearInterval(this.timer);
        this.state.stop = false;
        this.timer = setInterval(function() {
            let count = this.state.count;
            this.state.liked = false;
            count -= 1;
            this.setState({
                disabled: 'disabled',
                count: count
            });
            if (count < 1) {
                this.state.stop = true;
                this.setState({
                    liked: true,
                    disabled: '',
                    size: '重发',
                    count: 60
                });
　　　　　　　　clearInterval(this.timer);
            }
        }.bind(this), 1000); 
    };

    componentDidMount() {

    }

    render() {
        let text = this.state.stop ? this.state.size : this.state.count + 's';
        console.log(text)
        return (
            <Button handleSame={this.handleClick} text={text} disabled={this.state.disabled} />
        );
    }
}