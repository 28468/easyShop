import React, { Component } from 'react'
import { MapRoute } from '../../routes'
import { NavLink } from 'react-router-dom'
import './home.scss'
import '../../utils/fonts/iconfont.css'
import { Toast} from 'antd-mobile';
class home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
     loadingToast=() =>{
        Toast.loading('Loading...', 1, () => {
          console.log('Load complete !!!');
        });
      }
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
          console.log('Load complete !!!');
        });
    
        setTimeout(() => {
          Toast.hide();
        }, 3000);
      }
    render() {
        return (
            <div className='wrap'>
               
                <div className='main'>
                    <MapRoute route={this.props.route}></MapRoute>
                </div>
                <div className='footer'>
                    < NavLink to='/HomePage' onClick={()=>this.loadingToast()}>
                        <dt><i className="iconfont icon-shouye"></i> </dt>
                        <dd><span>首页</span></dd>
                    </NavLink>
                    < NavLink to='/subject' onClick={()=>this.loadingToast()}>
                        <dt><i className="iconfont icon-gongzuojilu"></i> </dt>
                        <dd><span>专题</span></dd>
                    </NavLink>
                    < NavLink to='/classify' onClick={()=>this.loadingToast()}>
                        <dt><i className="iconfont icon-gongzuo"></i> </dt>
                        <dd><span>分类</span></dd>
                    </NavLink>
                    <NavLink to='/shopCar' onClick={()=>this.loadingToast()}>
                        <dt><i className="iconfont icon-gouwuche"></i> </dt>
                        <dd><span>购物车</span></dd>
                    </NavLink>
                    < NavLink to='/wode' onClick={()=>this.loadingToast()}>
                        <dt><i className="iconfont icon-wode"></i> </dt>
                        <dd><span>我的</span></dd>
                    </NavLink>
                 
                   
                </div>
            </div>
        );
    }
}

export default home;
