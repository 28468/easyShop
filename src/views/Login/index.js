import React, { Component } from 'react';
import './Login.scss'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='wrap'>
                <div className="logo">
                    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                </div>
                <div className="content">
                    <input type="text" className='phone' placeholder='账户'/>
                    <input type="text" className='pwd' placeholder='密码'/>
                    <div className="title">
                        <p>注册账号</p>
                        <p>忘记密码</p>
                    </div>
                    <button className='btn'>登录</button>
                    <button className='btn1'>其它登陆方式</button>
                </div>
            </div>
        );
    }
}

export default Login;