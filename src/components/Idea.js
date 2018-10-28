import React from 'react';
import { NavLink } from "react-router-dom";

import Common from './Common';
import Footer from './common/Footer';
import Loader from './common/Loader';
import Links from './common/Links';
import Nav from './common/Nav';

class Idea extends Common {
    render() {
        return (
            <div className='Main'>
                <Loader />
                <div id="wrap" className="idea">
                    <Nav />
                    <div className="logo">        
                        <Links />
                        <section>    
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 idea-details" id="setTop">
                                        <div className="row">
                                            <h2>Barberian</h2> 
                                            <h3>miejsce, gdzie dbamy o atmosferę, samopoczucie, męskie twarze, fryzury, brody i zarosty.</h3>                    
                                            <p>Podtrzymując najstarsze tradycje, śledzimy światowe trendy, doskonalimy swoje umiejętności, świadomość, podejście do ludzi i kulturę. Jesteśmy otwarci i uważni na potrzeby naszych klientów.</p>                    
                                            <div className="top10 bottom20">
                                                <NavLink className="move-right high" to='/gallery'>
                                                    Zobacz naszą pracę <i className="fa fa-angle-double-right"></i>
                                                </NavLink>
                                            </div> 
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

export default Idea;