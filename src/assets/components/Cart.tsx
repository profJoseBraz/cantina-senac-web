import { CSSProperties, useEffect, useState } from 'react'
import './Cart.css'
import paodequeijo from '../../../public/paodequijo-criativo.jpeg'
import triangleBG from '../../../public/triangle-decoration-cart.svg'

interface Props {
  onClickConfirm?: () => void
  onClickDeleteProdCart?: (productId: any) => void;
  onClickIncreaseAmount?: (productId: any) => void;
  onClickDecreaseAmount?: (productId: any) => void;

  style?: CSSProperties
  productsCart: any
}

const Cart = ({onClickConfirm, onClickDeleteProdCart,  onClickDecreaseAmount,  onClickIncreaseAmount, style, productsCart, }: Props) => {


  // equações para preços dos produtos
  // const stringProductPriceEach = '2.50'
  // const integerProductPriceEach = parseFloat(stringProductPriceEach)
  // const [subTotalProduto, setSubTotalProduto] = useState(0) 
  // const [totalProduto, setTotalProduto] = useState(0) 

  // const handleSetPriceSubTotalAndTotal = () => {
  //   setSubTotalProduto({produc} * integerProductPriceEach)
  //   setTotalProduto(subTotalProduto)
  // }

  // useEffect(() => {
  //   handleSetPriceSubTotalAndTotal()
  // }, [cartAmountProduto, subTotalProduto])

  
  return (
    <>
        <aside style={style} className="container-cart">
            <div className="title-cart">
                <span>Meu Carrinho</span>
            </div>

            <div className="content-cart">

              {productsCart.map((product: any) => (
                <div key={product.id_produto} className="box-produto-cart">
                  <i onClick={() => onClickDeleteProdCart && onClickDeleteProdCart(product.id_produto)} className="fa fa-trash" aria-hidden="true"></i>
                  <div className="img-counter-cart">
                    <img src={paodequeijo} alt="" />

                    <div className="counter-cart">

                      <div onClick={onClickDecreaseAmount} className="minus">
                        <span>-</span>
                      </div>

                      <div className="numberQtt">
                        <span>{product.quantidade}</span>
                      </div>

                      <div onClick={onClickIncreaseAmount} className="sum">
                        <span>+</span>
                      </div>

                    </div>
                  </div>

                  <div className="infos-produto-cart">
                    <span className='name-produto'>{product.nome}</span>
                    <span className='preco-string'>Valor: <span className='preco-produto'>R$ {product.valor} / un</span></span>

                    <div className="subtotal-produto">
                      <span className='subtotal-string'>Subtotal: <span className='subtotal-preco'>R$ 00</span></span>  
                    </div>             
                  </div>
                  
              </div>
              ))}

            </div>

            <button onClick={onClickConfirm} >Confirmar Pedido <i className="fa fa-arrow-right" aria-hidden="true"></i></button>

            <div className="total-cart">
              <span className='total-string'>Total: <span className='total-preco'>R$ 00</span></span>
            </div>

            <img className='triangle-one' src={triangleBG} alt="" />
            <img className='triangle-two' src={triangleBG} alt="" />
        </aside>
    </>
  )
}

export default Cart