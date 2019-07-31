// 引入模块
import Login from './modules/login' //登录页
import Classify from './modules/classify' //分类页
import HomePage from './modules/homePage' //首页
import ShopCar from './modules/shopCar' //购物车
import TopicList from './modules/topicList'  //获取专题数据
import Getdetail from './modules/topicList'//获取专题详情
import Getrelated from './modules/topicList'//根据专题Id获取相关专题
import getcommentlist from './modules/topicList'//根据专题ID或者商品ID获取评论获取相关专题
// 实例化模块
const login = new Login();
const classify = new Classify();
const homePage = new HomePage();
const car = new ShopCar()
const topicList = new TopicList();
const getdetail = new Getdetail();
const getrelated = new Getrelated();
/* const getcommentlist = new Getcommentlist(); */
export default{
    login,classify,homePage,car,topicList,getdetail,getrelated,getcommentlist
}





