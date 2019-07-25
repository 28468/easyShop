import React, { Component } from 'react'
import { MapRoute } from '../../routes'
import { NavLink } from 'react-router-dom'
import './home.scss'
class home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='wrap'>
               
                <div className='main'>
                    <MapRoute route={this.props.route}></MapRoute>
                </div>
                <div className='footer'>
                    <div>
                        <NavLink to='/HomePage'>首页</NavLink>
                    </div>
                    <div>
                        <NavLink to='/classify'>分类</NavLink>
                    </div>
                    <div>
                        <NavLink to='/shiwu'>识物</NavLink>
                    </div>
                    <div>
                        <NavLink to='/shopCar'>购物车</NavLink>
                    </div>

                    <div>
                        <NavLink to='/wode'>个人</NavLink>
                    </div>



                </div>
            </div>
        );
    }
}

export default home;