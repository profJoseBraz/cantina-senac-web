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
        <Route path= "/" element = {<Main/>}/>
        <Route path='/RevisãoDoPedido' element = {<OrderReview/>}/>
        <Route path='/RevisãoDoPedido/MetodoDePagamento' element = {<MetodoDePagamento/>}/>
        <Route path='/RevisãoDoPedido/MetodoDePagamento/CheckoutDaCompra' element = {<Final/>}/>
      </Routes>
    </HashRouter>      

  )
}

export default App
