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
                <h3>修改出诊信息</h3>
                <div className="title">
                    <div className='piece-left'>
                        <p>病人姓名</p>
                        <input type='text' placeholder="病人姓名" />
                    </div>
                    <div className='piece-right'>
                        <p>科室</p>
                        <select className="depart">
                            <option selected>皮肤科</option>
                            <option >神经科</option>
                            <option >耳鼻喉</option>
                            <option >内科</option>
                        </select>
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>医生姓名</p>
                        <input type='text' placeholder="年龄" />
                    </div>
                    <div className='piece-right'>
                        <p>出诊日期</p>
                        <input type='date' />
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>时间段</p>
                        <select className="times">
                            <option selected>10AM-11AM</option>
                            <option >11AM-12AM</option>
                            <option >14PM-15PM</option>
                            <option >15PM-16PM</option>
                        </select>
                    </div>
                    <div className='piece-right'>
                        <p>Token Number</p>
                        <input type='text' placeholder="Token Number" />
                    </div>
                </div>
                <div className="title">
                    <div className='adress'>
                        <p>问题</p>
                        <textarea type='text' placeholder="问题" />
                    </div>

                </div>
                {/* 文件上传 */}
                <div className="title">
                    <div className='file'>
                        <p>上传文件</p>
                        <input className='fileload' type='file' placeholder="地址" />
                    </div>
                </div>
                {/* 确认信息 */}
                <div class="control">
                    <span>**</span>
                    <input type="checkbox" id="awesome" />
                    <label for="awesome">请确认所填信息</label>
                </div>
                {/* 更新 */}
                <div className='add_subm'>
                    <button className='add_btn' type='submit'>更新</button>
                </div>
            </div>
        );
    }
}

export default Content;