// 引入模块
import Login from './modules/login' //登录页
import Classify from './modules/classify' //分类页
import HomePage from './modules/homePage' //首页
import ShopCar from './modules/shopCar' //购物车
// 实例化模块
const login = new Login();
const classify = new Classify();
const homePage = new HomePage();
const car = new ShopCar()
export default{
    login,classify,homePage,car
}