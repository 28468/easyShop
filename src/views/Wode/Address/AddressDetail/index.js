
import React, { Component } from 'react';
import './index.scss'
// import { inject, observer } from "mobx-react";
import { PickerView, WhiteSpace } from 'antd-mobile';
// @inject("home")
// @observer

class AddressDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            num: false,
            arr: '江苏省/南京市/玄武区',
            address: [{
                "label": "北京",
                "value": '2',
                "children": [{
                    "label": "北京市",
                    "value": '2-1',
                    "children": [{
                        "label": "东城区",
                        "value": '2-1-1'
                    }, {
                        "label": "西城区",
                        "value": '2-1-2'
                    }, {
                        "label": "崇文区",
                        "value": '2-1-3'
                    }, {
                        "label": "其它区",
                        "value": '2-1-4'
                    }]
                }]
            }, {
                "label": "天津",
                "value": '3',
                "children": [{
                    "label": "天津市",
                    "value": '3-1',
                    "children": [{
                        "label": "和平区",
                        "value": '3-1-1'
                    }, {
                        "label": "河东区",
                        "value": '3-1-2'
                    }, {
                        "label": "河西区",
                        "value": '3-1-3'
                    }, {
                        "label": "南开区",
                        "value": '3-1-4'
                    }]
                }]
            }, {
                "label": "河北省",
                "value": '4',
                "children": [{
                    "label": "石家庄市",
                    "value": '4-1',
                    "children": [{
                        "label": "长安区",
                        "value": '4-1-1'
                    }, {
                        "label": "桥东区",
                        "value": '4-1-2'
                    }, {
                        "label": "桥西区",
                        "value": '4-1-3'
                    }, {
                        "label": "新华区",
                        "value": '4-1-4'
                    }]
                }]
            }]
        }
    }
    render() {
        return (
            <>
                <div className="addres">
                    <h2>新增地址</h2>
                    <div className="discribe">
                        <input type="text" placeholder="姓名" />
                        <input type="text" placeholder='电话号码' />
                        <p className="address-my" onClick={this.showFlag}>
                            {this.state.arr}
                        </p>
                        <input type="textarea" placeholder="详细地址" />
                        <div className="moren">
                            <p onClick={this.set}>设置默认地址</p>
                            {this.state.num === false ? <p className='icon iconfont icon-check-circle'></p> : <p className="iconfont icon-check-circle nweaddressnum"></p>}
                        </div>
                    </div>
                    <div className="bottom-btn">
                        <p className="btn-cancle" onClick={this.cl}>取消</p>
                        <p className="btn-save">保存</p>
                    </div>
                </div>
                <div className={this.state.flag ? 'showZz' : 'pickers'}>
                    <div className="pack">
                        <div className="picker">
                            <div className="top-btn">
                                <p onClick={this.cancle}>取消</p>
                                <p onClick={this.oks}>确认</p>
                            </div>
                            <WhiteSpace /><WhiteSpace />
                            <PickerView
                                data={this.state.address}
                                value={['2', '2-1', '2-1-1']}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
    cl = () => {
        this.props.history.go(-1)
    }
    showFlag = () => {
        this.setState({
            flag: true
        })
    }
    show = () => {
        this.setState({
            flag: false
        })
    }
    set = () => {
        this.setState({
            num: !this.state.num
        })
    }
    remember = (value) => {
        console.log(value)
        this.setState({
            arr: value
        })
    }
    cancle = () => {
        this.setState({
            flag: false
        })
    }
    oks = () => {
        this.setState({
            flag: false
        })
    }
}

export default AddressDetail;