import React, { Component } from 'react';
import './css/content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // onChange = (ev) => {
    //     ev.target.checked = !ev.target.checked
    // }



    render() {
        return (
            <div className="content">
                <h3>编辑病人信息</h3>
                <div className="title">
                    <div className='piece-left'>
                        <p>病人姓名</p>
                        <input type='text' placeholder="病人姓名" />
                    </div>
                    <div className='piece-right'>
                        <p>出生日期</p>
                        <input type='date' placeholder="出生日期" />
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>年龄</p>
                        <input type='text' placeholder="年龄" />
                    </div>
                    <div className='piece-right'>
                        <p>性别</p>
                        {/* <input type='text' placeholder="性别" /> */}
                        <select className="sex">
                            <option selected>男</option>
                            <option >女</option>
                        </select>
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>电子邮件</p>
                        <input type='text' placeholder="电子邮件" />
                    </div>
                    <div className='piece-right'>
                        <p>电话</p>
                        <input type='text' placeholder="电话" />
                    </div>
                </div>
                <div className="title">
                    <div className='adress'>
                        <p>地址</p>
                        <textarea type='text' placeholder="地址" />
                    </div>

                </div>
                <div className="title">
                    <div className='file'>
                        <p>上传文件</p>
                        <input className='fileload' type='file' placeholder="地址" />
                    </div>
                </div>
                <div class="control">
                    <span>**</span>
                    <input type="checkbox" id="awesome" />
                    <label for="awesome">请确认修改信息</label>
                </div>
                <div className='add_subm'>
                    <button className='add_btn' type='submit'>更新</button>
                </div>
            </div>
        );
    }
}

export default Content;