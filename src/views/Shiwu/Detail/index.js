import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.scss'
@inject('topicList')
@observer
class Deatil extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
        this.props.topicList.gettopdetails(this.props.match.params.id)//获取专题详情


    }
    render() {
        return (
            <div>Deatil</div>
        );
    }
}

export default Deatil;