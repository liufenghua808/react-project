import { BrowserRouter as Router,Route } from "react-router-dom";
import React,{Component} from 'react';
import routeConfig from './route_config';

function renderRoutes(routeConfig){
    return routeConfig.map((item,i)=>{
       
        return (
            <Route 
                {...{
                    key:i,
                    component:item.component,
                    path:item.path,
                    exact:item.exact || false
                }}
            />
        )
    })
}



class App extends Component {
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


