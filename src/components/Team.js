import React from 'react';
import { NavLink } from "react-router-dom";

import Common from './Common';
import Footer from './common/Footer';
import Loader from './common/Loader';
import Links from './common/Links';
import Nav from './common/Nav';

class Team extends Common {
    render() {
        return (
            <div className='Main'>
                <Loader />
                <div id="wrap" className="team">
                    <Nav />
                    <div className="logo">        
                        <Links />
                        <section>    
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 team-details" id="setTop">
                                        <div className="row">
                                            <NavLink className="move-right" to='/what-we-are'>
                                                Zobacz nasz team <i className="fa fa-angle-double-right"></i>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Team;