/** 地图 **/
import React from "react";
import BMap  from 'BMap';
import "./map.scss";

export default class partner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        let map = new BMap.Map("mapContainer"); // 创建Map实例
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point, 16); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.addControl(new BMap.NavigationControl()); // 添加平移缩放控
        map.addControl(new BMap.ScaleControl()); // 添加比例尺控件
        //map.setCurrentCity("杭州"); // 设置地图显示的城市 此项是必须设置的
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint("杭州市滨江区信诚路33号华赢贷总部", function(point){
            if (point) {
                let marker = new BMap.Marker(point);  // 创建标注
                map.centerAndZoom(point, 13);
                map.addOverlay(marker);               // 将标注添加到地图中
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            }else{
                alert("您选择地址没有解析到结果!");
            }
        }, "杭州市");
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }
    
    render() {
        return (
            <div className="mapContainer" id="mapContainer"></div>
        );
    }
}