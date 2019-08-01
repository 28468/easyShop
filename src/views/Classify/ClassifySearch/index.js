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
            flag: true,
            flags: false
        };
    }
    changeValue(e) {
        console.log(e.target.value)

        this.setState({
            flag: false,
            title: e.target.value
        })
    }
    goTo = (keyword) => {
        console.log(keyword)
        let params = {
            keyword: keyword,
            page: 1,
            size: 100,
            sort: 'id',
            order: 'desc',
            categoryId: 0
        }
        this.props.search.getList(params)
        this.setState({
            flag: false,
        })
        this.setState({
            flags: true,
        })
    }
    componentDidMount() {
        this.props.search.getSearchs()
    }
    goDetail = (id) => {
        console.log(id)
         this.props.history.push({ pathname: `/listDetail/${id}`})
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
                                this.props.search.historyKeywordList && this.props.search.historyKeywordList.map((item, index) => {
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
                                this.props.search.hotKeywordList && this.props.search.hotKeywordList.map((item, index) => {
                                    return <p key={index} onClick={() => this.goTo(item.keyword)}>{item.keyword}</p>
                                })
                            }
                        </div>
                    </div>) : (null)
                }

                {
                    this.state.flags ? (

                        <div className='a'>
                            <div className="search-sort">
                                <p>综合</p>
                                <p onClick={()=>this.props.search.sort()}>价格</p>
                                <p>全部分类</p>
                            </div>
                            <div className="search-list">
                                {
                                    this.props.search.SearchList && this.props.search.SearchList.map((item) => {
                                        return <div className="item" key={item.id} onClick={() => this.goDetail(item.id)}>
                                                    <img src={item.list_pic_url} alt="" />
                                                    <p>{item.name}</p>
                                                    <span>￥{item.retail_price}</span>
                                               </div>


                                    })
                                }
                            </div>
                        </div>
                    ) : (null)
                }


            </div>
        );
    }
}

export default ClassifySearch;