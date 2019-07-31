import React, { Component } from 'react';
import '../../../utils/fonts/iconfont.css'
import './index.scss'
import { inject, observer } from 'mobx-react'
@inject("login")
@observer
class Collect extends Component {
    state = {}

    goDetail=(id)=>{
        this.props.history.push({ pathname: `/listDetail/${id}`})
    }
    componentDidMount() {
        console.log(this.props.login)
        this.props.login.getCollect({ typeId: 0, size: 1000 })
    }
    
    render() {
        console.log(this.props.login.CollectData)
        return (
            <div className='wrap'>
                <div className="sc-header">
                    <i className='iconfont icon-xiangzuo' onClick={()=>this.props.history.go(-1)}></i>
                    <p>easyLikeGoods</p>
                    <span></span>
                </div>
                <div className="sc-con">
                    {
                        this.props.login.CollectData && this.props.login.CollectData.map((item, index) => {
                            return <div className="sc-list" key={item.id} onClick={()=>this.goDetail(item.value_id)}>
                                        <dl>
                                            <dt>
                                                <img src={item.list_pic_url} alt="" />
                                            </dt>
                                            <dd>

                                                <h3>{item.name} </h3>
                                                <span>{item.goods_brief}</span>
                                                <p>￥{item.retail_price}</p>

                                            </dd>
                                        </dl>
                                    </div>
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Collect;