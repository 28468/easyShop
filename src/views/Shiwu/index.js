import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
<<<<<<< HEAD


=======
>>>>>>> 3e0e11d39fe4b59579b9bb77f766bc6b77ac8939
import './Shiwu.scss'
@inject('topicList')
@observer
class Shiwu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goDetail=(id)=>{
        this.props.history.push({ pathname: `/ztDetail/${id}`})
    }
    componentDidMount() {
        this.props.topicList.getoplist()//获取专题
        this.props.topicList.getrelateds()//获取专题详情
<<<<<<< HEAD
        this.props.topicList.getcommentlists()////根据专题ID或者商品ID获取评论获取相关专题
=======
    
>>>>>>> 3e0e11d39fe4b59579b9bb77f766bc6b77ac8939

    }
    render() {
        /*  console.log(this.props.topicList.gettopL)
         console.log(this.props.topicList.gettopdetail) */
        return (
            <div className="ztwarp">
                <div className="ztlistone">
                    {
                        this.props.topicList.gettopL.data && this.props.topicList.gettopL.data.map((item, index) => {
                            return <dl key={index} onClick ={()=>this.goDetail(item.id)}>
                                        <dt><img src={item.scene_pic_url} alt="" /></dt>
                                        <dd>{item.title}</dd>
                                        <p className="ztziti">{item.subtitle}</p>
                                        <p><b>  {item.price_info}元起</b></p>
                            </dl>
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Shiwu;