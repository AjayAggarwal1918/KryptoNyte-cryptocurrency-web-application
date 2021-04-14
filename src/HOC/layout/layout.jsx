import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './layout.css';


const Layout = (props) => {
    return (
        <>
            <Header />
            <div className="layout-content_container">
                {props.children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;