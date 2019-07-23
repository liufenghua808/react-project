const express = require('express');
const router = express.Router();

const PatientModel = require('../../models/patient_model');


//删除病人数据
router.get('/', (req, res) => {
    let { ary } = req.query;
    ary = JSON.parse(ary);

    // console.log(ary)

    for (let attr in PatientModel) {
        for (let i = 0; i < ary.length; i++) {
            if (ary[i] == attr) {
                delete sql[attr];
                console.log(sql);
                break;
            }
        }
    }

    res.json({
        code: 0,
        msg: PatientModel
    })
});



module.exports = router;