/** 锚点 **/
import React from "react";
import { Anchor } from 'antd';
import "./anchor.scss";
const { Link } = Anchor;

export default class anchor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="Anchor">
                <Anchor>
                    <Link href="#components-anchor-demo-basic" title="Basic demo" />
                    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                    <Link href="#API" title="API">
                        <Link href="#Anchor-Props" title="Anchor Props" />
                        <Link href="#Link-Props" title="Link Props" />
                    </Link>
                </Anchor>
            </div>
        );
    }
}