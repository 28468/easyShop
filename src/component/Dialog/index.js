import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.scss'
@inject('classify')
@observer
class ShopCar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props.props)
        console.log(this.props.classify.DialogFalg)

    }
    render() {
        return (

            <div className='dialog-wrap'>
                <div className="dialog-top">
                    <div className="imgs">
                    {
                            this.props.props.gallery.length!=0 ?
                                ( <img src={this.props.props.gallery[0].img_url} alt=""/>) : (null)
                        }
                    </div>
               
                    <div className='top-title'>
                        <p>单价：<span>￥</span><span>{this.props.props.info.retail_price}</span></p>
                        <p>库存：<span>{this.props.props.info.goods_number}</span><span>件</span></p>
                        <p>已选择：</p>
                    </div>
                    <span className='dialog-del' onClick={() =>  this.props.classify.closeDialog()}>x</span>
                </div>
                <div className="dialog-nums">
                    <div><span>-</span><p>0</p><span>+</span></div>
                </div>
                <div className="dialog-foot">
                    <p>加入购物车</p>
                    <p>立即下单</p>
                </div>
            </div>

        );
    }
}
export default ShopCar;