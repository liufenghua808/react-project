import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import './css/bread.css';

class Breads extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (
      <div className='divStyle'>
        <h2 className='bt'>病人管理</h2>
        <Breadcrumb className='breStyle'>
          <Breadcrumb.Item>
            <Icon className='fontcolor' type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <span>病人管理</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <span>添加病人信息</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

    );
  }
}

export default Breads;