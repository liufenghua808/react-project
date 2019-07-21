import React, { Component } from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Breads from './childcom/breads';
import Row from './childcom/row';
import Footer from '../../components/footer/footer';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import {mapStateToProps} from '../../store/setmapstateprops'
import axios from 'axios';

class Home extends Component {
  state = {

  };
  //判断通过cookie判断是否登陆状态
  route_cookie() {
    axios.get('/setcookie').then(d => {
      if (d.data.code === 0) {
        console.log(d.data.msg)
      } else {
        alert(d.data.msg)
        let {history} =this.props;
        history.push('/login');
      }

    })
  }



  componentDidMount() {
    this.route_cookie();

  }

  render() {
    return (
      <>
        <Header />
        <Nav />
        <Breads />
        <Row />
        <Footer />


      </>
    );
  }
}

export default connect(mapStateToProps, actions)(Home);