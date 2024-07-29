import { CSSProperties, useEffect, useState } from 'react'
import './Cart.css'
import triangleBG from '../../img/outros/triangle-decoration-cart.svg'
import cryingFace from '../../img/outros/cryingFace.svg'


interface Props {
  onClickConfirm?: () => void
  onClickDeleteProdCart?: (productId: any) => void
  onClickIncreaseQuantity?: (productId: any) => void
  onClickDecreaseQuantity?: (productId: any) => void

  style?: CSSProperties
  productsCart: any
  cartQuantities: { [key: number]: number }
  totalCart: number
  production?: string
  delProdClass?: any
}

const Cart = ({onClickConfirm, onClickDeleteProdCart,  onClickDecreaseQuantity,  onClickIncreaseQuantity, style, productsCart, cartQuantities, totalCart, delProdClass }: Props) => {
  
  const [subTotal, setSubTotal] = useState<{ [key: number]: number }>({})

  const subTotalMult = (production: any) => {
    const quantityEachProdInCart = cartQuantities[production.produto.id]
    return production.produto.valor * quantityEachProdInCart
  }
  
  useEffect(() => {
    const newSubTotal: { [key: number]: number } = {}
  
    productsCart.forEach((production: any) => {
      newSubTotal[production.produto.id] = subTotalMult(production)
    })
    
    setSubTotal(newSubTotal);
  }, [cartQuantities, productsCart])


  return (
    <>
      <aside style={style} className="container-cart">
          <div className="title-cart">
              <span>Meu Carrinho</span>
          </div>

          <div className="content-cart">
            {productsCart.length === 0 ? (
              <>
                <span className='emptyCart-warn' >Seu carrinho está vazio.</span>
                <img  className='emptyCart-face' src={cryingFace} alt="" />
              </>
            )
              :
            (
              productsCart.map((production: any) => (
                <div key={production.produto.id} className={delProdClass[production.produto.id] || "box-produto-cart"}>
                  <i
                    onClick={() =>
                      onClickDeleteProdCart && onClickDeleteProdCart(production.produto.id)
                    }
                    className="fa fa-trash"
                    aria-hidden="true"
                  ></i>
                  <div className="img-counter-cart">
                    <img src={production.produto.imagem} alt="" />

                    <div className="counter-cart">

                      <div
                        onClick={() =>
                          onClickIncreaseQuantity &&
                          onClickIncreaseQuantity(production.produto.id)
                        }
                        className="sum"
                      >
                        <span>+</span>
                      </div>
                      <div className="numberQtt">
                        <span>{cartQuantities[production.produto.id] || 0}</span>
                      </div>

                      <div
                        onClick={() =>
                          onClickDecreaseQuantity &&
                          onClickDecreaseQuantity(production.produto.id)
                        }
                        className="minus"
                      >
                        <span>-</span>
                      </div>

                    </div>
                  </div>

                  <div className="infos-produto-cart">
                    <span className="name-produto">{production.produto.nome}</span>
                    <span className="preco-string">
                      Valor: <span className="preco-produto">R$ {production.produto.valor.toFixed(2).replace("\.", ",")} / un</span>
                    </span>

                    <div className="subtotal-produto">
                      <span className="subtotal-string">
                        Subtotal: <span className="subtotal-preco">R$ {subTotal[production.produto.id]?.toFixed(2).replace(".", ",")}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

          </div>

          <button onClick={onClickConfirm} >Confirmar Pedido <i className="fa fa-arrow-right" aria-hidden="true"></i></button>

          <div className="total-cart">
            <span className='total-string'>Total: <span className='total-preco'>R$ {totalCart.toFixed(2).replace("\.", ",")}</span></span>
          </div>

          <img className='triangle-one' src={triangleBG} alt="" />
          <img className='triangle-two' src={triangleBG} alt="" />
      </aside>
    </>
  )
}

export default Cart