// main.jsx (อัปเดต)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// 💡 Import BrowserRouter
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 💡 ห่อหุ้ม App ด้วย BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)