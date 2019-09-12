import React from 'react';

//redux
import store from './store';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store = {store}>
    <div className="container">
      <header>
        <h1 className="text-center">Administrador de veterinaria</h1>
      </header>
      <div className="row mt-3">
        <div className="col-md-6">
          Form
        </div>
        <div className="col-md-6">
          Listado aqui
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
