// global ZOHO object is available here
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.ZOHO.embeddedApp.on("PageLoad",function(){
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )  
})
window.ZOHO.embeddedApp.init();