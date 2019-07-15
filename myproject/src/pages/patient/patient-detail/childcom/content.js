import React, { Component } from 'react';
import './css/content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="detail">
                <div className="detail1">
                    <div className="detail_card1">
                        <h3>病人详情</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="ti">病人姓名</td>
                                    <td>史蒂芬</td>
                                </tr>
                                <tr>
                                    <td>出生日期</td>
                                    <td>1989-2-3</td>
                                </tr>
                                <tr>
                                    <td>性别</td>
                                    <td>男</td>
                                </tr>
                                <tr>
                                    <td>地址</td>
                                    <td>美国美国美国</td>
                                </tr> <tr>
                                    <td>电话</td>
                                    <td>1234565678</td>
                                </tr> <tr>
                                    <td>邮箱</td>
                                    <td>shidifen@wer.com</td>
                                </tr>
                            </tbody>

                        </table>
                        <div className='detail1_btn'>
                            <button className='del_btn' >删除病人</button>
                            <button className='edit_btn' >编辑病人</button>
                            <button className='upload_btn' >下载文件</button>
                        </div>
                    </div>
                    <div className="detail_card2">
                        <h3>就诊医生</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>医生姓名</th>
                                    <th>成本</th>
                                    <th>访问日期</th>
                                    <th>项目</th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>保罗</td>
                                    <td>300元</td>
                                    <td>2019-3-4</td>
                                    <td>手术</td>
                                </tr>
                                <tr>
                                    <td>保罗</td>
                                    <td>300元</td>
                                    <td>2019-3-4</td>
                                    <td>手术</td>
                                </tr>
                                <tr>
                                    <td>保罗</td>
                                    <td>300元</td>
                                    <td>2019-3-4</td>
                                    <td>手术</td>
                                </tr>
                                <tr>
                                    <td>保罗</td>
                                    <td>300元</td>
                                    <td>2019-3-4</td>
                                    <td>手术</td>
                                </tr>
                                <tr>
                                    <td>保罗</td>
                                    <td>300元</td>
                                    <td>2019-3-4</td>
                                    <td>手术</td>
                                </tr>
                                <tr>
                                    <td>保罗</td>
                                    <td>300元</td>
                                    <td>2019-3-4</td>
                                    <td>手术</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                </div>

                <div className="detail2">
                    <div className="detai2_card1">
                        <h3>病人付款交易</h3>
                        <table>

                            <thead>
                                <tr>
                                    <th>日期</th>
                                    <th>成本</th>
                                    <th>折扣</th>
                                    <th>支付方式</th>
                                    <th>发票</th>
                                    <th>状态</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>2019-2-5</td>
                                    <td>20元</td>
                                    <td>14%</td>
                                    <td>信用卡</td>
                                    <td><span className="invo">发票</span></td>
                                    <td><span className="suc">已完成</span></td>
                                </tr>
                                <tr>
                                    <td>2019-2-5</td>
                                    <td>20元</td>
                                    <td>14%</td>
                                    <td>信用卡</td>
                                    <td><span className="invo">发票</span></td>
                                    <td><span className="suc">已完成</span></td>
                                </tr>
                                <tr>
                                    <td>2019-2-5</td>
                                    <td>20元</td>
                                    <td>14%</td>
                                    <td>信用卡</td>
                                    <td><span className="invo">发票</span></td>
                                    <td><span className="pend">等待</span></td>
                                </tr>
                                <tr>
                                    <td>2019-2-5</td>
                                    <td>20元</td>
                                    <td>14%</td>
                                    <td>信用卡</td>
                                    <td><span className="invo">发票</span></td>
                                    <td><span className="canc">取消</span></td>
                                </tr>
                                <tr>
                                    <td>2019-2-5</td>
                                    <td>20元</td>
                                    <td>14%</td>
                                    <td>信用卡</td>
                                    <td><span className="invo">发票</span></td>
                                    <td><span className="pend">等待</span></td>
                                </tr>
                                <tr>
                                    <td>2019-2-5</td>
                                    <td>20元</td>
                                    <td>14%</td>
                                    <td>信用卡</td>
                                    <td><span className="invo">发票</span></td>
                                    <td><span className="canc">取消</span></td>
                                </tr>
                                <tr>
                                    <td>2019-2-5</td>
                                    <td>20元</td>
                                    <td>14%</td>
                                    <td>信用卡</td>
                                    <td><span className="invo">发票</span></td>
                                    <td><span className="pend">等待</span></td>
                                </tr>
                                <tr>
                                    <td>2019-2-5</td>
                                    <td>20元</td>
                                    <td>14%</td>
                                    <td>信用卡</td>
                                    <td><span className="invo">发票</span></td>
                                    <td><span className="canc">取消</span></td>
                                </tr>
                                <tr>
                                    <td>2019-2-5</td>
                                    <td>20元</td>
                                    <td>14%</td>
                                    <td>信用卡</td>
                                    <td><span className="invo">发票</span></td>
                                    <td><span className="suc">已完成</span></td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                </div>

            </div>



        );
    }
}

export default Content;