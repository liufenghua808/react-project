import React, { Component } from 'react';
import './css/content.css';
import { NavLink } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div className="content">
                <h3>出诊管理List</h3>

                {/* show search */}
                <div className="second">
                    <div className="show">
                        <lable>
                            <span>显示</span>
                            <select>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                            </select>
                            <span>项</span>
                        </lable>

                    </div>
                    <div className="sea">
                        <label>
                            <span>搜索:</span>
                            <input type="text" />
                        </label>


                    </div>
                </div>

                {/* table */}
                <table className="tlist">
                    <thead>
                        <tr className="odd">
                            <th className="tcontrol">
                                <input type="checkbox" id="tawesome" />
                                <label htmlFor="tawesome"></label>
                            </th>
                            <th>预约ID</th>
                            <th>病人ID</th>
                            <th>Token Number</th>
                            <th>医生姓名</th>
                            <th>问题</th>
                            <th>状态</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="success">活性</span></td>
                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="pending">观察期</span></td>
                        </tr>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="pending">观察期</span></td>
                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="pending">观察期</span></td>
                        </tr>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="success">活性</span></td>
                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="success">活性</span></td>
                        </tr>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="success">活性</span></td>
                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="success">活性</span></td>
                        </tr>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="success">活性</span></td>
                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >153532</td>
                            <td>6666</td>
                            <td>AAD44</td>
                            <td >Drnel Doctor</td>
                            <td>病毒性发烧</td>
                            <td><span className="success">活性</span></td>
                        </tr>


                    </tbody>
                </table>

                {/* pagecontrl */}
                <div className="pagination">
                    <div className="showpage">显示 1 to 10条，总条数12条</div>
                    <ul className="pagecontrol">
                        <li>
                            <NavLink className="pagenum prev unselec" to="/">上一页</NavLink>
                        </li>
                        <li>
                            <NavLink className="pagenum act" to="/">1</NavLink>
                        </li>
                        <li>
                            <NavLink className="pagenum selec" to="/">2</NavLink>
                        </li>
                        <li>
                            <NavLink className="pagenum next selec" to="/">下一页</NavLink>
                        </li>
                    </ul>
                </div>

                {/* del edit */}
                <div className='opera_btn'>
                    <button className='del_btn' >删除</button>
                    <button className='edit_btn' >修改</button>
                </div>

            </div>



        );
    }
}

export default Content;