import React from "react";
import { Tabs } from 'antd';
import "./tabs.scss";

export default class page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div className="tabs">
                <Tabs activeKey={this.props.id} onChange={this.props.callback}>
                    {
                        this.props.panes.map(function (item) {
                                return (
                                    <TabPane tab={item.title} key={item.key}>{item.content}</TabPane>
                                )
                            })
                    }
                </Tabs>
            </div>
        );
    }
}