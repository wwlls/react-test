import React from "react";
import { Carousel } from 'antd';

export default class pagePartner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    next() {
        this.onChange(a);
    }

    prev() {
        this.onChange(a);
    }

    onChange(a) {
        console.log(a);
    }

    render() {
        return (                
            <div className="pagePartner">
                <span className="leftIcon pagePartnerIcon" onClick={this.next.bind(this)}></span>
                <span className="rightIcon pagePartnerIcon" onClick={this.prev.bind(this)}></span>
                <ul className="pagePartnerUl clear">
                    <li className="floatL">
                        <Carousel afterChange={this.onChange.bind(this)}>
                            {
                                this.props.children.map((item,index) =>{
                                    return (
                                        <div key={index}>
                                            <div className="pagePartnerDiv" data-key={item.id}>
                                                <img src={item.img} alt="partner" />
                                            </div>
                                        </div>
                                    )
                                })
                            }  
                        </Carousel>
                    </li>
                </ul>
            </div>
        );
    }
}