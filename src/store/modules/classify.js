import { observable, action } from "mobx";
import { classify, clickClassify, classifyList, getDetail, addcars, getNumber ,addCol} from '../../servicer';
import {  Toast } from 'antd-mobile';

export default class Classify {
    // @observable 修饰属性
    @observable leftList = "";
    @observable rightList = "";
    @observable titleList = "";//列表标题数据
    @observable conList = "";//列表内容数据
    @observable detailList = "";//商品详情数据
    @observable DialogFalg = false;//控制dialog的开关变量
    @observable num = 0;//dialog里的数量
    @observable carNumber = 0//购物车数量
    @observable code = 0;//1添加成功 其他添加失败
    @observable colcode ='';//
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
            val.checked = false
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
        console.log(data,'111111')
    }
    //显示dialog
    @action showDialog() {
        this.DialogFalg = true;
    }
    //显示关闭
    @action closeDialog() {
        this.DialogFalg = false;
    }
    //加
    @action addNum() {
        this.num++
    }
    //减
    @action delNum() {
        this.num--
        if (this.num < 0) {
            this.num = 0
        }
    }
    //获取购物车数量
    @action async totalNum() {
        const data = await getNumber();
        this.carNumber = data.data.cartTotal.goodsCount
        console.log(this.carNumber, "11111")
    }
    //添加购物车
    @action async addcar(id, num, productId) {
        console.log(id, num, productId)
        const data = await addcars({ goodsId: id, number: num, productId: productId })
        this.code = data.errno
        console.log(data)
    }
    
    //添加收藏
    @action async addCollect() {
        const data = await addCol({typeId: 0, valueId: this.detailList.info.id })
        this.colcode = data.data.type
        if(  this.colcode==='add'){
            Toast.success('添加收藏',2);
          }else{
            Toast.success('取消收藏',2);
          }
        console.log(this.colcode)
    }

    @action async addCollects(item) {
        console.log(item.value_id)
        const data = await addCol({typeId: 0, valueId: item.value_id })
        this.colcode = data.data.type
        if( this.colcode!=='add'){
            Toast.success('取消收藏',2);
          window.location.reload();
          }
        console.log(this.colcode)
    }
    
}