import { useEffect, useState } from 'react'
import './Cart.css'
import paodequeijo from '../../../public/paodequijo-criativo.jpeg'
import triangleBG from '../../../public/triangle-decoration-cart.svg'

interface Props {
  onClickConfirm?: () => void
  onClickDeleteProdCart?: () => void
}

const Cart = ({onClickConfirm, onClickDeleteProdCart}: Props) => {

  // interação quantiade dos produtos
  const [amountProduto, setAmountProduto] = useState(1)
  const handleIncreaseTotal = () => {
    setAmountProduto(amountProduto + 1)
  }

  const handleDecreaseTotal = () => {
    if(amountProduto <= 1 ){
      setAmountProduto(amountProduto)
    }

    else{
      setAmountProduto(amountProduto - 1)
    }
  }

  // equações para preços dos produtos
  const stringProductPriceEach = '2.50'
  const integerProductPriceEach = parseFloat(stringProductPriceEach)
  const [subTotalProduto, setSubTotalProduto] = useState(0) 
  const [totalProduto, setTotalProduto] = useState(0) 

  const handleSetPriceSubTotalAndTotal = () => {
    setSubTotalProduto(amountProduto * integerProductPriceEach)
    setTotalProduto(subTotalProduto)
  }

  useEffect(() => {
    handleSetPriceSubTotalAndTotal()
  }, [amountProduto, subTotalProduto])
  

  return (
    <>
        <aside className="container-cart">
            <div className="title-cart">
                <span>Meu Carrinho</span>
            </div>

            <div className="content-cart">

              <div className="box-produto-cart">
              <i onClick={onClickDeleteProdCart} className="fa fa-trash" aria-hidden="true"></i>
                <div className="img-counter-cart">
                  <img src={paodequeijo} alt="" />

                  <div className="counter-cart">

                    <div onClick={handleDecreaseTotal} className="minus">
                      <span>-</span>
                    </div>

                    <div className="numberQtt">
                      <span>{amountProduto}</span>
                    </div>

                    <div onClick={handleIncreaseTotal} className="sum">
                      <span>+</span>
                    </div>

                  </div>
                </div>

                <div className="infos-produto-cart">
                    <span className='name-produto'>Pão de queijo</span>
                    <span className='preco-string'>Valor: <span className='preco-produto'>R$ {stringProductPriceEach} / un</span></span>

                    <div className="subtotal-produto">
                      <span className='subtotal-string'>Subtotal: <span className='subtotal-preco'>R$ {subTotalProduto}</span></span>  
                    </div>             
                  </div>
              </div>
            </div>
            <button onClick={onClickConfirm} >Confirmar Pedido <i className="fa fa-arrow-right" aria-hidden="true"></i></button>

            <div className="total-cart">
              <span className='total-string'>Total: <span className='total-preco'>R$ {totalProduto}</span></span>
            </div>

            <img className='triangle-one' src={triangleBG} alt="" />
            <img className='triangle-two' src={triangleBG} alt="" />
        </aside>
    </>
  )
}

export default Cart