import { observable, action, } from "mobx";
import { topicList, getdetail, getrelated, getcommentlist, gettopic } from '../../servicer';
export default class topicLists {
   @observable gettopL = ""; //专题
   @observable gettopdetail = ""; //专题详情
   @observable gettoprelateds = ""; //根据专题Id获取相关专题
   @observable getcomment = ""; //根据专题ID或者商品ID获取评论获取相关专题
   @observable gettopics = ""; //针对某个标题添加评论
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
   @action async getrelateds(id) {
      const data = await getrelated(id)
      this.gettoprelateds = data.data
      console.log(data.data)
   }
   //根据专题ID或者商品ID获取评论获取相关专题
   @action async getcommentlists(id) {
      const data = await getcommentlist(id)
      this.getcomment = data.data
      console.log(data.data)
   }
   //根据专题ID或者商品ID获取评论获取相关专题
   @action async gettopicss(id) {
      const data = await gettopic(id)
      this.gettopics = data.data
      console.log(data.data)
   }
}