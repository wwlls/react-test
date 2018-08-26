/** 合作单位 **/
import React from "react";
import PagePartner from './page/pagePartner';
import partnerIcon from "../../static/images/home/partnerIcon.png";
import imgpartner1 from "../../static/images/common/partner/partner1.png";
import imgpartner2 from "../../static/images/common/partner/partner2.png";
import imgpartner3 from "../../static/images/common/partner/partner3.png";
import imgpartner4 from "../../static/images/common/partner/partner4.png";
import imgpartner5 from "../../static/images/common/partner/partner5.png";
import imgpartner6 from "../../static/images/common/partner/partner6.png";
import imgpartner7 from "../../static/images/common/partner/partner7.png";
import "./partner.scss";


export default class partner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: [
                {img : imgpartner1 , id : 0 , url: ''}, 
                {img : imgpartner2 , id : 1 , url: ''},
                {img : imgpartner3 , id : 2 , url: ''},
                {img : imgpartner4 , id : 3 , url: ''},
                {img : imgpartner5 , id : 4 , url: ''},
                {img : imgpartner6 , id : 5 , url: ''},
                {img : imgpartner7 , id : 6 , url: ''}
            ],
        };
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="partner layout">
               	<h5><img src={partnerIcon} alt="合作单位" />合作单位</h5>
               <PagePartner children={this.state.children} interval={100} number={4} boxStyle="pagePartner" interval={4000} />
            </div>
        );
    }
}