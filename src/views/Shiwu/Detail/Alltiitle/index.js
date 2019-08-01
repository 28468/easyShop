import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.scss'
@inject('topicList')
@observer
class Alltiitle extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
    
        this.props.topicList.gettopicss()//针对某个标题添加评论

    }
    // goaddtitles() {
    //     this.props.history.push({ pathname: `/ztDetail/`})
    // }
    render() {
        return (
            <div>
 <div className="lytitile">
            <div className="lytop">
            <span onClick={() => this.props.history.go(-1)}  className="icon iconfont icon-xiangzuo"></span>
            <span>查看更多评论</span>
            <span></span>
            </div>
            <div className="lyliuyan">
            {
                        this.props.topicList.gettopics.data && this.props.topicList.gettopics.data.map((item, index) => {
                            return <div className="xxbox" key={index}>
                                <div className="xxliuy">
                                    <div>匿名用户</div>
                                    <div>{item.add_time}</div>
                                </div>
                                <div className="xxpinglun">{item.content}</div>
                            </div>
                        })
                    }
           </div>
            </div>
            </div>
        );
    }
}

export default Alltiitle;