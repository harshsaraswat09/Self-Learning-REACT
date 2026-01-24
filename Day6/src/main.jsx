import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { NetflixRegComp } from "./components/NetflixRegComp.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NetflixRegComp />
  </StrictMode>,
)
