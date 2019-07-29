import React, { Component } from 'react';
import './index.scss'
import '../../../../utils/fonts/iconfont.css'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { inject, observer } from 'mobx-react';
import Dialog from '../../../../component/Dialog'
@inject('classify')
@observer
class ListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DialogFalg:false
        };
    }
  
    goBack = () => {
        this.props.history.push({ pathname: `/classifylist/${window.localStorage.getItem('itemId')}` })
    }
    componentDidMount() {
        console.log()
        this.props.classify.getDetailList(this.props.match.params.id)
        new Swiper(".banner", {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            }
        });
    }
    render() {
        return (
            <div className='wrap'>
                <div className="xq-header">
                    <i className="iconfont icon-xiangzuo" onClick={() => this.goBack()}></i>
                    {
                        this.props.classify.detailList ?
                            (<p>{this.props.classify.detailList.info.name}</p>) : (null)
                    }

                    <span></span>
                </div>
                <div className="xq-main">
                    <div className="swiper-container banner">
                        <div className="swiper-wrapper">
                            {
                                this.props.classify.detailList && this.props.classify.detailList.gallery.map((item, index) => {
                                    return <div className="swiper-slide" key={item.id}>
                                        <img src={item.img_url} alt="" />
                                    </div>
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                    <div className="xq-main-box">
                        <p>30天无忧退货</p>
                        <p>48小时快速退款</p>
                        <p>满88元免邮费</p>
                    </div>
                    <div className="xq-main-title">
                        {
                            this.props.classify.detailList ?
                                (<h3>{this.props.classify.detailList.info.name}</h3>) : (null)
                        }
                        {
                            this.props.classify.detailList ?
                                (<p>{this.props.classify.detailList.info.goods_brief}</p>) : (null)
                        }
                        {
                            this.props.classify.detailList ?
                                (<span>￥{this.props.classify.detailList.info.retail_price}</span>) : (null)
                        }
                    </div>
                    <div className="xq-main-goodSize"  onClick={() =>  this.props.classify.showDialog()}>
                        <p className='gooodSize-num'>x <span>{this.props.classify.num}</span></p>
                        <p >选择规则 &nbsp;></p>
                    </div>


                </div>
                <div className="xq-footer">
                    <p>
                        <i className='iconfont icon-weixuanzhong-01'></i>
                    </p>
                    <p>

                        <i className='iconfont icon-gouwuche'></i>
                    </p>

                    <p className='gocar' onClick={() =>  this.props.classify.showDialog()}>加入购物车</p>
                    <p className='gobuy'>立即购买</p>
                </div>
                {
                    this.props.classify.DialogFalg ?(
                        <Dialog props={this.props.classify.detailList}></Dialog>
                    ):(null)
                }
               

            </div>
        );
    }
}

export default ListDetail;