import React, { Component } from 'react';
import './css/content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="content">
                <h3>添加房间分配</h3>
                <div className="title">
                    <div className='piece-left'>
                        <p>房间号</p>
                        <input type='text' placeholder="病人姓名" />
                    </div>
                    <div className='piece-right'>
                        <p>房型</p>
                        <select className="room">
                            <option selected>ICU</option>
                            <option >AC室</option>
                            <option >一般</option>
                        </select>
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>病人姓名</p>
                        <input type='text' placeholder="年龄" />
                    </div>
                    <div className='piece-right'>
                        <p>分配日期</p>
                        <input type='date' />
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>出院日期</p>
                        <input type='date' />
                    </div>
                    <div className='piece-right'>
                        <p>医生姓名</p>
                        <input type='text' placeholder="Token Number" />
                    </div>
                </div>

                {/* 确认信息 */}
                <div className="control">
                    <span>**</span>
                    <input type="checkbox" id="awesome" />
                    <label htmlFor="awesome">请确认所填信息</label>
                </div>
                {/* 提交 */}
                <div className='add_subm'>
                    <button className='add_btn' type='submit'>提交至分配室</button>
                </div>
            </div>
        );
    }
}

export default Content;