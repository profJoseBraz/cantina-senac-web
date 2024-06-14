import { useState } from 'react'
import './Cart.css'
import paodequeijo from '../../../public/paodequijo-criativo.jpeg'
import triangleBG from '../../../public/triangle-decoration-cart.svg'

interface Props {
  onClick?: () => void
}

const Cart = ({onClick}: Props) => {

  const [totalProduto, setTotalProduto] = useState(0)
  
  const handleIncreaseTotal = () => {
    setTotalProduto(totalProduto + 1)
  }

  const handleDecreaseTotal = () => {
    if(totalProduto <= 0){
      setTotalProduto(totalProduto)
    }
    else{
      setTotalProduto(totalProduto - 1)
    }
  }

  return (
    <>
        <aside className="container-cart">
            <div className="title-cart">
                <span>Meu Carrinho</span>
            </div>

            <div className="content-cart">

              <div className="box-produto-cart">
                <div className="img-counter-cart">
                  <img src={paodequeijo} alt="" />

                  <div className="counter-cart">

                    <div onClick={handleDecreaseTotal} className="minus">
                      <span>-</span>
                    </div>

                    <div className="numberQtt">
                      <span>{totalProduto}</span>
                    </div>

                    <div onClick={handleIncreaseTotal} className="sum">
                      <span>+</span>
                    </div>

                  </div>
                </div>

                <div className="infos-produto-cart">
                    <span className='name-produto'>Pão de queijo</span>
                    <span className='preco-string'>Valor: <span className='preco-produto'>R$ 2,50 / un</span></span>

                    <div className="subtotal-produto">
                      <span className='subtotal-string'>Subtotal: <span className='subtotal-preco'>R$ 2,50</span></span>  
                    </div>             
                  </div>
              </div>
            </div>
            <button onClick={onClick} >Confirmar Pedido <i className="fa fa-arrow-right" aria-hidden="true"></i></button>

            <div className="total-cart">
              <span className='total-string'>Total: <span className='total-preco'>R$2,50</span></span>
            </div>

            <img className='triangle-one' src={triangleBG} alt="" />
            <img className='triangle-two' src={triangleBG} alt="" />
        </aside>
    </>
  )
}

export default Cart