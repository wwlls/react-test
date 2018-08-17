/** 走马灯 **/
import React from "react";
import { Carousel } from 'antd';
import "./carousel.scss";


export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const { carouselList } = this.props
        console.log(carouselList)
        return (
            <div className="carousel">
                <Carousel dots autoplay>
                    {
                        carouselList.map(function (item) {
                            return (
                                <h3 key={item.id}>
                                    <a href={'#/' + item.url}>
                                        <img src={item.img} />
                                    </a>
                                </h3>
                            )
                        })
                    }  
                </Carousel>
            </div>
        );
    }
}