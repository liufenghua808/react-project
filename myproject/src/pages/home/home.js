import React, { Component } from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Breads from './childcom/breads';
import Row from './childcom/row';
import Footer from '../../components/footer/footer'


class Home extends Component {
  state = {
   
  };


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

export default Home;