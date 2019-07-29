// 引入模块
import Login from './modules/login'
import Classify from './modules/classify'
import HomePage from './modules/homePage'
import TopicList from './modules/topicList'
// 实例化模块
const login = new Login();
const classify = new Classify();
const homePage = new HomePage();
const topicList = new TopicList();
export default{
    login,classify,homePage,topicList
}