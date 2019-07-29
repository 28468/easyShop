import { observable, action } from "mobx";
import { classify, clickClassify, classifyList ,getDetail} from '../../servicer';
export default class Classifys {
    // @observable 修饰属性
    @observable leftList = "";
    @observable rightList = "";
    @observable titleList = "";//列表标题数据
    @observable conList = "";//列表内容数据
    @observable detailList = "";//商品详情数据
    @observable DialogFalg = false;//控制dialog的开关变量
    @observable num = 0;//dialog里的数量
    @action async getList() {
        const data = await classify() 
        this.leftList = data.data.categoryList
        this.leftList[0].type = 1;
        this.rightList = data.data.currentCategory
    }
    @action async addClass(item) {
        this.leftList.forEach((val, index) => {
            val.type = 0;
        })
        item.type = 1;
        const data = await clickClassify(item.id) 
        console.log(data)
        this.rightList = data.data.currentCategory
    }
    //根据分类ID获取商品
    @action async getClassifyList(id) {
        const data = await classifyList(id) 
        this.titleList = data.data.filterCategory
        this.titleList[0].checked = true;
        this.conList = data.data.goodsList
    }
    //点击列表标题addListClass
    @action async addListClass(item) {
        this.titleList.forEach((val, index) => {
           val.checked =false
        })
       item.checked = !item.checked;
       const data = await classifyList(item.id) 
       this.conList = data.data.goodsList
    }
    //根据ID获取商品详情
    @action async getDetailList(id) {
       const data = await getDetail(id) 
       console.log(data.data)
       this.detailList = data.data
    }
    //显示dialog
    @action showDialog(){
        this.DialogFalg = true;
    }
    //显示关闭
    @action closeDialog(){
        this.DialogFalg =false;
    }

}