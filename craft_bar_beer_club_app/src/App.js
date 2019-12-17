import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBeer from './components/CreateBeer';
import ShowBeerList from './components/ShowBeerList';
import ShowBeerDetails from './components/ShowBeerDetails';
import UpdateBeerInfo from './components/UpdateBeerInfo';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={ShowBeerList} />
                    <Route path='/create-beer' component={CreateBeer} />
                    <Route path='/edit-beer/:id' component={UpdateBeerInfo} />
                    <Route path='/show-beer/:id' component={ShowBeerDetails} />
                </div>
            </Router>
        );
    }
}

export default App;