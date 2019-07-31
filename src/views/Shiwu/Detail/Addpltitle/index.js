import React, { Component } from 'react';
import './index.scss'
class Addpltitle extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    } 
    goaddtitles() {
        this.props.history.push({ pathname: `/ztDetail/`})
    }
    render() {
        return (
            <div className="lytitile">
            <div className="lytop">
            <span onClick={() => this.goaddtitles()}  className="icon iconfont icon-xiangzuo"></span>
            <span>填写留言</span>
            <span></span>
            </div>
            <div className="lyliuyan">
               <input type="text" placeholder="1"/>
               <button>留言</button>
               <button>清空</button>
           </div>
            </div>
        );
    }
}

export default Addpltitle;