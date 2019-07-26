import React, { Component } from 'react'
import { MapRoute } from '../../routes'
import { NavLink } from 'react-router-dom'
import './home.scss'
import '../../utils/fonts/iconfont.css'
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
                    < NavLink to='/HomePage' tag='dl'>
                        <dt><i className="iconfont icon-shouye"></i> </dt>
                        <dd><span>首页</span></dd>
                    </NavLink>
                    < NavLink to='/classify' tag='dl'>
                        <dt><i className="iconfont icon-shouye"></i> </dt>
                        <dd><span>分类</span></dd>
                    </NavLink>
                    < NavLink to='/shiwu' tag='dl'>
                        <dt><i className="iconfont icon-shouye"></i> </dt>
                        <dd><span>识物</span></dd>
                    </NavLink>
                    <NavLink to='/shopCar' tag='dl'>
                        <dt><i className="iconfont icon-shouye"></i> </dt>
                        <dd><span>购物车</span></dd>
                    </NavLink>
                    < NavLink to='/wode' tag='dl'>
                        <dt><i className="iconfont icon-shouye"></i> </dt>
                        <dd><span>个人</span></dd>
                    </NavLink>
                 
                   
                </div>
            </div>
        );
    }
}

export default home;