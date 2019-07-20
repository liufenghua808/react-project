import axios from 'axios';


//请求用户名数据
export async function postuser(url,data){
    return  axios.post(url,''+new URLSearchParams(data)).then(d=>d.data)
}

// export async function getuser(url){
//     return  axios.get(url).then(d=>d.data)
// }    

//请求病人信息数据
export async function getPatient(url){
    return await axios.get(url).then(d=>d.data)
}

