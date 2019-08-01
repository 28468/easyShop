import { observable, action } from "mobx";
import {getSearch,searchGoodsLists} from '../../servicer';

export default class Search{
     // @observable 修饰属性
     @observable count = "";
     @observable historyKeywordList = []; //历史记录数组
     @observable hotKeywordList = [];  //热门数组
     @observable SearchList = []; //点击热门获取的数组
     @action async getSearchs() {
        const data = await getSearch() 
        this.historyKeywordList = data.data.historyKeywordList
        this.hotKeywordList = data.data.hotKeywordList
       console.log(data.data)
    }

    @action async getList(params){
       const data = await searchGoodsLists(params)
       this.SearchList =  data.data.goodsList
       console.log(data.data.goodsList)
    }
    @action async sort(){
      this.SearchList.map((item,index)=>{
         console.log(item)
      })
    }
   

}