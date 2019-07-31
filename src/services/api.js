/**
 * Arquivo de configurações de conexão a nossa API
 */

import axios from 'axios';

// instanciando Axios e definindo a URL base
const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' });

export default api;