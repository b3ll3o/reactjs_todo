import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import Adicao from './pages/Adicao';
import Listagem from './pages/Listagem';

const App = () => (
  <Router>
    <Route path='/' exact>
      <Listagem />
    </Route>
    <Route path='/add'>
      <Adicao />
    </Route>
  </Router>
);

export default App;
