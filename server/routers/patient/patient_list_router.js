const express = require('express');
const router = express.Router();

const PatientModel = require('../../models/patient_model');


//获取病人数据
router.get('/', (req, res) => {
   
    PatientModel.find({},(err,data)=>{
        //console.log(data)
        if(err){
            res.json({
                code:1,
                msg:'查询病人信息失败'
            })
        }

        if(data){
            res.json({
                code: 0,
                data,
                msg: '获取病人信息成功'
            })
        }


    })
  
})

module.exports = router;