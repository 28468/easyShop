
import React from 'react';
import "./index.scss"
import { inject, observer } from "mobx-react"
import yesChecked from "../../img/isCheck.png"
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
    goDetail=(id)=>{
        console.log(id)
        this.props.history.push({ pathname: `/listDetail/${id}`})
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
                            return <div className="shopCar_item" key={item.id}  >
                                        <div className="shopCar_item_isChecked"
                                            onClick={() => { this.props.car.itemImg(index) }}>
                                            <img src={item.checked ? yesChecked : noChecked} alt="" />
                                        </div>
                                        <div className="shopCar_item_img" onClick={() => this.goDetail(item.goods_id)}>
                                            <img src={item.list_pic_url} alt="" />
                                        </div>
                                        <div className="shopCar_item_msg" onClick={() => this.goDetail(item.goods_id)}>
                                           
                                            {
                                           this.props.car.flags===false?(
                                            <div>{item.goods_name}</div>
                                             ):(<div>已选择</div>)
                                            }
                                            <div className="shopCar_item_price">￥{item.market_price}</div>
                                        </div>
                                        {
                                           this.props.car.flags===false?(
                                            <div className='shopCar_num'>x{item.number}</div>
                                             ):(null)
                                            }

                                        
                                       {
                                           this.props.car.flags?(
                                            <div className="car-nums" >
                                            <div><span >
                                            -</span><p>{item.number}</p>
                                            <span>
                                            +</span></div>
                                         </div>
                                           ):(null)
                                       }
                                    </div>
                        })
                    }    
                </div>
            </div>
            <div className="shopCar_do">
                <div className="shopCar_item_isChecked" onClick={() => this.props.car.allImg()}>
                    <img src={this.props.car.allFlag ? yesChecked : noChecked} alt="" />
                </div>
                <div className="shopCar_allMsg">
                    已选({this.props.car.shopList.cartTotal && this.props.car.shopList.cartTotal.goodsCount}) ￥{this.props.car.shopList.cartTotal && this.props.car.shopList.cartTotal.goodsAmount}
                </div>
                <div className="shopCar_edit" onClick={() => this.props.car.bianji()}>
                    {this.props.car.flags?( <p>完成</p>  ):(<p>编辑</p> )}
                </div>
                
                <div className="shopCar_edit shopCar_pay" onClick={() => this.props.car.delete()}>
                {this.props.car.flags?( <p>删除所选</p>  ):(<p>下单</p> )}
                </div>
            </div>
        </div>
    }
}

export default ShopCar;