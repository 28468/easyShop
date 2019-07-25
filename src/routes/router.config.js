import Home from '../views/Home/home'
import HomePage from '../views/HomePage'
import Login from '../views/Login'
import Classify from '../views/Classify'
import Shiwu from '../views/Shiwu'
import ShopCar from '../views/ShopCar'
import Wode from '../views/Wode'
const route = [
    {
        path:'/login',
        component:Login,
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
                path:'/shiwu',
                component:Shiwu,
                
            },
            {
                path:'/shopCar',
                component:ShopCar,
                
            },
            {
                path:'/wode',
                component:Wode,
                
            },
            {
                from:'/',
                to:'/HomePage'
            }
        ]
    }
]
export default route;