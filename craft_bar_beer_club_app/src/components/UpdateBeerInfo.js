import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class UpdateBeerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sku: '',
            brewery: '',
            location: '',
            style_type: '',
            description: '',
            in_stock: ''
        };
    }

    componentDidMount() {
        // console.log("Print id: " + this.props.match.params.id);
        axios
            .get('http://localhost:8082/api/beers/' + this.props.match.params.id)
            .then(res => {
                // this.setState({...this.state, beer: res.data})
                this.setState({
                    name: res.data.name,
                    sku: res.data.sku,
                    brewery: res.data.brewery,
                    location: res.data.location,
                    style_type: res.data.style_type,
                    description: res.data.description,
                    in_stock: res.data.in_stock
                })
            })
            .catch(err => {
                console.log("Error from UpdateBeerInfo");
            })
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            sku: this.state.sku,
            brewery: this.state.brewery,
            location: this.state.location,
            style_type: this.state.style_type,
            description: this.state.description,
            in_stock: this.state.in_stock
        };

        axios
            .put('http://localhost:8082/api/beers/' + this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/show-beer/' + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in UpdateBeerInfo!");
            })
    };


    render() {
        return (
            <div className="UpdateBeerInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Edit Beer</h1>
                            <p className="lead text-center">
                                Update Beer's Info
              </p>
                        </div>
                    </div>

                    <div className="col-md-8 m-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="name">Name</label>
                                <input
                                    type='text'
                                    placeholder='Name of Beer'
                                    name='name'
                                    className='form-control'
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="sku">SKU</label>
                                <input
                                    type='number'
                                    placeholder='SKU Number'
                                    name='sku'
                                    className='form-control'
                                    value={this.state.sku}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="brewery">Brewery</label>
                                <input
                                    type='text'
                                    placeholder='Brewery'
                                    name='brewery'
                                    className='form-control'
                                    value={this.state.brewery}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="location">Location</label>
                                <input
                                    type='text'
                                    placeholder='Location of Brewery'
                                    name='location'
                                    className='form-control'
                                    value={this.state.location}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="style_type">Style/Type</label>
                                <input
                                    type='text'
                                    placeholder='Style/Type of Beer'
                                    name='style_type'
                                    className='form-control'
                                    value={this.state.style_type}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="description">Description</label>
                                <input
                                    type='text'
                                    placeholder='Description'
                                    name='description'
                                    className='form-control'
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="in_stock">In-Stock?</label>
                                <input
                                    type='text'
                                    placeholder='Is This Beer In-Stock?'
                                    name='in_stock'
                                    className='form-control'
                                    value={this.state.in_stock}
                                    onChange={this.onChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Beer</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateBeerInfo;