import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
@inject('topicList')
@observer
class Shiwu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidUpdate() {
      this.props.topicList.gettopiclist()
    }
    
    render() {
        console.log(this.props.topicList.gettopicL)
        return (
            <div className="ztwarp">
            <div className="ztlistone">
                <dl>
                    <dt></dt>
                    <dd></dd>
                </dl>
            </div>
            </div>
        );
    }
}

export default Shiwu;