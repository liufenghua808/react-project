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
                <h3>付款List</h3>

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
                            <th>病人姓名</th>
                            <th>医生姓名</th>
                            <th>服务名称</th>
                            <th>收费</th>
                            <th>折扣（%）</th>
                            <th>状态</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >Roubt</td>
                            <td>达尼尔</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="success">完成</span></td>

                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >Bell</td>
                            <td>达尼尔</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="cancel">取消</span></td>

                        </tr>
                        <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >Lilyer</td>
                            <td>达尼尔</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="success">完成</span></td>

                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >lili</td>
                            <td>Lilyer</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="cancel">取消</span></td>

                        </tr>   <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >Lilyer</td>
                            <td>达尼尔</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="success">完成</span></td>

                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >lili</td>
                            <td>Lilyer</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="cancel">取消</span></td>

                        </tr>   <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >lili</td>
                            <td>达尼尔</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="pending">等待</span></td>

                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >lili</td>
                            <td>达尼尔</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="cancel">取消</span></td>

                        </tr>   <tr className="even">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >lili</td>
                            <td>达尼尔</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="success">完成</span></td>

                        </tr>
                        <tr className="odd">
                            <td className="tcontrol">
                                <input type="checkbox" id="tawesome1" />
                                <label htmlFor="tawesome1"></label>
                            </td>
                            <td >lili</td>
                            <td>达尼尔</td>
                            <td>X射线</td>
                            <td >435元</td>
                            <td>12</td>
                            <td><span className="cancel">取消</span></td>

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