import React from "react";

export default class partner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval:3000,
              autoPlay:true,
              defaultActiveIndex:0,
              direction:'right'
        };
    }

    getInitialState(){
        return{
          activeIndex:this.props.defaultActiveIndex?this.props.defaultActiveIndex:0,
          direction:this.props.direction?this.props.direction:'right'
        }
      }

    componentDidMount() {
        this.autoPlay();
    }
    
    componentWillUnmount(){
        clearInterval(this.timeOuter);
      }
      autoPlay(){
        if(this.props.autoPlay){
          if(this.props.direction==="right"){
            this.timeOuter=setInterval(this.playRight,this.props.interval);
          }else if(this.props.direction==="left"){
            this.timeOuter=setInterval(this.playLeft,this.props.interval);
          }
        }
      }
      playRight(indexIn){
          let index=indexIn?indexIn:this.state.activeIndex+1;
          console.log(index);
          if(index>this.props.number-1){
            index=0;
          }
          this.setState({
            activeIndex:index
          })
      }
      playLeft(indexIn){
          let index=indexIn?indexIn:this.state.activeIndex-1;
          console.log(index);
          if(index<0){
            index=this.props.number-1;
          }
          this.setState({
            activeIndex:index
          })
      }
      position(){
        switch (this.state.activeIndex){
          case 0:return "onePosition" ;
          case 1:return "twoPosition" ;
          case 2:return "therePosition" ;
          case 3:return "fourPosition";
        }
      }
      left() {
       clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playLeft(oldIndex+1);
        this.autoPlay();
      }
      right(){
        clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playRight(oldIndex-1);
        this.autoPlay();
      }

    render() {
    	let{
            interval,
            autoPlay,
            activeIndex,
            defaultActiveIndex,
            direction,
            number,
            boxStyle
        } = this.props;
        return (                
        	<div  className={boxStyle} >
                <span className="leftIcon" onClick={this.left}>left</span>
                <span className="rightIcon" onClick={this.right}>right</span>
                    <ul className={this.position()}>
                    	{
					        this.props.children.map((item,index) =>{
					            return (
					                <li className="boxStyleLi" key={index}>
					                    <img src={item.img} alt="partner" />
					                </li>
					            )
					        })
					    }

                    </ul>
            </div>
        );
    }
}