import React from 'react';

/**
 * Por que criamos a pasta components/Header/ e não components/Header.js?
 * 
 * Isso para que possamos criar o arquivo CSS junto com o componente para uma melhor organização
 */

/** a forma abaixo de criar um componente é chamado de stateless component
 * basicamente podemos riar componente no React como simples funÇôes.
 * Seria a mesma coisa que eu criasse de forma tradicional:
 * class Header extends Component {
 *  render() {
 *      return <h1>Hello</h1>
 *  }
 * }
 * 
 * O que torna menos verbosa.
 * 
 * Quando chegarmos no conceito chamado ESTADO, dai sim precisaremos utilizar desta forma de classe.
 * Ms por enquanto vamos utilizando de forma stateless component.
 */

import "./styles.css"; // imporando os estilos. IMPORTA SOMENTE DESTA FORMA!

const Header =  () => (
    <header id="main-header">JS Hunt</header>
);

export default Header;