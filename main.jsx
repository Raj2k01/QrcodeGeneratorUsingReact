import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QRCodeGenerator } from './QRCodeGenerator'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QRCodeGenerator/>
    
  </React.StrictMode>,
)
