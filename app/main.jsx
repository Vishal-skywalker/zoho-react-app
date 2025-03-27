import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ZOHO.embeddedApp.on("PageLoad",function(data){
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )  
})
ZOHO.embeddedApp.init();