import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './view/App'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
)