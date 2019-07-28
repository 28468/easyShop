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
        this.state = {
            name:'',
            front_name:''
        };
    }
    goDetail = (id) => {
        console.log(id)
         this.props.history.push({ pathname: `/listDetail/${id}`})
    }
    componentDidMount() {
       const id =  window.localStorage.getItem('itemId')
       this.setState({
           name:window.localStorage.getItem('name'),
           front_name:window.localStorage.getItem('front_name')
       })
        this.props.classify.getClassifyList(id)
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
                        <div>{this.state.name}</div>
                        <div>{this.state.front_name}</div>
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