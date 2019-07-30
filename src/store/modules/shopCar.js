import { observable, action } from "mobx";
import {getShopCar} from '../../servicer';
export default class Car{
    @observable shopList = ""; 
   
    @observable allFalg = false //控制所有图片选择的开关
    @action async getshopList() {
        const data = await getShopCar(); 
       this.shopList = data.data
       this.shopList.cartList.forEach((item)=>{
        item.checked = 0
      })
       console.log(data.data)
     }
       
     @action allImg() {
      this.allFalg = !this.allFalg;
      if(this.allFalg){
        this.shopList.cartList.forEach((item)=>{
          item.checked = 1
        })
      }else{
        this.shopList.cartList.forEach((item)=>{
          item.checked = 0
        })
      }
     }
     @action itemImg(index){
      if(this.shopList.cartList[index].checked ){
        this.shopList.cartList[index].checked  = 0
      }else{
        this.shopList.cartList[index].checked  = 1
      }
    
     }

       

    
}