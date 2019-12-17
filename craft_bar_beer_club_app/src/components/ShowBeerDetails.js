import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBeerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: {}
        };
    }

    componentDidMount() {
        // console.log("Print id: " + this.props.match.params.id);
        axios
            .get('http://localhost:8082/api/beers/' + this.props.match.params.id)
            .then(res => {
                // console.log("Print-showBeerDetails-API-response: " + res.data);
                this.setState({
                    beer: res.data
                })
            })
            .catch(err => {
                console.log("Error from ShowBeerDetails");
            })
    };

    onDeleteClick(id) {
        axios
            .delete('http://localhost:8082/api/beers/' + id)
            .then(res => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log("Error form ShowBeerDetails_deleteClick");
            })
    };


    render() {

        const beer = this.state.beer;
        let BeerItem = <div>
            <table className="table table-hover table-dark">
                {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Name of Beer</td>
                        <td>{beer.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>SKU Number</td>
                        <td>{beer.sku}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Brewery</td>
                        <td>{beer.brewery}</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Location</td>
                        <td>{beer.location}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Style/Type of Beer</td>
                        <td>{beer.style_type}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Description</td>
                        <td>{beer.description}</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>In-Stock?</td>
                        <td>{beer.in_stock}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        return (
            <div className="ShowBeerDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <br /> <br />
                        </div>
                        <br />
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Beer Details</h1>
                            <p className="lead text-center">
                                View Beer's Info
              </p>
                            <hr /> <br />
                        </div>
                    </div>
                    <div>
                        {BeerItem}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this, beer._id)}>Delete Beer</button><br />
                        </div>

                        <div className="col-md-6">
                            <Link to={`/edit-beer/${beer._id}`} className="btn btn-outline-info btn-lg btn-block">
                                Edit Beer
              </Link>
                            <br />
                        </div>

                    </div>
                    {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Beer</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Beer</button> */}

                </div>
            </div>
        );
    }
}

export default showBeerDetails;