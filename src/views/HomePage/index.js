import React, { Component } from 'react'
import './homePage.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import '../../utils/fonts/iconfont.css'
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
            
                <div className="listOne">
                   
                    <dl>
                        <dt><img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt="" /></dt>
                        <dd>居家</dd>
                    </dl>
                    <dl>
                        <dt><img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt="" /></dt>
                        <dd>居家</dd>
                    </dl>
                    <dl>
                        <dt><img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt="" /></dt>
                        <dd>居家</dd>
                    </dl>
                    <dl>
                        <dt><img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt="" /></dt>
                        <dd>居家</dd>
                    </dl>
                    <dl>
                        <dt><img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt="" /></dt>
                        <dd>居家</dd>
                    </dl>
                </div>
               <div className="syimgtitle">
                <span>品牌制造商直供</span>
                <div className="syyouhui">
                  
                    <dl>
                        <dt>新人专享礼包</dt>
                        <dd><img src="http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt=""/></dd>
                    </dl>
                    <dl>
                        <dt>新人专享礼包</dt>
                        <dd><img src="http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt=""/></dd>
                    </dl>
                    <dl>
                        <dt>新人专享礼包</dt>
                        <dd><img src="http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt=""/></dd>
                    </dl>
                    <dl>
                        <dt>新人专享礼包</dt>
                        <dd><img src="http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt=""/></dd>
                    </dl>
                    </div>
           
               </div>
               <div className="syimgtitles">
                <span>新品首发</span>
                <div className="sytuwen">
                <dl>
                        <dt><img src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt=""/></dt>
                        <dd>蔓越莓曲奇200克</dd>
                            <b>￥36元</b>
                    </dl>
                    <dl>
                        <dt><img src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt=""/></dt>
                        <dd>蔓越莓曲奇200克</dd>
                        <b>￥36元</b>
                    </dl>
                    <dl>
                        <dt><img src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt=""/></dt>
                        <dd>蔓越莓曲奇200克</dd>
                        <b>￥36元</b>
                    </dl>
                    <dl>
                        <dt><img src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt=""/></dt>
                        <dd>蔓越莓曲奇200克</dd>
                        <b>￥36元</b>
                    </dl>
                    </div>
           
               </div>
               <div>
                   <div className="syrenqi">
                <div className="sytop">
                <span>人气推荐</span>
                </div>
                <div className="syboxs">
                <div className="syshuang">
                <div className="sy_left">
                <img src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt=""/>
                </div>
                <div className="sy_right">
                <p>双攻揉面蚕丝被 空调被</p>
                <p>以及桑蚕丝</p>
                <p>￥699</p>
                </div>
                </div>
                <div className="syshuang">
                <div className="sy_left">
                <img src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt=""/>
                </div>
                <div className="sy_right">
                <p>双攻揉面蚕丝被 空调被</p>
                <p>以及桑蚕丝</p>
                <p>￥699</p>
                </div>
                </div>
                <div className="syshuang">
                <div className="sy_left">
                <img src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt=""/>
                </div>
                <div className="sy_right">
                <p>双攻揉面蚕丝被 空调被</p>
                <p>以及桑蚕丝</p>
                <p>￥699</p>
                </div>
                </div>
                </div>
                   </div>
               </div>
               <div className="phones">
               <div className="sytop">
                <span>专题精选</span>
                </div>
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

               <div className='syrishi'>
               <div className="sytops">
                <span>居家</span>
                </div>
               <div className="sy_xiangzi">
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>  <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                 
                </dl>
                
               </div>
               </div>
               
               <div className='syrishi'>
               <div className="sytops">
                <span>餐厨</span>
                </div>
               <div className="sy_xiangzi">
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
                <dl>
                    <dt><img src="https://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png" alt=""/></dt>
                    <dd>日式和风懒人沙发</dd>
                    <p>￥599</p>
                </dl>
               </div>
               </div>
            </div>
        );
    }
}

export default HomePage;