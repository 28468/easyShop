import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.scss'
import '../../../../utils/fonts/iconfont.css'
class ListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        };
    }
    goBack = () => {
            this.props.history.push({ pathname: `/classifylist/${window.localStorage.getItem('itemId')}`})
    }
    render() {
        return (
            <div className='wrap'>
                <div className="xq-header">
                    <i className="iconfont icon-xiangzuo" onClick={() => this.goBack()}></i>
                    <p>奇趣分类</p>
                    <span></span>
                </div>
            </div>
        );
    }
}

export default ListDetail;