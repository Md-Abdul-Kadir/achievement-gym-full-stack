import React from 'react';
import Carusol from '../Carusol/Carusol';
import Footer from '../Footer/Footer';
import Cardshome from '../HomeCompo/Cardshome';
import NavigationBar from '../NavigationBar/Navbar';

const Home = () => {
    return (
        <div>
            <div className="d-flex container">
                <p className="my-1"><small><i class="fas fa-paper-plane"></i> spport.admin@gmail.com</small></p>
                <p className="ms-auto my-1"><small><i class="fas fa-phone-alt"></i> 01791615539</small></p>
            </div>
            <NavigationBar></NavigationBar>
            <Carusol></Carusol>
            <Cardshome></Cardshome>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;