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
<<<<<<< HEAD
=======
import Addpltitles from '../views/Shiwu/Detail/Addpltitle'//专题详情
import Alltiitle from '../views/Shiwu/Detail/Alltiitle'//专题详情
>>>>>>> 3e0e11d39fe4b59579b9bb77f766bc6b77ac8939
const route = [
    {
        path:'/login',
        component:Login,
    },
    {   //分类列表
        path:'/classifylist/:id',
        component:ClassifyList,
    },
    {   //列表详情
        path:'/listDetail/:id',
        component:ListDetail,
<<<<<<< HEAD
    },  //专题详情
    {   path:'/ztDetail/:id',
        component:ZtDetail,
    },
=======
    },  //专题详情`
    {   path:'/ztDetail/:id',
        component:ZtDetail,
    },
    //专题详情
    {   path:'/Addpltitles',
        component:Addpltitles,
    },
       //专题详情
       {   path:'/Alltiitle',
       component:Alltiitle,
   },
>>>>>>> 3e0e11d39fe4b59579b9bb77f766bc6b77ac8939
    {
        path:'/',
        component:Home,
        children:[
            {
                path:'/HomePage',
                component:HomePage,
                
            },
            {
                path:'/classify',
                component:Classify,
                
            },
            {
                path:'/subject',
                component:Shiwu,              
            },
            {
                path:'/shopCar',
                component:ShopCar,
            
                
            },
            {
                path:'/wode',
                component:Wode,
                flag:true,
                
            },
            {
                from:'/',
                to:'/HomePage'
            }
        ]
    }
]
export default route;