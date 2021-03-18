import { StrictMode } from 'react';
import { render } from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Programa',
          amount: 6900,
          type: 'deposit',
          category: 'Lazer',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Hamburger',
          amount: -69,
          type: 'withdraw',
          category: 'Comida',
          createdAt: new Date(),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
