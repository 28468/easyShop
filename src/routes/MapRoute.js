import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Cookie from 'js-cookie';
const MapRoute = props=>(
    <Switch>
        {
            props.route.map(item=>(
                item.path?(
                    <Route key={item.path} path={item.path} 
                    render={
                        props=>{  
                             if(item.flag){
                                       if(!Cookie.get('x-nideshop-token')){
                                           return <Redirect to='/login'></Redirect>
                                       }
                                   }           
                           return <item.component {...props} route={item.children}></item.component>
                        }
                    }>

                    </Route>
                ):(
                    <Redirect key={item.from} {...item}></Redirect>
                )
            ))
        }
    </Switch>
)
export default MapRoute
