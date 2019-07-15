import * as actionTypes from '../actionTypes';


export default function (state={
    data:{},
},action){
    let o = JSON.parse(JSON.stringify(state));
    console.log('进来了')
    switch(action.type){
       
        case actionTypes.GETPATIENTDATA:
            o.data = action.data;
            console.log(o.data)
            return o;

        default :
            return state;
    }
    
}