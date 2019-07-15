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
                <h3>编辑医生信息</h3>
                <div className="title">
                    <div className='piece-left'>
                        <p>医生姓名</p>
                        <input type='text' placeholder="病人姓名" />
                    </div>
                    <div className='piece-right'>
                        <p>出生日期</p>
                        <input type='date' placeholder="出生日期" />
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>专业化</p>
                        <input type='text' placeholder="专业化" />
                    </div>
                    <div className='piece-right'>
                        <p>经验</p>
                        <input type='text' placeholder="经验" />
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>年龄</p>
                        <input type='text' placeholder="年龄" />
                    </div>
                    <div className='piece-right'>
                        <p>电话</p>
                        <input type='text' placeholder="电话" />
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>电子邮件</p>
                        <input type='text' placeholder="电子邮件" />
                    </div>
                    <div className='piece-right'>
                        <p>性别</p>
                        <select className="sex">
                            <option selected>男</option>
                            <option >女</option>
                        </select>
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>医生详情</p>
                        <textarea className="docs" type='text' placeholder="医生详情" />
                    </div>
                    <div className='piece-right'>
                        <p>地址</p>
                        <textarea className="adr" type='text' placeholder="地址" />
                    </div>

                </div>

                {/* 上传文件 */}
                <div className="title">
                    <div className='doc_file'>
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
                {/* 提交 */}
                <div className='doc_addsubm'>
                    <button className='doc_addbtn' type='submit'>更新</button>
                </div>
            </div>
        );
    }
}

export default Content;