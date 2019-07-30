import { observable, action } from "mobx";
import {login} from '../../servicer';
import {setCookie} from "../../utils/index";

export default class Login{
     // @observable 修饰属性
     @observable count = "";
     
     @action btn(phone,pwd){
     login({mobile:phone,password:pwd}).then((res)=>{
         console.log(res)
         if(res.errno===0){
                setCookie(res.data.sessionKey);
                this.count=res.errno;

         }else{
            this.count=res.errno;
         }
       

         
     })
    }
}