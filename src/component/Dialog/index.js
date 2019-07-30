import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {  Toast,Button } from 'antd-mobile';
import './index.scss'
@inject('classify')
@observer
class ShopCar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  successToast=()=> {
      if( this.props.classify.code===0){
        Toast.success('添加成功');
      }else{
        Toast.success('添加失败');
      }
     
        
      }
      
    componentDidMount() {
        console.log(this.props.props)
        console.log(this.props.classify.DialogFalg)
this.props.classify.totalNum()
    }
    render() {
        return (
            <div className='dialog-wrap'>
                <div className="dialog-top">
                    <div className="imgs">
                    {
                            this.props.props.gallery.length!==0 ?
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
                    <div><span onClick={() =>this.props.classify.delNum()}>-</span><p>{this.props.classify.num}</p><span onClick={()=>this.props.classify.addNum()}>+</span></div>
                </div>
                <div className="dialog-foot">
                    <p onClick={() =>this.props.classify.addcar(this.props.props.info.id+"",this.props.classify.num,this.props.props.productList[0].id)}>
                    <Button onClick={()=>this.successToast()}>加入购物车</Button></p>
                    <p>立即下单</p>
                </div>
            </div>

        );
    }
}
export default ShopCar;