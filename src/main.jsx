import React from 'react'
import ReactDOM from 'react-dom/client'

//importación de router
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
//importación de redux
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <HashRouter >
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
