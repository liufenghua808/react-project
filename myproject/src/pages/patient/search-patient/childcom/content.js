import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../childcom/css/themify-icons.css'
import './css/content.css';
import * as actions from '../../../../store/actions';
import { connect } from 'react-redux';
import { mapStateToProps_patient } from '../../../../store/setmapstateprops';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        let { getDate } = this.props;
        getDate('/patient/list');//获得病人信息

    }
    fillstate(sta) {
        switch (sta) {
            case 0:
                return "已完成"
            case 1:
                return "取消"
            case 2:
                return "等待"
        }
    }
    render() {

        console.log(this.props);
        let { data } = this.props;
        let list = '';
        if (data.length) {
            list = data.map((item, index) => {
                let classSta = '';
                if (item.newstatus === 0) {
                    classSta = 'success'
                } else if (item.newstatus === 1) {
                    classSta = 'cancel'
                } else if (item.newstatus === 2) {
                    classSta = 'pending'
                }
                return (
                    <tr className={index % 2 ? "even" : "odd"}>
                        <td className="tcontrol">
                            <input type="checkbox" id="tawesome1" />
                            <label htmlFor="tawesome1"></label>
                        </td>
                        <td >{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td >{item.telephone}</td>
                        <td>{item.lastvisit}</td>
                        <td><span className={classSta}>{this.fillstate(item.newstatus)}</span></td>

                    </tr>
                )
            })
        }


        return (
            <div className="content">
                <h3>病人管理List</h3>
                {/* show search */}
                <div className="second">
                    <div className="show">
                        <aria-label>
                            <span>显示</span>
                            <select>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                            </select>
                            <span>项</span>
                        </aria-label>

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
                            <th>病人ID</th>
                            <th>病人姓名</th>
                            <th>年龄</th>
                            <th>电话</th>
                            <th>上次访问</th>
                            <th>状态</th>

                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>

                {/* pagecontrl */}
                <div className="pagination">
                    <div className="showpage">显示 1 to 8条，总条数8条</div>
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

export default connect(mapStateToProps_patient, actions)(Content);