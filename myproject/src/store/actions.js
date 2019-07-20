import * as actionTypes from './actionTypes';
import { postuser, getPatient } from '../api_fn/index';


//用户登录
export function login(user, pw) {
    return function (dispatch, getState) {
        return new Promise((resolve, reject) => {
            postuser('/login', {
                user,
                pass: pw
            })
                .then(d => {
                    if (d.code === 0) {
                        //成功
                        dispatch({
                            type: actionTypes.LOGIN,
                            data: d
                        })
                        resolve(d)
                    } else {
                        dispatch({
                            type: actionTypes.ADDMSG,
                            msg: d.msg
                        })
                        reject(d)
                    }
                })
        })

    }
}
//用户注册
export function signup(user, pw, email) {
    return function (dispatch, getState) {
        return postuser('/signup', {
                user,
                pass: pw,
                email
            }).then(d => {
                if (d.code === 0) {
                    alert(d.msg);
                   return Promise.resolve(d)
                } else {
                    alert(d.msg)
                    return Promise.reject(d)
                }
            })

    }
}


// //找cookie
// export function setcookie(){
//     return function(dispatch,getState){   
//         getuser('/setcookie').then(d=>{
//             if(d.code === 0){
//                 //成功
//                 console.log(d.msg)
//             }else{
//                 console.log(d.msg)
//             }
//         })
//     }
// }

//改变store数据
export function getAction(data) {
    return {
        type: actionTypes.GETPATIENTDATA,
        data
    }
}

//给组件调用的
export function getDate(url) {
    return function (dispatch, getState) {
        return new Promise((resolve,reject)=>{
            getPatient(url).then(d => {
                if (d.code === 0) {                  
                  
                    dispatch(getAction(d.data));
                    resolve(d)   
                } else {
                    return false;
                }
            })
        })
        
    }
}

//用户注册
export function patientadd(name, age, email) {
    return function (dispatch, getState) {
        console.log(123);
        return postuser('/patient/add', {
                name,
                age,
                email
            }).then(d => {
                console.log(d);
                if (d.code === 0) {
                    console.log(d);
                   return Promise.resolve(d)
                } else {
                    alert(d.msg)
                    return Promise.reject(d)
                }
            })

    }
}


//单选复选款勾选
export function onecheck(id) {
    return {
        type: actionTypes.ONECHECK,
        id
    }
}

//全选勾选
export function allcheck(ischeck) {
    console.log(ischeck)
    return {
        type: actionTypes.ALLCHECK,
        checked: ischeck
    }
}