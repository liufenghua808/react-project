import React, { Component } from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { mapStateToProps_patient } from '../../store/setmapstateprops';

class Nav extends Component {
    state = {

    };
   
    search_patient=()=>{
        let { getDate } = this.props;
        getDate('/patient/list');//获得病人信息
    }

    render() {

        return (
            <ul className="menu">
                <li>
                    <NavLink to='/home'>首页</NavLink>
                    <div className="arrow"></div>
                    <div className="zw"></div>
                    <ul className="submenu">
                        <li>
                            <NavLink to='/home'>首页</NavLink>
                        </li>


                    </ul>
                </li>

                <li>
                    <NavLink to='/search-patient'>病人管理</NavLink>
                    <div className="arrow"></div>
                    <div className="zw"></div>
                    <ul className="submenu">
                        <li>
                            <NavLink to='/add-patient'>添加病人信息</NavLink>
                        </li>
                        <li>
                            <NavLink to='/search-patient'  onClick={this.search_patient}>查看病人信息</NavLink>
                        </li>
                        <li>
                            <NavLink to='/patient-detail'>病人详情</NavLink>
                        </li>
                        <li>
                            <NavLink to='/update-patient'>编辑病人信息</NavLink>
                        </li>

                    </ul>
                </li>

                <li>
                    <NavLink to='/search-doctor'>医生管理</NavLink>
                    <div className="arrow"></div>
                    <div className="zw"></div>
                    <ul className="submenu">
                        <li>
                            <NavLink to='/add-doctor'>添加医生信息</NavLink>
                        </li>
                        <li>
                            <NavLink to='/search-doctor'>查看医生信息</NavLink>
                        </li>
                        <li>
                            <NavLink to='/doctor-detail'>医生详情</NavLink>
                        </li>
                        <li>
                            <NavLink to='/update-doctor'>编辑医生信息</NavLink>
                        </li>

                    </ul>
                </li>


                <li>
                    <NavLink to='/search-visit'>出诊管理</NavLink>
                    <div className="arrow"></div>
                    <div className="zw"></div>
                    <ul className="submenu">
                        <li>
                            <NavLink to='/add-visit'>添加出诊信息</NavLink>
                        </li>
                        <li>
                            <NavLink to='/search-visit'>查看出诊信息</NavLink>
                        </li>
                        <li>
                            <NavLink to='/visit-detail'>出诊详情</NavLink>
                        </li>
                        <li>
                            <NavLink to='/update-visit'>编辑出诊信息</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to='/search-ward'>病房分配</NavLink>
                    <div className="arrow"></div>
                    <div className="zw"></div>
                    <ul className="submenu">
                        <li>
                            <NavLink to='/add-ward'>添加病房信息</NavLink>
                        </li>
                        <li>
                            <NavLink to='/search-ward'>查看病房信息</NavLink>
                        </li>

                        <li>
                            <NavLink to='/update-ward'>编辑病房信息</NavLink>
                        </li>
                    </ul>
                </li>
                <li>  <NavLink to='/all-pay'>支付管理</NavLink>
                    <div className="arrow"></div>
                    <div className="zw"></div>
                    <ul className="submenu">
                        <li>
                            <NavLink to='/add-pay'>添加支付</NavLink>
                        </li>
                        <li>
                            <NavLink to='/all-pay'>所有支付</NavLink>
                        </li>

                        <li>
                            <NavLink to='/invoice'>发票</NavLink>
                        </li>

                    </ul>
                </li>
            </ul>
        );
    }
}

export default connect(mapStateToProps_patient,actions)(Nav);