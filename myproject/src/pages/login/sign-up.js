import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './login.css';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <main className="wrap">
                <h1>Sign Up</h1>
                <div className='form'>
                    <div className="ipt">
                        <input className="iptbg" name="email" type="email" placeholder="Email" />
                        <input className="iptbg" name="user" placeholder="Username" />
                        <input className="iptbg" type="password" placeholder="Password" />
                        <input className="iptbg" type="password" placeholder="Confirm Password" />

                    </div>

                    <div className="control">
                        <input type="checkbox" id="awesome" />
                        <label for="awesome">I agree to Terms & Conditions</label>
                    </div>

                    <div className="btnsubmit">
                        <NavLink to='/login'>
                        <button className="btn" type="button">Sign Up</button>
                        </NavLink>
                        
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


export default SignUp;

