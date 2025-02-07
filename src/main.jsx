import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Container from './compositional-component/Container'
import TodoApp from './functional-component'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp/>
  </StrictMode>,
)
