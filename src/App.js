import './App.css';
import Header from './componentes/Header';
import Card from './componentes/Card';
import List from './componentes/List';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Information from './componentes/Information';
import Error404 from './componentes/Error404';
import injectContext from './store/appContext';

function App() {
   
  return (
    <BrowserRouter>
      <Header />
      <Switch>{/* Esta etiqueta se usa para solo escoger una ruta*/}
            <Route  exact path="/" component={List} />
            <Route path="/information/:id" component={Information} />
            <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default injectContext(App);
