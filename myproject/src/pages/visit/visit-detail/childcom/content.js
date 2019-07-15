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

                <div className="appoin">
                    <div className="appoin-detail">
                        <h3>出诊信息</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>病人ID</td>
                                    <td>PTD32</td>
                                </tr>
                                <tr>
                                    <td>科室</td>
                                    <td>牙科</td>
                                </tr>
                                <tr>
                                    <td>医生姓名</td>
                                    <td>Loidel Doc</td>
                                </tr>
                                <tr>
                                    <td>出诊日期</td>
                                    <td>2019-3-4</td>
                                </tr>
                                <tr>
                                    <td>出诊时间段</td>
                                    <td>10AM-11AM</td>
                                </tr>
                                <tr>
                                    <td>Token Number</td>
                                    <td>56</td>
                                </tr>
                                <tr>
                                    <td>问题</td>
                                    <td>病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性病毒性</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <div className='visit-opr'>
                        <button className='del_btn' >删除出诊预约</button>
                        <button className='edit_btn' >编辑出诊预约</button>
                    </div>
                </div>

            </div>



        );
    }
}

export default Content;