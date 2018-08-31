import React from "react";

export default class pagePartner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval:100,
            autoPlay:true,
            defaultActiveIndex:0,
            direction:'right',
            boxWidth: '',
            outerWidth: '220',
        };
    }

    playRight(indexIn) {
        let childrenLength  = this.props.children.length;
        let outerWidth = this.state.outerWidth;
        this.setState({
            boxWidth: outerWidth * childrenLength + 'px',
            thisWidth: '-' + outerWidth * indexIn + 'px',
        })
        this.setState({
            defaultActiveIndex: indexIn
        })
    }
    playLeft(indexIn) {
        console.log(indexIn)
        let childrenLength  = this.props.children.length;
        console.log(childrenLength)
        let outerWidth = this.state.outerWidth;
        console.log(outerWidth)
        this.setState({
            boxWidth: outerWidth * childrenLength + 'px',
            thisWidth: '-' + outerWidth * indexIn + 'px',
        })
        this.setState({
            defaultActiveIndex: indexIn
        })
    }

    // autoPlay(){
    //     if(this.state.autoPlay){
    //         let oldIndex = this.state.defaultActiveIndex;
    //         alert(oldIndex)
    //         if(this.state.direction === "right"){
    //             this.timeOuter = setInterval(this.playRight(oldIndex+1),100);
    //         }else if(this.state.direction === "left"){
    //             this.timeOuter = setInterval(this.playLeft(oldIndex-1),this.state.interval);
    //         }
    //     }
    // }

    componentDidMount() {
        let oldIndex = this.state.defaultActiveIndex;
            if(this.state.direction === "right"){
                this.timeOuter = setInterval(this.playRight(oldIndex+1),this.state.interval);
            }else if(this.state.direction === "left"){
                this.timeOuter = setInterval(this.playLeft(oldIndex-1),this.state.interval);
            }
    }

    left() {
        clearInterval(this.timeOuter);
        let oldIndex = this.state.defaultActiveIndex;
        this.playLeft(oldIndex-1);
        //this.autoPlay();
    }
    right() {
        clearInterval(this.timeOuter);
        let oldIndex = this.state.defaultActiveIndex;
        console.log(oldIndex)
        this.playRight(oldIndex+1);
        //this.autoPlay();
    }
    
    render() {
        const box = {
            width : this.state.boxWidth,
            marginLeft : this.state.thisWidth,
        }
        return (                
            <div className="pagePartner">
                <span className="leftIcon pagePartnerIcon" onClick={this.left.bind(this)}></span>
                <span className="rightIcon pagePartnerIcon" onClick={this.right.bind(this)}></span>
                <ul className="pagePartnerUl clear" style={box}>
                    {
                        this.props.children.map((item,index) =>{
                            return (
                                <li className="floatL" key={index} style={{width : this.state.outerWidth + 'px'}}>
                                    <div className="pagePartnerDiv">
                                        <img src={item.img} alt="partner" />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}