import React, { Component } from 'react';
import './css/content.css';
import * as actions from '../../../../store/actions';
import { connect } from 'react-redux';
import { mapStateToProps_patient } from '../../../../store/setmapstateprops';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { sexs: '男', newstatus: '2' }
    }

    handleChange = (event) => {
        this.setState({ sexs: event.target.value, newstatus:event.target.value});
    }


    subFn = () => {
        console.log(this.props)
        let { patientadd,history} = this.props;
        let { name, birthday, age, sex, email, telephone, newstatus,address, file } = this.refs;
        patientadd(name.value, birthday.value, age.value, sex.value, email.value, telephone.value,newstatus.value, address.value, file.value)
        .then(d=>{
           if(d.code===0){
            history.push('/search-patient');
           }
        });
    }

    //判断通过cookie判断是否登陆状态
    route_cookie() {
        axios.get('/setcookie').then(d => {
            if (d.data.code === 0) {
                console.log(d.data.msg)
            } else {
                console.log(d.data.msg)
            }

        })
    }

    componentDidMount() {
        this.route_cookie();

    }

   


    render() {
        return (
            <div className="content">
                <h3>添加病人信息</h3>
                <div className="title">
                    <div className='piece-left'>
                        <p>病人姓名</p>
                        <input type='text' placeholder="病人姓名" ref="name" />
                    </div>
                    <div className='piece-right'>
                        <p>出生日期</p>
                        <input type='date' placeholder="出生日期" ref="birthday" />
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>年龄</p>
                        <input type='text' placeholder="年龄" ref="age" />
                    </div>
                    <div className='piece-right'>
                        <p>性别</p>
                        <select className="sex" value={this.state.sexs} ref="sex" onChange={this.handleChange}>
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>电子邮件</p>
                        <input type='text' placeholder="电子邮件" ref="email" />
                    </div>
                    <div className='piece-right'>
                        <p>电话</p>
                        <input type='text' placeholder="电话" ref="telephone" />
                    </div>
                </div>
                <div className="title">
                    <div className='piece-left'>
                        <p>状态</p>
                        <select className="newstatus" ref="newstatus" value={this.state.newstatus} onChange={this.handleChange}>
                            <option value='0'>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>

                </div>
                <div className="title">
                    <div className='adress'>
                        <p>地址</p>
                        <textarea type='text' placeholder="地址" ref="address" />
                    </div>

                </div>
                {/* 文件上传 */}
                <div className="title">
                    <div className='file'>
                        <p>上传文件</p>
                        <input className='fileload' type='file' ref="file" />
                    </div>
                </div>
                {/* 确认信息 */}
                <div className="control">
                    <span>**</span>
                    <input type="checkbox" id="awesome" />
                    <label htmlFor="awesome">请确认所填信息</label>
                </div>
                {/* 提交 */}
                <div className='add_subm'>
                    <button className='add_btn' type='submit' onClick={this.subFn}>提交</button>
                </div>
            </div>
        );
    }
}


export default withRouter(
    connect(mapStateToProps_patient, actions)(Content)
);
