import { observable, action } from "mobx";
import { classify,clickClassify } from '../../servicer';
export default class Classifys {
    // @observable 修饰属性
    @observable leftList = "";
    @observable rightList = "";
    @observable rightList = "";
    @action getList() {
        classify().then((res) => {
            this.leftList = res.data.categoryList
            this.rightList = res.data.currentCategory
    
        })
    }
    @action addClass(item) {
        this.leftList.forEach((val,index)=>{
            val.type = 0;
        })
       item.type = 1;
       console.log(item.id)
       console.log(this.rightList ) 
       clickClassify(item.id).then((res)=>{
           console.log(res.data.currentCategory)
          this.rightList = res.data.currentCategory
            
       })
    }

}