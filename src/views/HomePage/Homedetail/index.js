import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.scss'
@inject('homePage')
@observer
class componentName extends Component {
componentDidMount() {

this.props.homePage.gethomedetailss(this.props.match.params.id) //根据制造商ID获取制造商详情
this.props.homePage.gethomegoodslistss() //根据制造商ID获取制造商详情
}
goaddtitles(item){
this.props.history.push({ pathname: `/listDetail/${item.id}`, params: item.id })
}
render() {
return (
<div className="hometitile">
{
this.props.homePage.gethomedetails?( <div className="homeposww">
<div className="hometop">
<span onClick={() => this.props.history.go(-1)} className="icon iconfont icon-xiangzuo"></span>
<span>{ this.props.homePage.gethomedetails.brand.name}</span>
<span></span>
</div>
<div className="homedetail">
<dl>
<dt> < img src={ this.props.homePage.gethomedetails.brand.list_pic_url} alt=""/> </dt>
<dd>{ this.props.homePage.gethomedetails.brand.simple_desc}</dd>
</dl>
</div>
</div> ):(null) 
}
<div className="homepostlist">
{
this.props.homePage.gethomegoodslists.data&&this.props.homePage.gethomegoodslists.data.map((item,index)=>{
return <dl key={index} onClick={() => this.goaddtitles(item)} >
<dt>< img src={item.list_pic_url} alt=""/> </dt>
<dd>{item.name}</dd>
<p>￥{item.retail_price}元</p >
</dl>
})
}
</div>
</div>
);
}
}

export default componentName;