import React from 'react';

import Header from './components/Header'; // importando o HEader
import Main from './pages/main'; // 

import "./styles.css";

const App = () => (
  <div className="App">
      <Header />
      <Main />
  </div>
);

// antes:
/*
function App() {
  return (
    <div className="App">
      <h1>Hello Tamura!</h1>
    </div>
  );
}
*/
export default App;
