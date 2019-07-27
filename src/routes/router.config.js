import Home from '../views/Home/home'
import HomePage from '../views/HomePage'
import Login from '../views/Login'
import Classify from '../views/Classify'
import Shiwu from '../views/Shiwu'
import ShopCar from '../views/ShopCar'
import Wode from '../views/Wode'
import ClassifyList from '../views/Classify/ClassifyList'//分类列表
const route = [
    {
        path:'/login',
        component:Login,
    },
    {   
        path:'/classifylist/:id',
        component:ClassifyList,
    },
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