import React, { Component } from 'react';
import './index.scss'
import '../../utils/fonts/iconfont.css'
import { inject, observer } from "mobx-react";
import {removeCookie} from '../../utils/index'

class Wode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPower: [
        {
          icon: 'icon-gongzuojilu',
          name: '我的收藏',
          link: '/'
        },
        {
          icon: 'icon-address',
          name: '地址管理',
          link: '/'
        },
        {
          icon: 'icon-wodedingdan',
          name: '我的订单'
        },
        {
          icon: 'icon-riqixuanze',
          name: '周末拼单'
        },
        {
          icon: 'icon-zhifu-01',
          name: '优惠券'
        },
        {
          icon: 'icon-xinlang1',
          name: '优选购'
        },
        {
          icon: 'icon-31',
          name: '我的红包'
        },
        {
          icon: 'icon-yonghu',
          name: '会员plus'
        },
        {
          icon: 'icon-fengjing',
          name: '邀请返利'
        },
        {
          icon: 'icon-faxiandingdan',
          name: '意见反馈'
        },
        {
          icon: 'icon-whatsapp',
          name: '客服咨询'
        },
        {
          icon: 'icon-50',
          name: '账户安全'
        }]
    }
  }
  render() {

    return (
      <>
        <div className='main'>
          
         
              <div className="userMsgs">
                <div className="img">
                  <h6> </h6>
                  <h5> </h5>
                </div>
                <div className='info'>
                  <span>110</span>
                  <span>普通用户</span>
                </div>
              </div> 
              {/* <div className="userMsgs">
                <div style={{ height: '100%' }}>未登录</div>
              </div> */}
          
          <div className="userPower">
            {
              this.state.userPower.map((item) => (
                <div key={item.name} style={'link' in item ? { color: '#2196f3' } : {}} onClick={this.showPower.bind(this, item)} >
                  <i className={`iconfont ${item.icon}`} style={'link' in item ? { color: '#2196f3' } : {}}></i>
                  <div>{item.name}</div>
                </div>)
              )
            }
          </div>
          <p className="out" onClick={this.goTo}>
            退出登录
          </p>
        </div>
     
      </>
    );
  }
  showPower= (item)=> {
    if('link' in item){
      this.props.history.push(item.link)
    } else {
      // Toast.offline(`${item.name}功能还未解锁，请耐心等候~`,1)
    }
  }
  goTo=()=>{
    removeCookie()
    this.props.history.push('/login')

  }
}

export default Wode;
