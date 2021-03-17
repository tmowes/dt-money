import { StrictMode } from 'react';
import { render } from 'react-dom';
import {createServer} from 'miragejs'

import App from './App';
createServer({
  routes(){
    this.namespace = 'api'
    this.get('/transactions', ()=>{
      return [
        {
          id:1,
          title: 'Programa',
          amount: 6900,
          type:'deposit',
          category: 'Lazer',
          createdAt: new Date(),
        },
        {
          id:2,
          title: 'Hamburger',
          amount: -69,
          type:'withdraw',
          category: 'Comida',
          createdAt: new Date(),
        },
      ]
    })
  }
})

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
