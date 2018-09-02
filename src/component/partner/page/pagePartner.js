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
        let partnerCarousel = this.refs.partnerCarousel;
        partnerCarousel.next()
    }

    prev() {
        let partnerCarousel = this.refs.partnerCarousel;
        partnerCarousel.prev()
    }

    render() {
        return (   
            <div className="pagePartner">   
                <span className="leftIcon pagePartnerIcon" onClick={this.prev.bind(this)}></span>
                <span className="rightIcon pagePartnerIcon" onClick={this.next.bind(this)}></span>          
                <div className="pagePartnerBanner">
                    <ul className="pagePartnerUl clear">
                        <li className="floatL">
                            <Carousel autoplay ref="partnerCarousel">
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
            </div>
        );
    }
}