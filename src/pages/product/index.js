import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Product extends Component {
    state = {
        product: {}
    };

    async componentDidMount(){
        // obtendo a ID
        const { id } = this.props.match.params; // pega o 5 de /products/5

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state; // pra nao ter que ficar repetindo this.state.product

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>
        );
    }
}