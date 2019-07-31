import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// carregando componentes que serão requisitados nas rotas
import Main from './pages/main';
import Product from './pages/product'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

/**
 * BrowserRouter define que estamos utilizando router através de um navegador
 * O que significa que podemos utulizar em outros locais tbm.
 * 
 * Switch irá permitir que apenas uma única rota seja chamada ao mesmo tempo.
 * Então podemos também fazer com que dois componentes sejam renderizados ao acessar uma determinada rota.
 * Mas neste caso vamos apenas um componente seja acessado.
 * 
 * O exact definido na Route serve para somente chamar a Rota cuja URI seja exatamente igual ao definido no path
 * Sem o exact, se acessar http://localhost:3000/products/123 não iria acessar o 
 * <Route path="/products/:id" component={Product} />
 * mas sim acessaria o Main, pois o path começa com /
 */

 export default Routes;