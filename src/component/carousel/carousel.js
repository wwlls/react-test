/** 走马灯 **/
import React from "react";
import { Carousel } from 'antd';
import download from "static/images/common/app.png";
import "./carousel.scss";


export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        const { carouselList } = this.props;
        return (
            <div className={"carousel " + this.props.carousel}>
                <Carousel dots autoplay>
                    {
                        carouselList.map((item) => {
                            return (
                                <h3 key={item.id}>
                                    <a href={'#/' + item.url}>
                                        <img src={item.img} alt="banner" />
                                    </a>
                                </h3>
                            )
                        })
                    }  
                </Carousel>
                <div className="banner layout" style={{display:this.props.open}}>
                    <div className="subBanner textC">
                        <p className="one">借贷双方约定利率</p>
                        <p className="two">8.5%-12.0%</p>
                        <p className="three"><img src={download} alt="banner图扫码" /></p>
                        <p className="four">扫码下载APP 舒心出借稳收益</p>   
                    </div>
                </div>
            </div>
        );
    }
}