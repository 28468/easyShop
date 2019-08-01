import React, { Component } from 'react';
import './index.scss'
import '../../../utils/fonts/iconfont.css'
import { inject, observer } from "mobx-react";

import { Modal } from 'antd-mobile';

const alert = Modal.alert;
@inject("login")
@observer

class address extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    showAlert = (item) => {
        console.log(item)
        const alertInstance = alert('删除', '你确定删除吗???', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确定', onPress: () =>this.props.login.delAddress({id:item.id}) },
        ]);
        setTimeout(() => {
            // 可以调用close方法以在外部close
            console.log('auto close');
            alertInstance.close();
            
            this.props.login.getAddressList()
        }, 500000);
    };

    render() {
        return (
            <>
                <div className="wrap">
                    <div className="ad-header">
                        <i className='iconfont icon-xiangzuo back' onClick={() => this.props.history.go(-1)}></i>
                        <span>地址管理</span>
                        <span>  </span>
                    </div>
                    <div className="ad-main">
                        {
                            this.props.login.AddressList && this.props.login.AddressList.map((item, index) => {
                                return <section key={index}>

                                    <div className="myname">
                                        {item.name}
                                    </div>
                                    <div className="addres">
                                        <p>{item.mobile}</p>
                                        <p>吉林省长春市南关区</p>
                                        <p>{item.address}</p>
                                    </div>

                                 
                                      <div className="icon iconfont icon-lajitong" onClick={()=>this.showAlert(item)}></div>


                                </section>
                            })
                        }

                    </div>
                    <div className="ad-footer" onClick={this.go}>新建地址</div>
                </div>
            </>
        );
    }

    componentDidMount() {
        this.props.login.getAddressList()
    }
    go = () => {
        this.props.history.push('/addressDetail')

    }
}

export default address;






