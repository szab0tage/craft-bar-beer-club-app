import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class CreateBeer extends Component {
    constructor() {
        super();
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
            .post('http://localhost:8082/api/beers', data)
            .then(res => {
                this.setState({
                    name: '',
                    sku: '',
                    brewery: '',
                    location: '',
                    style_type: '',
                    description: '',
                    in_stock: ''
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in CreateBeer!");
            })
    };

    render() {
        return (
            <div className="CreateBeer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add Beer</h1>
                            <p className="lead text-center">
                                Create New Beer
              </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
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
                                    <input
                                        type='text'
                                        placeholder='Is This Beer In-Stock?'
                                        name='in_stock'
                                        className='form-control'
                                        value={this.state.in_stock}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBeer;