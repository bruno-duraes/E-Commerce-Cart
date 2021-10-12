import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CartProvider } from './contexts/cartContext'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(

  <React.StrictMode>
    <CartProvider initialState={[]}>
    <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root') 
)
reportWebVitals()
