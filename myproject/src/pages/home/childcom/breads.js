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
        <h2 className='bt'>快速统计</h2>

        <Breadcrumb className='breStyle'>
          <Breadcrumb.Item>
            <Icon className='fontcolor' type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item className='fontcolor'>首页</Breadcrumb.Item>
        </Breadcrumb>
      </div>

    );
  }
}

export default Breads;