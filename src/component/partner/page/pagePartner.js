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

    render() {
        return (                
            <div className="pagePartner">
                <ul className="pagePartnerUl clear">
                    <li className="floatL">
                        <Carousel dots autoplay>
                            {
                                this.props.children.map((item,index) =>{
                                    return (
                                        <div className="pagePartnerDiv" key={index}>
                                            <img src={item.img} alt="partner" />
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