import { observable, action } from "mobx";
import {getShopCar,delshopCar} from '../../servicer';
export default class Car{
    @observable shopList = ""; 
   
    @observable allFlag = true //控制所有图片选择的开关
    @observable flags = false//控制编辑 完成 删除 下单 加加减减显示
    @action async getshopList() {
        const data = await getShopCar(); 
       this.shopList = data.data
       this.shopList.cartList.forEach((item)=>{
        item.checked = 1
      })
       console.log(data)
     }
       
     @action allImg() {//如果点击全选的时 allFlag 是true时  让所有checked为1  反之  为0
      this.allFlag = !this.allFlag;
      if(this.allFlag){
        this.shopList.cartList.forEach((item)=>{
          item.checked = 1
        })
      }else{
        this.shopList.cartList.forEach((item)=>{
          item.checked = 0
        })
      }
     }
     @action itemImg(index){//如果点击项的checked为1 点击变为0 反之  点击为1
      if(this.shopList.cartList[index].checked ){
        this.shopList.cartList[index].checked  = 0
        
      }else{
        this.shopList.cartList[index].checked  = 1
      }
      this.allFlag = this.shopList.cartList.every((item)=>{  //如果所有item.checked都为1 让 全选为true
        return item.checked ===1
      })
    
     }
     @action async bianji(){

      this.flags = !this.flags;//控制编辑 完成 删除 下单 加加减减显示
      this.shopList.cartList.forEach((item)=>{//让所有checked为0 变为未选中
        item.checked = 0
      })
      
      
      if(!this.flags){
      
        const datas = await getShopCar(); 
        this.shopList = datas.data
        console.log(datas)
      }
     
     }

    
     @action async delete() {
      let ids = [];
      this.shopList.cartList.forEach((item)=>{
        if(item.checked ===1){
         ids.push(item.product_id)
        }
       })
      if(this.flags){
        const data = await delshopCar({productIds:ids.join(',')}); 
        console.log(data)
        this.shopList = data.data
      }
   }



     //加
     @action addsNum(item) {
      item.number++
     }
    //减
     @action delsNum(item) {
      item.number--
      if (item.number < 1) {
          item.number = 1
      }
  }
       

    
}