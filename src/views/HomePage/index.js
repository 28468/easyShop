import React, { Component } from 'react'
import './homePage.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        new Swiper(".banner", {
            autoplay: true,
            loop: true
        });
    }
    render() {
        return (
            <div className="wrap">
                <div className="header">
                    <div className="top">
                        <span><img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="" /></span>
                        <span><input type="text" placeholder="搜索商品，总21615件商品" /></span>
                        <span className="btn">登录</span>
                    </div>
                    <div className="title">
                        <div className="left">
                            <ul>
                                <li>推荐</li>
                                <li>居家生活</li>
                                <li>服饰鞋包</li>
                                <li>美食酒水</li>
                                <li>个护清洁</li>
                            </ul>
                        </div>
                        <div className="right">
                            <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="phone">
                    <div className="swiper-container banner">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="https://yanxuan.nosdn.127.net/0b6674a2710f2ffcc63ad16a1bc2c0c7.jpg?imageView&quality=75&thumbnail=750x0" alt="" />
                            </div><div className="swiper-slide">
                                <img src="https://yanxuan.nosdn.127.net/51a6e81d95eb24b75f5eb7a435ce28e2.jpg?imageView&quality=75&thumbnail=750x0" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="titles">
                    <ul>
                        <li><img className="imgs" src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="" />
                            <span>网易自营品牌</span>
                        </li>
                        <li><img className="imgs" src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="" />
                            <span>30天无忧退货</span>
                        </li>
                        <li><img className="imgs" src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="" />
                            <span >48小时极速退款</span>
                        </li>
                    </ul>

                </div>
                <div className="listOne">
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                    <dl>
                        <dt><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" /></dt>
                        <dd>新品首发</dd>
                    </dl>
                </div>
                <div className="imgss">
                    <img src="https://yanxuan.nosdn.127.net/20d820081b08857c9da8417160cc79a3.gif" alt="" />
                </div>
            </div>
        );
    }
}

export default HomePage;