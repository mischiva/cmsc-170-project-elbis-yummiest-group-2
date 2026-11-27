import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Interactive from './Interactive'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Interactive />
  </React.StrictMode>,
)
