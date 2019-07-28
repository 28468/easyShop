import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../../utils/fonts/iconfont.css'
import './index.scss'
import BScroll from 'better-scroll'
import { inject, observer } from 'mobx-react';

@inject('classify')
@observer
class ClassifyList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    goDetail = (id, item) => {
        console.log(id,item)
        // this.props.history.push({ pathname: `/classifylist/${id}`, params: item })
    }
    componentDidMount() {
        this.props.classify.getClassifyList(this.props.location.params.id)
        new BScroll(".list-scroll", {
            scrolly: true,
            probeType: 2,
            click: true
        })
    }
    render() {
        return (
            <div className='wrap'>
                <div className="list-header">
                    <Link to='/classify' tag='i' className="iconfont icon-xiangzuo"> </Link>
                    <p>奇趣分类</p>
                    <span></span>
                </div>
                <div className="list-scroll">
                    <div>
                        {
                            this.props.classify.titleList && this.props.classify.titleList.map((item, index) => {
                                return <span key={item.id} className={item.checked ? 'active' : null} onClick={() => this.props.classify.addListClass(item)}>{item.name}</span>
                            })
                        }
                    </div>
                </div>
                <div className="list-main">
                    <div className="list-main-top">
                        <div>{this.props.location.params.name}</div>
                        <div>{this.props.location.params.front_name}</div>
                    </div>
                    <div className="list-main-con">
                        {
                            this.props.classify.conList && this.props.classify.conList.map((item, index) => {
                                return <div className="list-main-list" key={item.id}  onClick={() => this.goDetail(item.id, item)}>
                                            <img src={item.list_pic_url} alt="" />
                                            <p>{item.name}</p>
                                            <span>￥{item.retail_price}</span>
                                       </div>
                            })
                        }



                    </div>
                </div>
            </div>
        );
    }

}

export default ClassifyList;