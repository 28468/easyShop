import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import './Login.scss'
@inject('login')
@observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:'',
            pwd:''
          };
    }

    componentDidUpdate(){
        if(this.props.login.count===0){
            console.log(this.props.login.count);
            this.props.history.push("/")
        }
    }
    render() {
       console.log(this.props.login.count)
        return (
            <div className='wrap'>
                <div className="logo">
                    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                </div>
                <div className="content">
                    <input type="text" className='phone' placeholder='账户' onChange={this.phoneChange.bind(this)}/>
                    <input type="password" className='pwd' placeholder='密码' onChange={this.pwdChange.bind(this)}/>
                    <div className="title">
                        <p>注册账号</p>
                        <p>忘记密码</p>
                    </div>
                    <button className='btn' onClick={()=>this.props.login.btn(this.state.phone,this.state.pwd)}>登录</button>
                    <button className='btn1'>其它登陆方式</button>
                </div>
            </div>
        );
    }
    phoneChange(e){
        this.setState({
            phone:e.target.value
        })
    }
    pwdChange(e){
        this.setState({
            pwd:e.target.value
        })
    }
}

export default Login;