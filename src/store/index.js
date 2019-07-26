// 引入模块
import Login from './modules/login'
import Classify from './modules/classify'
// 实例化模块
const login = new Login();
const classify = new Classify();

export default{
    login,classify
}