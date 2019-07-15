import * as actionTypes from '../actionTypes';

export default function (state={
    //未登录
    loginonOff:false,
    data:{
        user:'',
        type:0,
    },
    msg:''
},action){
    const o = JSON.parse(JSON.stringify(state));
    console.log(o);
    switch(action.type){
        case actionTypes.LOGIN:
            o.msg = action.data.msg;
            o.data = action.data.data;
            o.loginonOff = true;
            console.log(o);
            return o;
        default:
            return state;
    }
   
}