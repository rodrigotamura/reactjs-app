import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

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
        products: [],
        productInfo: {}, // aqui serão armazenadas as infos da páginação
        page: 1, // armazenando pagina atual
    };

    componentDidMount() { // ciclo de vida, executa assim que o component mostra na tela
        this.loadProducts();
    }

    // para funÇões criadas por nós DEVE ser uma arrow function
    // senão esta função não irá enxergar o escopo fora dele (this, por exemplo)
    // ou seja, o arrow functions não sobrescreve o valor do this
    loadProducts = async (page = 1) => { 
        const response = await api.get('/products?page='+page); 

        const { docs, ...productInfo } = response.data;
        // usando REST em productInfo e pegando o docs, onde estao os produtos

        // response.data.docs serão os valores retornados da API
        // agora precisaremos armazenar os valores num array para ser renderizado
        this.setState({ products: docs, productInfo, page });
    }

    nextPage = async () => {
        // vamos verificar se a pag atual é a última página
        const { page, productInfo } = this.state;
        if(page === productInfo.pages) return; // se estiver na ultima pagina ao clicar na vai fazer nada

        // se Não estiver na última página
        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    prevPage = async () => {
        // verificando se a pagina atual é a 1
        const { page, productInfo } = this.state;

        if( page === 1 ) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    render() {
        const { products, page, productInfo } = this.state;

        /**
         * Note que ao executar o app mostrara 0 e depois vai para o numero de produtos.
         * Isso porque o método render() ficará escutando o objeto state.
         * Quando há alguma alteração, o método render() é executado novamente.
         */
        // o return a seguir seria como seria para uma linha
        // return <h1>Total of products: {this.state.products.length}</h1>;

        // o proximo return declaramos varias linhas no return usando parenteses
        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proxima</button>
                </div>
            </div>
        )
        // o key="{product._id}" é uma exigência do React, senão dá erro no console
        // para passarmos uma ação de click no botão temos que utilizar o onClick
        // chamando um método
    }
}