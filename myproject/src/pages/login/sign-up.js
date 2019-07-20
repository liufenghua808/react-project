import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/setmapstateprops';

import './login.css';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //获取用户名和密码
    signupFn = () => {
        console.log(this.props)
        let { signup,history } = this.props;
        let { user, pw,email } = this.refs;
        console.log(this.refs.user.value, this.refs.pw.value,this.refs.email.value)
        signup(user.value, pw.value,email.value)
        .then(d=>{
            history.push('/login');
        })
            
    }
    // componentDidMount() {
    //     let { loginonOff, history } = this.props;
    //     if (loginonOff) {
    //         history.push('/login');
    //     }

    // }
    // componentDidUpdate() {
    //     let { loginonOff, history } = this.props;
    //     if (loginonOff) {
    //         history.push('/login');
    //     }

    // }


    render() {
        return (
            <main className="wrap">
                <h1>Sign Up</h1>
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
                        <input 
                            className="iptbg" 
                            type="email" 
                            ref="email"
                            placeholder="EMAIL"
                        />
                    </div>

                    <div className="control">
                        <input type="checkbox" id="awesome" />
                        <label htmlFor="awesome">I agree to Terms & Conditions</label>
                    </div>

                    <div className="btnsubmit">
                            <input 
                                className="loginbtn" 
                                type="button"
                                value="Sign up"
                                onClick={this.signupFn}
                            />     

                    </div>

                    <div>
                        <small>Alredy Sign Up,
                        <NavLink to='/login'>Login</NavLink> Here</small>
                    </div>


                </div>

            </main>
        );
    }
}


export default connect(mapStateToProps,actions)(SignUp);

