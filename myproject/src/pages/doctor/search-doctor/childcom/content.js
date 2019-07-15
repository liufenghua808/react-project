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
                <h3>医生管理List</h3>

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
                            <th>医生ID</th>
                            <th>医生姓名</th>
                            <th>经验（年）</th>
                            <th>电话</th>
                            <th>专业化</th>
                            <th>情况</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >1</td>
                            <td>达尼尔</td>
                            <td>6</td>
                            <td >1432423432</td>
                            <td>耳鼻喉</td>
                            <td><span className="success">可出诊</span></td>

                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >2</td>
                            <td>若泰山</td>
                            <td>10</td>
                            <td >1432423432</td>
                            <td>肾科</td>
                            <td><span className="pending">休假</span></td>

                        </tr>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >3</td>
                            <td>海德</td>
                            <td>8</td>
                            <td >1432423432</td>
                            <td>眼科</td>
                            <td><span className="cancel">不出诊</span></td>

                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >4</td>
                            <td>达尼尔</td>
                            <td>6</td>
                            <td >1432423432</td>
                            <td>耳鼻喉</td>
                            <td><span className="success">可出诊</span></td>

                        </tr>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >5</td>
                            <td>达尼尔</td>
                            <td>6</td>
                            <td >1432423432</td>
                            <td>耳鼻喉</td>
                            <td><span className="success">可出诊</span></td>

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