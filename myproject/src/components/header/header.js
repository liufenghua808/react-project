import React, { Component } from 'react';
import './header.css';
import '../../components/themify-icons.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="blockbg"></div>
                <header className="header">
                    <span className="logo" ></span>
                    <ul className="head-item">
                        <li className="item">
                            <span title="Fullscreen" className="ti-fullscreen fullscreen"></span>

                        </li>
                        <li className="item">
                            <span className="ti-search search"></span>
                            <div className="head-search">
                                <div className="bt">Search Patient/医生:</div>
                                <label>
                                    <input className="sea-con" type="text" placeholder="Type text here" />
                                </label>
                                <div className="sear">
                                    <button>Search</button>
                                </div>
                            </div>
                        </li >
                        <li className="item">
                            <span className="ti-announcement announcement"></span>
                        </li >
                        <li className="item">
                            <span className="ti-user user"></span>
                        </li >
                    </ul >



                </header >
            </div>
        );
    }
}

export default Header;