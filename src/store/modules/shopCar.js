import { observable, action } from "mobx";
import {getShopCar} from '../../servicer';
export default class Car{
    @observable shopList = ""; 
    @action async getshopList() {
        const data = await getShopCar() 
       this.shopList = data.data
       console.log(data.data)
     }
       
    
       

    
}