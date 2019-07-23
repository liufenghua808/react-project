import React, { Component } from 'react';
import Header from '../../../components/header/header';
import Nav from '../../../components/nav/nav';
import Footer from '../../../components/footer/footer'
import Breads from './childcom/breads';
import Content from './childcom/content';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import { mapStateToProps_patient } from '../../../store/setmapstateprops';
import { withRouter } from 'react-router-dom';


class SearchPatient extends Component {
    state = {

    };

    componentDidMount(){
        let { getDate } = this.props;
        console.log(111111111)
        getDate('/patient/list');//获得病人信息
    }

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


export default withRouter(connect(mapStateToProps_patient, actions)(SearchPatient));
