import { CSSProperties } from 'react'
import './Cart.css'
import triangleBG from '../../img/outros/triangle-decoration-cart.svg'


interface Props {
  onClickConfirm?: () => void
  onClickDeleteProdCart?: (productId: any) => void
  onClickIncreaseQuantity?: (productId: any) => void
  onClickDecreaseQuantity?: (productId: any) => void

  style?: CSSProperties
  productsCart: any
  cartQuantities: { [key: number]: number }
  totalCart: number
}

const Cart = ({onClickConfirm, onClickDeleteProdCart,  onClickDecreaseQuantity,  onClickIncreaseQuantity, style, productsCart, cartQuantities, totalCart }: Props) => {
  
  return (
    <>
      <aside style={style} className="container-cart">
          <div className="title-cart">
              <span>Meu Carrinho</span>
          </div>

          <div className="content-cart">
            {productsCart.length === 0 ? (<span className='emptyCart-warn'>Seu carrinho está vazio.</span>) :
            (
              productsCart.map((product: any) => (
                <div key={product.id_produto} className="box-produto-cart">
                  <i
                    onClick={() =>
                      onClickDeleteProdCart && onClickDeleteProdCart(product.id_produto)
                    }
                    className="fa fa-trash"
                    aria-hidden="true"
                  ></i>
                  <div className="img-counter-cart">
                    <img src={product.imagem_produto} alt="" />

                    <div className="counter-cart">
                      <div
                        onClick={() =>
                          onClickDecreaseQuantity &&
                          onClickDecreaseQuantity(product.id_produto)
                        }
                        className="minus"
                      >
                        <span>-</span>
                      </div>

                      <div className="numberQtt">
                        <span>{cartQuantities[product.id_produto] || 0}</span>
                      </div>

                      <div
                        onClick={() =>
                          onClickIncreaseQuantity &&
                          onClickIncreaseQuantity(product.id_produto)
                        }
                        className="sum"
                      >
                        <span>+</span>
                      </div>
                    </div>
                  </div>

                  <div className="infos-produto-cart">
                    <span className="name-produto">{product.nome_produto}</span>
                    <span className="preco-string">
                      Valor: <span className="preco-produto">R$ {product.valor_produto} / un</span>
                    </span>

                    <div className="subtotal-produto">
                      <span className="subtotal-string">
                        Subtotal: <span className="subtotal-preco">R$ {product.valor_produto * cartQuantities[product.id_produto]}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

          </div>

          <button onClick={onClickConfirm} >Confirmar Pedido <i className="fa fa-arrow-right" aria-hidden="true"></i></button>

          <div className="total-cart">
            <span className='total-string'>Total: <span className='total-preco'>R$ {totalCart.toFixed(2)}</span></span>
          </div>

          <img className='triangle-one' src={triangleBG} alt="" />
          <img className='triangle-two' src={triangleBG} alt="" />
      </aside>
    </>
  )
}

export default Cart