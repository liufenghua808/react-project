import React, { Component } from 'react';
import * as actions from '../../store/actions';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/setmapstateprops';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    create = () => {
        this.props.create();
    }

    //获取用户名和密码
    loginFn = () => {
        let { login} = this.props;
        let { user, pw } = this.refs;
        console.log(this.refs.user.value,this.refs.pw.value)
        login(user.value, pw.value)
        .then((d)=>{
            if(d.code===0){
                alert(d.msg);
                //setcookie();
            }
             
        }).catch((err)=>{
            console.log(err)
        });
    }
    componentDidMount() {
       // this.props.getcookie();
        let { loginonOff, history } = this.props;
        if (loginonOff) {
            history.push('/home');
        }

    }
    componentDidUpdate() {
        let { loginonOff, history } = this.props;
        //console.log('数据改变', loginonOff)
       // console.log(this.props)
        if (loginonOff) {
            history.push('/home');
        }

    }

    render() {
        return (
            <main className="wrap">
                <h1>Login</h1>
                <div className='form'>
                    <div className="ipt">
                        <input 
                            className="iptbg" 
                            type="text"
                            placeholder="USER"
                            ref="user"
                        />
                        <input 
                            className="iptbg" 
                            type="password" 
                            placeholder="PASSWORD"  
                            ref="pw" 
                        />
                    </div>

                    <div className="control">
                        <input type="checkbox" id="awesome" />
                        <label htmlFor="awesome">Remember Me</label>
                    </div>

                    <div className="btnsubmit">
                            <input 
                                className="loginbtn" 
                                type="button"
                                value="Login"
                                onClick={this.loginFn}
                            />     

                    </div>


                    <div>
                        <small>New User,
                        <NavLink to="/sign-up">sign up</NavLink> Here
                        </small>
                    </div>


                </div>

            </main>
        );
    }
}


export default connect(mapStateToProps,actions)(Login);

