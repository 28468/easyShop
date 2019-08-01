import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../../utils/fonts/iconfont.css'
import './index.scss'
import { inject, observer } from 'mobx-react';

@inject('search')
@observer
class ClassifySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            flag: true
        };
    }
    changeValue(e) {
        console.log(e.target.value)

        this.setState({
            flag: false,
            title: e.target.value
        })
    }
    componentDidMount(){
        this.props.search.getSearchs()
    }
    render() {
        return (
            <div className='wrap'>
                <div className="search-header">
                    <Link to='/classify' tag='i' className="iconfont icon-xiangzuo"> </Link>
                    <div>
                        <i className='iconfont icon-fangdajing'></i>
                        <input type="text" placeholder='520元礼包抢先领' value={this.state.title} onChange={this.changeValue.bind(this)} />
                    </div>
                    <p>取消</p>
                </div>
                {
                    this.state.flag ? (<div className="search-main-top">
                        <div className='del'><p>历史记录</p> <i className='iconfont icon-lajitong'></i></div>
                        <div className="jilu">
                            {
                                this.props.search.historyKeywordList && this.props.search.historyKeywordList.map((item,index)=>{
                                    return <p key={index}>{item}</p>
                                })
                            }

                            
                        </div>
                    </div>) : (null)
                }
                {
                    this.state.flag ? (<div className="search-main-con">
                        <div className='del'><p>热门搜索</p></div>
                        <div className="jilu">
                            <p className='red'>母亲节</p>
                            {
                                this.props.search.hotKeywordList && this.props.search.hotKeywordList.map((item,index)=>{
                                    return <p key={index}>{item.keyword}</p>
                                })
                            }
                        </div>
                    </div>) : (null)
                }

                {/* <div className="search-sort">
                    <p>综合</p>
                    <p>价格</p>
                    <p>全部分类</p>
                </div>
                <div className="search-list">
                    <div className="item"  >
                        <img src='http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png' alt="" />
                        <p>这是一个大面包</p>
                        <span>￥559</span>
                    </div>
                    <div className="item"  >
                        <img src='http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png' alt="" />
                        <p>这是一个大面包</p>
                        <span>￥559</span>
                    </div>
                    <div className="item"  >
                        <img src='http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png' alt="" />
                        <p>这是一个大面包</p>
                        <span>￥559</span>
                    </div>
                    <div className="item"  >
                        <img src='http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png' alt="" />
                        <p>这是一个大面包</p>
                        <span>￥559</span>
                    </div>  <div className="item"  >
                        <img src='http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png' alt="" />
                        <p>这是一个大面包</p>
                        <span>￥559</span>
                    </div>  <div className="item"  >
                        <img src='http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png' alt="" />
                        <p>这是一个大面包</p>
                        <span>￥559</span>
                    </div>
                    <div className="item"  >
                        <img src='http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png' alt="" />
                        <p>这是一个大面包</p>
                        <span>￥559</span>
                    </div>
                </div> */}

            </div>
        );
    }
}

export default ClassifySearch;