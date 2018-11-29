import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getNoticeMessage } from 'actions';
import { Message } from 'antd';
import Tools from 'utils/tools';
import Header from 'component/header/header';
import SubBanner from 'component/subBanner/subBanner'
import Footer from 'component/footer/footer';
import BackTop from 'component/backTop/backTop';
import "./details.scss";

class Details extends React.Component {
    static propTypes = {
        getNoticeMessageData: PropTypes.object.isRequired,
        getNoticeMessage: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            createTime: new Date().getTime(),
        };
    }

    componentDidMount() {
        let data = {}
        data.notice_message_id = this.props.location.search.split('?id=')[1],
        this.props.getNoticeMessage(data).then(() => {
            let { getNoticeMessageData } = this.props;
            if(getNoticeMessageData.rtn_code === 0) {
                let noticeMessage = JSON.parse(getNoticeMessageData.body).noticeMessage;
                this.setState({
                    title: noticeMessage.title,
                    content: noticeMessage.content,
                    createTime: noticeMessage.createTime,
                })
            } else {
                Message.error(getNoticeMessageData.rtn_msg);
            }
        })
    }
    
    render() {
        return (
            <div className="container">
                <Header />
                <SubBanner />
                <div className="page details">
                    <h2 className="textC title">{this.state.title}</h2>
                    <h5>{this.state.content}</h5>
                    <p className="textR name">华赢宝</p>
                    <p className="textR">{Tools.isMoment(this.state.createTime, 1)}</p>
                </div>
                <Footer />
                <BackTop />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getNoticeMessageData: state.getNoticeMessage
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getNoticeMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)