import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from 'react';
import routeConfig from './route_config';
// import axios from 'axios';

function renderRoutes(routeConfig) {
    return routeConfig.map((item, i) => {

        return (
            <Route
                {...{
                    key: i,
                    component: item.component,
                    path: item.path,
                    exact: item.exact || false
                }}
            />
        )
    })
}



class App extends Component {

    // //判断通过cookie判断是否登陆状态
    // route_cookie() {
    //     axios.get('/setcookie').then(d => {
    //         if (d.data.code === 0) {
    //             console.log(d.data.msg)
    //         } else {
    //             console.log(d.data.msg)
    //         }

    //     })
    // }

    

    // componentDidMount() {
    //     this.route_cookie();

    // }
    render() {
        // console.log(1);
        return (
            <Router>
                {renderRoutes(routeConfig)}
            </Router>
        )

    }
}

export default App;


