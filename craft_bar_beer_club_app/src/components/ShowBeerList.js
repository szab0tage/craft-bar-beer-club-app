import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import BeerCard from './BeerCard';

class ShowBeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/beers')
            .then(res => {
                this.setState({
                    beers: res.data
                })
            })
            .catch(err => {
                console.log('Error from ShowBeerList');
            })
    };


    render() {
        const beers = this.state.beers;
        console.log("PrintBeer: " + beers);
        let beerList;

        if (!beers) {
            beerList = "There is No Beer Record!";
        } else {
            beerList = beers.map((beer, k) =>
                <BeerCard beer={beer} key={k} />
            );
        }

        return (
            <div className="ShowBeerList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h4 className="display-9 text-center">The Craft Bar Beer Club</h4>
                            <h2 className="display-4 text-center">List of Beers</h2>
                        </div>

                        <div className="col-md-11">
                            <br />
                            <br />
                            <hr />
                        </div>

                    </div>

                    <div className="list">
                        {beerList}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowBeerList;