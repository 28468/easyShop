import { observable, action } from "mobx";
import {getSearch} from '../../servicer';

export default class Search{
     // @observable 修饰属性
     @observable count = "";
     @observable historyKeywordList = []; 
     @observable hotKeywordList = [];
     @action async getSearchs() {
        const data = await getSearch() 
        this.historyKeywordList = data.data.historyKeywordList
        this.hotKeywordList = data.data.hotKeywordList
       console.log(data.data)
    }
   

}