import React, { Component } from 'react';
import './index.scss'
class ShopCar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            <div className='dialog-wrap'>
                <div className="dialog-top">
                    <img src="" alt=""/>
                    <div></div>
                    <span></span>
                </div>
                <div className="dialog-nums"></div>
                <div className="dialog-foot"></div>
            </div>

        );
    }
}
export default ShopCar;