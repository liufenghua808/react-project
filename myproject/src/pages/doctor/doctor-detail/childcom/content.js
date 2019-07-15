import React, { Component } from 'react';
import './css/content.css';
import doctorphoto from '../../../../images/doctor1.png'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="detail">
                <div className="doc_detail1">
                    <h3 className="doc_det">医生详情</h3>
                    <div className="doc_name">
                        <img className="photo" src={doctorphoto} alt=""/>
                        <h1>Daniel Smith博士</h1>
                    </div>
                    <div className="doc_detail_card1">
                        <table>
                            <tbody>
                                <tr>
                                    <td>专业化</td>
                                    <td>全科医生</td>
                                </tr>
                                <tr>
                                    <td>经验</td>
                                    <td>13年</td>
                                </tr>
                                <tr>
                                    <td>性别</td>
                                    <td>男</td>
                                </tr>
                                <tr>
                                    <td>地址</td>
                                    <td>美国美国美国</td>
                                </tr>
                                <tr>
                                    <td>电话</td>
                                    <td>1234565678</td>
                                </tr>
                                <tr>
                                    <td>出生日期</td>
                                    <td>1987-3-5</td>
                                </tr>
                                <tr>
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
                </div>



                <div className="doc_detail2">
                    <div className="doc_detai2_card1">
                        <h3>医生活动</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>病人姓名</th>
                                    <th>受伤情况</th>
                                    <th>访问日期</th>
                                    <th>备注</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>tom</td>
                                    <td>发热</td>
                                    <td>2019-4-6</td>
                                    <td>条件一般</td>
                                </tr>
                                <tr>
                                    <td>阿德</td>
                                    <td>感冒</td>
                                    <td>2019-7-6</td>
                                    <td>恢复中</td>
                                </tr>
                                <tr>
                                    <td>tom</td>
                                    <td>发热</td>
                                    <td>2019-4-6</td>
                                    <td>条件一般</td>
                                </tr>
                                <tr>
                                    <td>tom</td>
                                    <td>发热</td>
                                    <td>2019-4-6</td>
                                    <td>条件一般</td>
                                </tr>
                                <tr>
                                    <td>阿德</td>
                                    <td>感冒</td>
                                    <td>2019-7-6</td>
                                    <td>恢复中</td>
                                </tr>
                                <tr>
                                    <td>tom</td>
                                    <td>发热</td>
                                    <td>2019-4-6</td>
                                    <td>条件一般</td>
                                </tr>
                                <tr>
                                    <td>tom</td>
                                    <td>发热</td>
                                    <td>2019-4-6</td>
                                    <td>条件一般</td>
                                </tr>
                                <tr>
                                    <td>阿德</td>
                                    <td>感冒</td>
                                    <td>2019-7-6</td>
                                    <td>恢复中</td>
                                </tr>
                                <tr>
                                    <td>tom</td>
                                    <td>发热</td>
                                    <td>2019-4-6</td>
                                    <td>条件一般</td>
                                </tr>
                                <tr>
                                    <td>tom</td>
                                    <td>发热</td>
                                    <td>2019-4-6</td>
                                    <td>条件一般</td>
                                </tr>
                                <tr>
                                    <td>阿德</td>
                                    <td>感冒</td>
                                    <td>2019-7-6</td>
                                    <td>恢复中</td>
                                </tr>
                                <tr>
                                    <td>tom</td>
                                    <td>发热</td>
                                    <td>2019-4-6</td>
                                    <td>条件一般</td>
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