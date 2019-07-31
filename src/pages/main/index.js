import React, { Component } from 'react';
import api from '../../services/api';

export default class main extends Component {

    /**
     * No React se trabalha com o conceito de Estados.
     * Aqui não podemos simplesmente criar uma variável como no Angular.
     * Se cria então um objeto state que conterá as variáveis.
     * 
     * Isso para que o método render() possa trabalhar com as variáveis.
     * 
     * PAra atribuir algum valor devemos usar o this.setState({ products: response.data.docs })
     */

    state = {
        products: []
    };

    componentDidMount() { // ciclo de vida, executa assim que o component mostra na tela
        this.loadProducts();
    }

    // para funÇões criadas por nós DEVE ser uma arrow function
    // senão esta função não irá enxergar o escopo fora dele (this, por exemplo)
    // ou seja, o arrow functions não sobrescreve o valor do this
    loadProducts = async () => { 
        const response = await api.get('/products'); 
        // response.data.docs serão os valores retornados da API

        // agora precisaremos armazenar os valores num array para ser renderizado
        this.setState({ products: response.data.docs });
    }

    render() {
        /**
         * Note que ao executar o app mostrara 0 e depois vai para o numero de produtos.
         * Isso porque o método render() ficará escutando o objeto state.
         * Quando há alguma alteração, o método render() é executado novamente.
         */
        // o return a seguir seria como seria para uma linha
        // return <h1>Total of products: {this.state.products.length}</h1>;

        // o proximo return delcaramos varias linhas no return usando parenteses
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key={product._id}>{product.title}</h2>
                ))}
            </div>
        )
        // o key="{product._id}" é uma exigência do React, senão dá erro no console
    }
}