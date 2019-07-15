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
        <h2 className='bt'>医生管理</h2>
        <Breadcrumb className='breStyle'>
          <Breadcrumb.Item>
            <Icon className='fontcolor' type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <span>医生管理</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <span>医生详情</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

    );
  }
}

export default Breads;