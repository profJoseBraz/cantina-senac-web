import './App.css'
import Final from './assets/pages/Final'
import Main from './assets/pages/Main'
import MetodoDePagamento from './assets/pages/MetodoDePagamento'
import OrderReview from './assets/pages/OrderReview'

function App() {
  return (
<<<<<<< Updated upstream
    <>
      {/* <Final></Final> */}
    
      <Main />

      {/* <OrderReview /> */}

      {/* <MetodoDePagamento /> */}

    </>
=======
    <HashRouter>
      <Routes>
        <Route path= "/" element = {<Main/>}/>
        <Route path='/RevisãoDoPedido' element = {<OrderReview/>}/>
        <Route path='/RevisãoDoPedido/MetodoDePagamento' element = {<MetodoDePagamento/>}/>
        <Route path='/RevisãoDoPedido/MetodoDePagamento/CheckoutDaCompra' element = {<Final/>}/>
      </Routes>
    </HashRouter>      
>>>>>>> Stashed changes
  )
}

export default App
