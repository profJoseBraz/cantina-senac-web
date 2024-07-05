import './OrderReview.css'
import Header from '../components/Header'
import TimelineOrder from '../components/TimelineOrder'
import paodequeijo from '../../img/produtos/salgados/pao-de-queijo.png'
import confirmed_icon from '../../img/icons_timeline/concluded-circle.png'
import clocktime_icon from '../../img/icons_timeline/clocktime-circle.png'
import empty_icon from '../../img/icons_timeline/empty-circle.png'
import { useNavigate } from 'react-router-dom'


const OrderReview = () => {

  const navigate = useNavigate();

  const handleReturnShoppingCart = () => {
    navigate('/');
}

  const handleMethodPay = () => {
    navigate('/RevisãoDoPedido/MetodoDePagamento');
}

  return (
    <>
        <div className="container-orderReview">
            <Header
            displayRevisaoPedidoRetorno={false}
            displayCestaRetorno={true}
            displayIconCart={false}
            displayCounter={false}
            displayTitle={false}
            onClick={handleReturnShoppingCart}
            textIconHeader="Voltar para o carrinho"
            />

            <TimelineOrder
            shoppingCartLine={confirmed_icon}
            orderReview={clocktime_icon}
            payment={empty_icon}
            purshaceConfirmation={empty_icon} 

            colorDescOne="#0FA958"
            opacityDescOne="1"
            colorDescTwo="#699BF7"
            opacityDescTwo="1"
            colorDescThree="black"
            opacityDescThree="0.4"
            colorDescFour="black"
            opacityDescFour="0.4"

            classNameRevisao='clocktime'
            />

            <div className="content-orderReview">
              <div className="content-title-orderReview">
                  <span>Revise o seu pedido:</span>
              </div>

              <div className="box-orders">
                <div className="order">
                  <div className="order-img">
                    <img src={paodequeijo} alt="" />
                  </div>

                  <div className="order-infos">
                    <span className='order-nameProduct' >Pão de Queijo</span>
                    <span className='order-qttProduct' >Unidades: 2</span>
                  </div>
                  
                  <div className="order-price">
                    <span>R$</span> <span>6,00</span>
                  </div>
                </div>
                <div className="order">
                  <div className="order-img">
                    <img src={paodequeijo} alt="" />
                  </div>

                  <div className="order-infos">
                    <span className='order-nameProduct' >Pão de Queijo</span>
                    <span className='order-qttProduct' >Unidades: 2</span>
                  </div>
                  
                  <div className="order-price">
                    <span>R$</span> <span>6,00</span>
                  </div>
                </div>
                <div className="order">
                  <div className="order-img">
                    <img src={paodequeijo} alt="" />
                  </div>

                  <div className="order-infos">
                    <span className='order-nameProduct' >Pão de Queijo</span>
                    <span className='order-qttProduct' >Unidades: 2</span>
                  </div>
                  
                  <div className="order-price">
                    <span>R$</span> <span>6,00</span>
                  </div>
                </div>
                <div className="order">
                  <div className="order-img">
                    <img src={paodequeijo} alt="" />
                  </div>

                  <div className="order-infos">
                    <span className='order-nameProduct' >Pão de Queijo</span>
                    <span className='order-qttProduct' >Unidades: 2</span>
                  </div>
                  
                  <div className="order-price">
                    <span>R$</span> <span>6,00</span>
                  </div>
                </div>
              </div>

              <div className="box-metodPay">
                <button onClick={handleMethodPay} >Escolher método de pagamento</button>
              </div>
            </div>

        </div>    
    </>
  )
}

export default OrderReview