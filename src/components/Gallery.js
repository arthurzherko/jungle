import React from 'react';

import Common from './Common';
import Footer from './common/Footer';
import Loader from './common/Loader';
import Links from './common/Links';
import Nav from './common/Nav';

class Gallery extends Common {
    render() {
        return (
            <div className='Main'>
                <Loader />
                <div id="wrap" className="gallery">
                    <Nav />
                    <Links />
                    <section>    
                        <div className="container-fluid">
                            <div className="row">
                                
                                <a data-gallery="1" href="images/1.jpg" title="Barberian - galeria">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 item">                 
                                        <div className="row">
                                            <img src="images/1.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>
                                <a data-gallery="1" href="images/2.jpg" title="Barberian - galeria">
                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 item">                 
                                        <div className="row">
                                            <img src="images/2.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>
                                <a data-gallery="1" href="images/3.jpg" title="Barberian - galeria">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 item">                 
                                        <div className="row">
                                            <img src="images/3.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>
                                
                                <div className="clearfix"></div>            
                                
                                <a data-gallery="1" href="images/5.jpg" title="Barberian - galeria">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 item">                 
                                        <div className="row">
                                            <img src="images/5.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>
                                <a data-gallery="1" href="images/6.jpg" title="Barberian - galeria">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 item">                 
                                        <div className="row">
                                            <img src="images/6.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>
                                <a data-gallery="1" href="images/4.jpg" title="Barberian - galeria">
                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 item">                 
                                        <div className="row">
                                            <img src="images/4.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>            
                                
                                <div className="clearfix"></div>
                                
                                
                                <a data-gallery="1" href="images/7.jpg" title="Barberian - galeria">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 item">                 
                                        <div className="row">
                                            <img src="images/7.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>
                                <a data-gallery="1" href="images/8.jpg" title="Barberian - galeria">
                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 item">                 
                                        <div className="row">
                                            <img src="images/8.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>
                                <a data-gallery="1" href="images/9.jpg" title="Barberian - galeria">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 item">                 
                                        <div className="row">
                                            <img src="images/9.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>
                                
                                
                                <div className="clearfix"></div>
                                
                                <a data-gallery="1" href="images/12.jpg" title="Barberian - galeria">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                                        <div className="row">
                                            <img src="images/12.jpg" alt='slave' /> 
                                        </div>
                                    </div>
                                </a>                        
                                <a data-gallery="1" href="images/11.jpg" title="Barberian - galeria">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 item">
                                        <div className="row">
                                            <img src="images/11.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>
                                <a data-gallery="1" href="images/10.jpg" title="Barberian - galeria">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 item">
                                        <div className="row">
                                            <img src="images/10.jpg" alt='slave' />
                                        </div>
                                    </div>
                                </a>            

                                <div className="clearfix"></div>
                                
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Gallery;