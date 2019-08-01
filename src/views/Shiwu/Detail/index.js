import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.scss'
@inject('topicList')
@observer
class Deatil extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.topicList.gettopdetails(this.props.match.params.id)//获取专题详情
        this.props.topicList.getcommentlists()////根据专题ID或者商品ID获取评论获取相关专题

    }
    goaddtitle() {
        this.props.history.push({ pathname: `/Addpltitles/` })
    }
    goaddtitles() {
        this.props.history.push({ pathname: `/subject/` })
    }
    goaddtitless() {
        this.props.history.push({ pathname: `/Alltiitle/` })
    }
    render() {
        /* console.log(this.props.topicList.gettopdetail) */
        console.log(this.props.topicList.getcomment)
        return (
            <div className="xxwrap">
                <div className="xxtop">
                <span onClick={() => this.goaddtitles()}  className="icon iconfont icon-xiangzuo"></span>
                    <span>{this.props.topicList.gettopdetail.title}</span>
                    <span></span>
                </div>
                <div className="xximgs">
                    <img src="http://yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg" alt="" />
                    {/*  <img src="http://yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg" alt=""/> */}
                    <img src="http://yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg" alt="" />
                    <img src="http://yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg" alt="" />
                    <img src="http://yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg" alt="" />
                    <img src="http://yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg" alt="" />
                    <img src={this.props.topicList.gettopdetail.content} alt="" />
                </div>

                <div className="xxcontent">

                    <div className="xxjing">
                        <span>精选留言</span>
                        <span onClick={() => this.goaddtitle()} className="icon iconfont icon-faxiandingdan"></span>
                    </div>
                    {
                        this.props.topicList.getcomment.data && this.props.topicList.getcomment.data.map((item, index) => {
                            return <div className="xxbox" key={index}>
                                <div className="xxliuy">
                                    <div>匿名用户</div>
                                    <div>{item.add_time}</div>
                                </div>
                                <div className="xxpinglun">{item.content}</div>
                            </div>
                        })
                    }

                    <p onClick={() => this.goaddtitless()} >查看更多评论</p>
                    <p className="xxps">推荐专题</p>
                </div>

                <div className="xxbotton">
                    {
                        this.props.topicList.gettoprelateds && this.props.topicList.gettoprelateds.map((item, index) => {
                            return <dl key={index}>
                                <dt><img src={item.scene_pic_url} alt="" /></dt>
                                <dd>{item.title}</dd>

                            </dl>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Deatil;