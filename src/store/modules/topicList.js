import { observable, action, } from "mobx";
import { topicList ,getdetail,getrelated,getcommentlist} from '../../servicer';
export default class topicLists {
    @observable gettopL = "";  //专题
    @observable gettopdetail = ""; //专题详情
    @observable gettoprelateds = ""; //根据专题Id获取相关专题
    @observable getcomment = ""; //根据专题ID或者商品ID获取评论获取相关专题
     //专题
    @action async getoplist() {
        const data = await topicList() 
        this.gettopL = data.data
       console.log(data.data)
    }
    //专题详情
    @action async gettopdetails(id) {
        const data = await getdetail(id) 
        this.gettopdetail = data.data
       console.log(data.data)
    }

     //根据专题Id获取相关专题
     @action async getrelateds() {
        const data = await getrelated() 
        this.gettoprelateds = data.data
       console.log(data.data)
    }
    //根据专题ID或者商品ID获取评论获取相关专题
    @action async getcommentlists() {
       const data = await getcommentlist() 
       this.getcomment = data.data
      console.log(data.data)
   }

    }

       
       
        