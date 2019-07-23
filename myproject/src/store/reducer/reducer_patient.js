import * as actionTypes from '../actionTypes';


export default function (state = {
    data: {},
}, action) {
    let o = JSON.parse(JSON.stringify(state));
   // console.log('进来了patient')
    switch (action.type) {

        //获取病人信息数据
        case actionTypes.GETPATIENTDATA:
            o.data = action.data;
            console.log(o)
            return o;

        //勾选复选框
        case actionTypes.ONECHECK:
            
            let obj = o.data.find(item => +item.id === action.id);
            console.log(obj)
            if (obj) {
                obj.checked = !obj.checked;
            }
           // console.log(o)
            return o;

        //全选勾选
        case actionTypes.ALLCHECK:
            o.data.forEach(item => {
                item.checked = action.checked;
            });
            console.log(o)
            return o;

        default:
            return state;
    }

}