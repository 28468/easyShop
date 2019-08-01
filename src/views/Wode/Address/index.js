import React, { Component } from 'react';
import './index.scss'
import '../../../utils/fonts/iconfont.css'
import { inject, observer } from "mobx-react";

@inject("login")
@observer

class address extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="wrap">
                    <div className="ad-header">
                      <i className='iconfont icon-xiangzuo back' onClick={()=>this.props.history.go(-1)}></i>
                        <span>地址管理</span>
                        <span>  </span>
                    </div>
                    <div className="ad-main">
                        <section>
                            <div className="myname">
                                崔鸥
                            </div>
                            <div className="addres">
                                <p>15011111111</p>
                                <p>吉林省长春市南关区</p>
                                <p>上地软件园38</p>
                            </div>
                            <div className="icon iconfont icon-lajitong"></div>
                        </section>
                    </div>
                    <div className="ad-footer" onClick={this.go}>新建地址</div>
                </div>
            </>
        );
    }

    componentDidMount() {
        // this.props.home.addresss();
        this.props.login.getAddressList()
    }
    go=()=>{
        this.props.history.push('/addressDetail')

    }
}

export default address;

