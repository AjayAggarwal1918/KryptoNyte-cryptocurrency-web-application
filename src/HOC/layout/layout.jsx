import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Particles from 'react-particles-js'

import './layout.css';


const Layout = (props) => {
    return (
        <>
            <Header />
            <div className="layout-content_container">
                <Particles
                    style={{
                        position: 'fixed',
                        height: '100vh',
                        zIndex: '-1'
                    }}
                    params={{
                        "particles": {
                            "number": {
                                "value": 150
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />
                {props.children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;