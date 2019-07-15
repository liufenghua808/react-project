import React, { Component } from 'react';
import Header from '../../../components/header/header';
import Nav from '../../../components/nav/nav';
import Footer from '../../../components/footer/footer'
import Breads from './childcom/breads';
import Content from '../update-doctor/childcom/content';


class UpdateDoctor extends Component {
    state = {

    };


    render() {
        return (
            <>
                <Header />
                <Nav />
                <Breads />
                <Content />
                <Footer />


            </>
        );
    }
}

export default UpdateDoctor;