
import React, { Component } from 'react'
import './homePage.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import '../../utils/fonts/iconfont.css'
import { inject, observer } from 'mobx-react';
@inject('homePage')
@observer
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goto = (item) => {
 
        this.props.history.push({ pathname: `/classifylist/${item.id}`})
    }
    componentDidMount() {
        this.props.homePage.gethomelist()
        new Swiper(".banner", {
            autoplay: true,
            loop: true
        });

    }
    goaddtitle(id) {
        this.props.history.push({ pathname: `/Homedetail/${id}`, params: id })
     
    }
    goaddtitles(id) {
        this.props.history.push({ pathname: `/listDetail/${id}`, params: id })
        
    }
    goaddtitless(id) {
        this.props.history.push({ pathname: `/listDetail/${id}`, params: id })
       
    }
    render() {
        console.log(this.props.homePage.gethomeL)
        return (
            <div className='wrap'>
                <div className="symain">
                    <div className="phone">
                        <div className="swiper-container banner">
                            <div className="swiper-wrapper">
                                {
                                    this.props.homePage.gethomeL.banner && this.props.homePage.gethomeL.banner.map((item, index) => {
                                        return <div className="swiper-slide" key={index}>
                                            <img src={item.image_url} alt="" />
                                        </div>
                                    })
                                }

                            </div>
                        </div>

                    </div>

                    <div className="listOne">
                        {
                            this.props.homePage.gethomeL.channel && this.props.homePage.gethomeL.channel.map((item, index) => {
                                return <dl key={index} onClick={() => this.goto(item)}>
                                    <dt> <img src={item.icon_url} alt="" /></dt>
                                    <dd>{item.name}</dd>
                                </dl>
                            })
                        }


                    </div>
                    <div className="syimgtitle">
                        <span>品牌制造商直供</span>
                        <div className="syyouhui">
                            {
                                this.props.homePage.gethomeL.brandList && this.props.homePage.gethomeL.brandList.map((item, index) => {
                                    return <dl key={index} onClick={() => this.goaddtitle(item.id)}>
                                        <dt>{item.name}</dt>
                                        <dd><img src={item.new_pic_url} alt="" /></dd>
                                    </dl>
                                })
                            }


                        </div>

                    </div>
                    <div className="syimgtitles">
                        <span>新品首发</span>
                        <div className="sytuwen">

                            {
                                this.props.homePage.gethomeL.newGoodsList && this.props.homePage.gethomeL.newGoodsList.map((item, index) => {
                                    return <dl key={index} onClick={() => this.goaddtitles(item.id)}>
                                        <dt><img src={item.list_pic_url} alt="" /></dt>
                                        <dd>{item.name}</dd>
                                        <b>￥36元</b>
                                    </dl>
                                })
                            }
                        </div>

                    </div>
                    <div>
                        <div className="syrenqi">
                            <div className="sytop">
                                <span>人气推荐</span>
                            </div>
                            <div className="syboxs">
                                {
                                    this.props.homePage.gethomeL.hotGoodsList && this.props.homePage.gethomeL.hotGoodsList.map((item, index) => {
                                        return <div className="syshuang" key={index} >
                                            <div className="sy_left">
                                                <img src={item.list_pic_url} alt="" />
                                            </div>
                                            <div className="sy_right" onClick={() => this.goaddtitless(item.id)}>
                                                <p>{item.name}</p>
                                                <p>{item.goods_brief}</p>
                                                <p>￥{item.retail_price}</p>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    <div className="phones">
                        <div className="sytop">
                            <span>专题精选</span>
                        </div>
                        <div className="swiper-container banner">
                            <div className="swiper-wrapper">
                                {
                                    this.props.homePage.gethomeL.topicList && this.props.homePage.gethomeL.topicList.map((item, index) => {
                                        return <div className="swiper-slide" key={index}>
                                            <img src={item.item_pic_url} alt="" />
                                            <p>{item.title}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className='syrishi'>
                        {
                            this.props.homePage.gethomeL.categoryList && this.props.homePage.gethomeL.categoryList.map((item, index) => {
                                return <div className="syboxsizng" key={index}>
                                    <div className="sytops">
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="sy_xiangzi"> 
                                        {
                                            this.props.homePage.gethomeL.topicList && 
                                            this.props.homePage.gethomeL.topicList.map((item, index) => {
                                                return <dl key={index}>
                                                            <dt><img src="https://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" /></dt>
                                                            <dd>日式和风懒人沙发</dd>
                                                            <p>￥599</p>
                                                       </dl>
                                            })
                                        }


                                    </div>
                                </div>
                            })
                        }


                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;  