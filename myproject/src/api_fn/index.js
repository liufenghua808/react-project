import axios from 'axios';


//请求用户名数据
export async function post(url,data){
    return  axios.post(url,''+new URLSearchParams(data)).then(d=>d.data)
}   

//请求病人信息数据
export async function getPatient(data){
    return await axios.get(data).then(d=>d.data)
}

