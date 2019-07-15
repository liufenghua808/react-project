import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="content">
                <h3>病房分配List</h3>
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
                            <th>房间</th>
                            <th>房型</th>
                            <th>病人姓名</th>
                            <th>分配日期</th>
                            <th>出院日期</th>
                            <th>医生姓名</th>
                            <th>状态</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr  className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >10</td>
                            <td >ICU</td>
                            <td >沃尔</td>
                            <td>2019-3-5</td>
                            <td>2019-7-2</td>
                            <td >DenalDoctor</td>
                            <td><span className="success">可分配</span></td>

                        </tr>
                        <tr  className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome2" />
                                <label htmlFor="tawesome2"></label>
                            </td>
                            <td >130</td>
                            <td >ICU</td>
                            <td >阿飞</td>
                            <td>2019-3-5</td>
                            <td>2019-7-2</td>
                            <td >DenalDoctor</td>
                            <td><span className="pending">预约中</span></td>

                        </tr>
                        <tr  className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome3" />
                                <label htmlFor="tawesome3"></label>
                            </td>
                            <td >089</td>
                            <td >AC室</td>
                            <td >菲斯</td>
                            <td>2019-3-5</td>
                            <td>2019-7-2</td>
                            <td >DenalDoctor</td>
                            <td><span className="cancel">不可分配</span></td>

                        </tr>
                        <tr  className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome2" />
                                <label htmlFor="tawesome2"></label>
                            </td>
                            <td >130</td>
                            <td >ICU</td>
                            <td >阿飞</td>
                            <td>2019-3-5</td>
                            <td>2019-7-2</td>
                            <td >DenalDoctor</td>
                            <td><span className="pending">预约中</span></td>

                        </tr>
                        <tr  className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome3" />
                                <label htmlFor="tawesome3"></label>
                            </td>
                            <td >089</td>
                            <td >AC室</td>
                            <td >菲斯</td>
                            <td>2019-3-5</td>
                            <td>2019-7-2</td>
                            <td >DenalDoctor</td>
                            <td><span className="cancel">不可分配</span></td>

                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome2" />
                                <label htmlFor="tawesome2"></label>
                            </td>
                            <td >130</td>
                            <td >ICU</td>
                            <td >阿飞</td>
                            <td>2019-3-5</td>
                            <td>2019-7-2</td>
                            <td >DenalDoctor</td>
                            <td><span className="pending">预约中</span></td>

                        </tr>
                        <tr  className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome3" />
                                <label htmlFor="tawesome3"></label>
                            </td>
                            <td >089</td>
                            <td >AC室</td>
                            <td >菲斯</td>
                            <td>2019-3-5</td>
                            <td>2019-7-2</td>
                            <td >DenalDoctor</td>
                            <td><span className="cancel">不可分配</span></td>

                        </tr>
                      
                      
                    </tbody>
                </table>

                {/* pagecontrl */}
                <div className="pagination">
                    <div className="showpage">显示 1 to 10条，总条数11条</div>
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