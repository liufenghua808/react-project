import * as actionTypes from './actionTypes';
import {post,getPatient} from '../api_fn/index';


//用户登录
export function login(user,pw){
    return function(dispatch,getState){    
        return new Promise((resolve,reject)=>{
            post('/login',{
                user,
                pass:pw
            }).then(d=>{
                if(d.code === 0){
                    //成功
                    dispatch({
                        type:actionTypes.LOGIN,
                        data:d
                    })
                    resolve(d)
                }else{
                    dispatch({
                        type:actionTypes.ADDMSG,
                        msg:d.msg
                    })
                    reject(d)
                }
            })
        })
       
    }
}


export function getcookie(){
    return function(dispatch,getState){   
        getPatient('/get').then(d=>{
            if(d.code === 0){
                //成功
                dispatch({
                    type:actionTypes.LOGIN,
                    data:d
                })
            }else{
                dispatch({
                    type:actionTypes.ADDMSG,
                    msg:d.msg
                })
            }
        })
    }
}

//改变store数据
export function getAction(data){
    return {
        type:actionTypes.GETPATIENTDATA,
        data
    }
}

//给组件调用的
export function getDate(url){
    return function(dispatch,getState){
        getPatient(url).then(d=>{
            if(d.code === 0){
               dispatch(getAction(d.msg));
               console.log(d)
            }else{
                return false;
            }
        })
    }
}