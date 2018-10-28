import React from 'react';
import '../styles/App.scss';

import Common from './Common';
import Footer from './common/Footer';
import Loader from './common/Loader';
import Links from './common/Links';
import Nav from './common/Nav';

class Home extends Common {
    render() {
        return (
            <div className="Main">
                <Loader />
                <div id="wrap" className="index">
                    <Nav />
                    <div className="logo">
                        <Links />              
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
