import React, { Component } from 'react';
import './classify.scss'
import '../../utils/fonts/iconfont.css'
import { inject, observer } from 'mobx-react';

@inject('classify')
@observer
class Classify extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goto = (item) => {
        console.log(item.name,item.front_name)
         window.localStorage.setItem('itemId',item.id)
         window.localStorage.setItem('name',item.name)
         window.localStorage.setItem('front_name',item.front_name)
        this.props.history.push({ pathname: `/classifylist/${item.id}`, params: item })
    }
    componentDidMount() {
        this.props.classify.getList()
    }
    render() {
        return (
            <div className='wrap'>
                <div className="fl-header">
                    <div>
                        <i className="iconfont icon-fangdajing"></i>
                        <p>搜索商品，共21458款好物</p>
                    </div>
                </div>
                <div className="fl-main">
                    <div className="fl-left">
                        <ul>
                            {
                                this.props.classify.leftList && this.props.classify.leftList.map((item, index) => {
                                    return <li key={item.id} className={item.type ? 'active' : null}
                                        onClick={() => this.props.classify.addClass(item)}>{item.name}
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="fl-right">
                        <div className="fl-right-wrap">
                            <div className="fl-right-top">
                                <img src={this.props.classify.rightList.wap_banner_url} alt="" />
                            </div>
                            <div className="fl-right-con">
                                {
                                    this.props.classify.rightList && this.props.classify.rightList.subCategoryList.map((item, index) => {
                                        return <dl className="fl-right-list" key={item.id} onClick={() => this.goto(item)}>
                                            <dt>
                                                <img src={item.wap_banner_url} alt="" />
                                            </dt>
                                            <dd>
                                                <span>{item.name}</span>
                                            </dd>
                                        </dl>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Classify;