
import React from 'react';
import "./index.scss"
import { inject, observer } from "mobx-react"
import isChecked from "../../img/isCheck.png"
import noChecked from "../../img/noCheck.png"
@inject('car')
@observer
class ShopCar extends React.Component {
    constructor() {
        super()
        this.state = {
            allChecked: false,
        }
    }
    componentDidMount() {
        this.props.car.getshopList()
        console.log(this.props.car.shopList)
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
                        this.props.car.shopList.cartList && this.props.car.shopList.cartList.map((item, index) => {
                            return <div className="shopCar_item" key={item.id}>
                                        <div className="shopCar_item_isChecked">
                                            <img src={noChecked} alt="" />
                                        </div>
                                        <div className="shopCar_item_img">
                                            <img src={item.list_pic_url} alt="" />
                                        </div>
                                        <div className="shopCar_item_msg">
                                            <div>{item.goods_name}</div>
                                            <div className="shopCar_item_price">￥{item.market_price}</div>
                                        </div>
                                        <div className='shopCar_num'>x{item.number}</div>
                            </div>
                        })
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