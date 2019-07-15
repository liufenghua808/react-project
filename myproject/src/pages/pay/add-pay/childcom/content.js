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
                <h3>支付添加</h3>
                <div className="title">
                    <div className='piece-left'>
                        <p>病人ID</p>
                        <input type='text' placeholder="病人姓名" />
                    </div>
                    <div className='piece-right'>
                        <p>病人姓名</p>
                        <input type='text' placeholder="年龄" />
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>科室</p>
                        <select className="room">
                            <option selected>ICU</option>
                            <option >AC室</option>
                            <option >一般</option>
                        </select>
                    </div>
                    <div className='piece-right'>
                        <p>医生姓名</p>
                        <input type='text' placeholder="Token Number" />
                    </div>

                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>分配日期</p>
                        <input type='date' />
                    </div>
                    <div className='piece-right'>
                        <p>出院日期</p>
                        <input type='date' />
                    </div>
                </div>

                <div>
                    <h1 className="service">服务</h1>
                    <div className="title">
                        <div className='piece-left'>
                            <p>服务名称</p>
                            <input type='text' placeholder="服务名称" />
                        </div>
                        <div className='piece-right'>
                            <p>治疗费用</p>
                            <input type='text' placeholder="治疗费用" />
                        </div>
                    </div>
                    <div className="add_service">添加服务</div>
                </div>

                <div>
                    <h1 className="payment">付款</h1>
                    <div className="title_pay">
                        <div className='piece-pay'>
                            <p>折扣（％）</p>
                            <input type='text' placeholder="折扣" />
                        </div>
                        <div className='piece-pay'>
                            <p>提前支付</p>
                            <input type='text' placeholder="提前支付" />
                        </div>
                        <div className='piece-pay'>
                            <p>支付方式</p>
                           <select className="paytype">
                               <option>校验</option>
                               <option>现金</option>
                               <option>卡</option>
                           </select>
                        </div>
                        <div className='piece-pay'>
                            <p>卡/支票号码</p>
                            <input type='text' placeholder="服务名称" />
                        </div>
                    </div>
                </div>

                {/* 确认信息 */}
                <div className="control">
                    <span>**</span>
                    <input type="checkbox" id="awesome" />
                    <label  htmlFor="awesome">请确认所填信息</label>
                </div>
                {/* 提交 */}
                <div className='add_subm'>
                    <button className='add_btn' type='submit'>提交至</button>
                </div>
            </div>
        );
    }
}

export default Content;