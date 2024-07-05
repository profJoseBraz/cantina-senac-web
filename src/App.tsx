import './App.css'
import Final from './assets/pages/Final'
import Main from './assets/pages/Main'
import MetodoDePagamento from './assets/pages/MetodoDePagamento'
import OrderReview from './assets/pages/OrderReview'
import { HashRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path= "/Main" element = {<Main/>}/>
        <Route path='/OrderReview' element = {<OrderReview/>}/>
        <Route path='/MetodoDePagamento' element = {<MetodoDePagamento/>}/>
        <Route path='/Final' element = {<Final/>}/>
      </Routes>
    </HashRouter>      
  )
}

export default App
