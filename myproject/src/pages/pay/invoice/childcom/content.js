import React, { Component } from 'react';
import './css/content.css'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div className="invoice">
                <div className="inv-sec">
                    <div className="inv1">
                        <div className="inv-logo"></div>
                        <p>街道地址:中国上海XXX</p>
                        <p>[城市，ST邮政编码]</p>
                        <p>电话：+00 123456 传真：432 1231 3456</p>
                    </div>
                    <div className="inv2">
                        <div className="inv-inf">发票</div>
                        <p>发票＃[123] </p>
                        <p>日期：2018年11月16日</p>
                    </div>
                </div>
                <h2 className="patient-inf">患者详情:</h2>
                <div className="pat-sec">
                    <div className="pat">
                        <p><span>姓名：</span> Daniel </p>
                        <p><span>年龄：</span> 20 </p>
                        <p><span>地址：</span>  60-21 / 100，Smith street Banglore，India </p>
                        <p><span>电话：</span>  +91 12345 67890 </p>
                       
                    </div>
                    <div className="pat">
                        <p><span>患者ID：</span>  PI675 </p>
                        <p><span>总天数：</span> 10 </p>
                        <p><b>付款方式：</b> 信用卡1234 5678 9012 3456 
Paypal </p>
                    </div>
                </div>

            </div>



        );
    }
}

export default Content;