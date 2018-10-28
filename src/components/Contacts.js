import React from 'react';

import Common from './Common';
import Footer from './common/Footer';
import Loader from './common/Loader';
import Links from './common/Links';
import Nav from './common/Nav';

class Contacts extends Common {
    render() {
        return (
            <div className='Main'>
                <Loader />
                <div id="wrap" className="contact">
                    <Nav />
                    <div className="logo">        
                        <Links />
                        <section>    
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-details bottom30" id="setTop">
                                        <div className="row">
                                            <p className="text-uppercase"><strong>Warszawa</strong></p>
                                            <p>ul. Emilii Plater 25</p>                        
                                            <p>pon - pt 8<sup>00</sup> - 18<sup>00</sup></p>
                                            <p>sob 9<sup>00</sup> - 15<sup>00</sup></p>

                                            <p className="space1">ul. Kredytowa 9</p>
                                            <p>wt - pt 10<sup>00</sup> - 20<sup>00</sup></p>
                                            <p>sob 11<sup>00</sup> - 17<sup>00</sup></p>

                                            <p className="space1">ul. Górnośląska 7a LU 1</p>
                                            <p>wt - pt 8<sup>00</sup> - 18<sup>00</sup></p>
                                            <p>sob 9<sup>00</sup> - 17<sup>00</sup></p>
                                            
                                            <p className="text-uppercase space2"><strong>Gdańsk</strong></p>
                                            <p>ul. Wyspiańskiego 28/1</p>
                                            <p>pon - pt 8<sup>00</sup> - 19<sup>00</sup></p>
                                            <p>sob 10<sup>00</sup> - 16<sup>00</sup></p>

                                            <p className="hr hidd1en-xs"></p>
                                            <p className="space1">m. 570 710 516</p>
                                            <p className="text-uppercase"><a href="mailto:office@barberian.pl">office@barberian.pl</a></p>
                                            <p><a href="https://www.facebook.com/BarberianBarbershop" target="_blank" rel="noopener noreferrer">Facebook</a></p>
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

export default Contacts;