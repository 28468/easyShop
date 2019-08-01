import Home from '../views/Home/home'
import HomePage from '../views/HomePage'
import Login from '../views/Login'
import Classify from '../views/Classify'
import Shiwu from '../views/Shiwu'
import ShopCar from '../views/ShopCar'
import Wode from '../views/Wode'
import ClassifyList from '../views/Classify/ClassifyList'//分类列表
import ListDetail from '../views/Classify/ClassifyList/ListDetail'//列表详情
import ZtDetail from '../views/Shiwu/Detail'//专题详情
import Collect from '../views/Wode/Collect'//收藏
import Address from '../views/Wode/Address'//地址
import AddressDetail from '../views/Wode/Address/AddressDetail'
import Addpltitles from '../views/Shiwu/Detail/Addpltitle'//专题详情
import Alltiitle from '../views/Shiwu/Detail/Alltiitle'//专题详情
import Homedetail from '../views/HomePage/Homedetail'
const route = [
    {
        path: '/login',
        component: Login,
    },
    {   //分类列表
        path: '/classifylist/:id',
        component: ClassifyList,
    },
    {   //列表详情
        path: '/listDetail/:id',
        component: ListDetail,
    },  //专题详情
    {
        path: '/ztDetail/:id',
        component: ZtDetail,
    },
    {
        path: '/collect',
        component: Collect,
    },
    {
        path: '/address',
        component: Address,
    },
    {
        path: '/addressDetail',
        component: AddressDetail,
    },
    
    {
        path: '/Addpltitles',
        component: Addpltitles,
    },
    {
        path: '/Alltiitle',
        component: Alltiitle,
    },
    {
        path: '/Homedetail/:id',
        component: Homedetail,
    },
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/HomePage',
                component: HomePage,

            },
            {
                path: '/classify',
                component: Classify,

            },
            {
                path: '/subject',
                component: Shiwu,
            },
            {
                path: '/shopCar',
                component: ShopCar,


            },
            {
                path: '/wode',
                component: Wode,
                flag: true,

            },
            {
                from: '/',
                to: '/HomePage'
            }
        ]
    }
]
export default route;