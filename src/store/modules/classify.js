import { observable, action } from "mobx";
import { classify,clickClassify,classifyList } from '../../servicer';
export default class Classifys {
    // @observable 修饰属性
    @observable leftList = "";
    @observable rightList = "";
    @observable titleList = "";//列表标题数据
    @observable conList = "";//列表内容数据
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
//根据分类ID获取商品
    @action getClassifyList(id) {
        classifyList(id).then((res) => {
           console.log(res.data)
        this.titleList = res.data.filterCategory
       this.conList = res.data.goodsList
        })
    }

}