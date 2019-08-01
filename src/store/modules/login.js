import { observable, action } from "mobx";
import {login,getCollectData,gwtAddress,add,del} from '../../servicer';
import {setCookie} from "../../utils/index";
import {  Toast } from 'antd-mobile';
export default class Login{
     // @observable 修饰属性
     @observable count = "";
     @observable CollectData = []; //收藏列表
     @observable AddressList = [];

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
   
    @action async getCollect(params) {
        const data = await getCollectData(params) 
        this.CollectData=data.data
       console.log(data.data)
    }
    @action async getAddressList() {
        const data = await gwtAddress() 
        this.AddressList=data.data
       console.log(data)
    }
    @action async addAddress(params) {
        const data = await add(params) 
       console.log(data)
    }
    @action async delAddress(id) {
        const data = await del(id) 
        const datas = await gwtAddress() 
        this.AddressList=datas.data
        if( data.data==='删除成功'){
            Toast.success('删除成功',2);
          }else{
            Toast.success('删除失败',2);
          }
       
    }
}