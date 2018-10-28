import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './Home';
import Contacts from './Contacts';
import Team from './Team';
import WhatWeAre from './WhatWeAre';
import Idea from './Idea';
import Gallery from './Gallery';

class App extends Component {
    
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/contacts' component={Contacts}/>
                <Route path='/team' component={Team}/>
                <Route path='/what-we-are' component={WhatWeAre}/>
                <Route path='/idea' component={Idea}/>
                <Route path='/gallery' component={Gallery}/>
                {/* <Route path='/schedule' component={Schedule}/> */}
            </Switch>
        );
    }
}

export default App;