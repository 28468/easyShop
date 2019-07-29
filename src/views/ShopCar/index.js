// import React, { Component } from 'react';
// import './index.scss'
// class ShopCar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     render() {
//         return (
//             <div className='wrap'>
//                 <div className="car-header">

//                 </div>
//                 <div className="car-con">

//                 </div>
//                 <div className="car-bottom"></div>

//             </div>
//         );
//     }
// }
// export default ShopCar;


import React from 'react';
import "./index.scss"
import { inject, observer } from "mobx-react"
import isChecked from "../../img/isCheck.png"
import noChecked from "../../img/noCheck.png"
// @inject('shopCar')
// @observer
class ShopCar extends React.Component {
    constructor() {
        super()
        this.state = {
            allChecked: false,
        }
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    render() {
        return <div className="shopCar">
            <div className="shopCar_header">
                <span><b>★</b>30天无忧退货</span>
                <span><b>★</b>48小时快递退款</span>
                <span><b>★</b>满88元包邮</span>
            </div>
            <div className="shopCar_main">
                <div className="shopCar_carWrap">
                    {
                        <div className="shopCar_item" >
                            <div className="shopCar_item_isChecked">
                                <img src={noChecked} alt="" />
                            </div>
                            <div className="shopCar_item_img">
                                <img src='' alt="" />
                            </div>
                            <div className="shopCar_item_msg">
                                <div>简约知性系列居家地毯 蓝粉拼接</div>

                                <div className="shopCar_item_price">￥：555</div>
                            </div>
                            <div className='shopCar_num'>x5</div>


                        </div>
                    }
                </div>
            </div>
            <div className="shopCar_do">
                <div className="shopCar_item_isChecked">
                    <img src={noChecked} alt="" />
                </div>
                <div className="shopCar_allMsg">
                    已选(1) ￥24
                </div>
                <div className="shopCar_edit">编辑</div>
                <div className="shopCar_edit shopCar_pay">下单</div>
            </div>
        </div>
    }
}

export default ShopCar;