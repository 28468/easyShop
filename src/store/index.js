// 引入模块
import Login from './modules/login'
import Classify from './modules/classify'
import HomePage from './modules/homePage'
// 实例化模块
const login = new Login();
const classify = new Classify();
const homePage = new HomePage();
export default{
    login,classify,homePage
}