import TimelineOrder from '../components/TimelineOrder'
import './MetodoDePagamento.css'
import confirmed_icon from '../../img/icons_timeline/concluded-circle.png'
import clocktime_icon from '../../img/icons_timeline/clocktime-circle.png'
import empty_icon from '../../img/icons_timeline/empty-circle.png'
import Header from '../components/Header'
import master from '../../img/icons_pagamento/MasterCard_early_1990s_logo.svg'
import visa from '../../img/icons_pagamento/visa-logo-11.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const MetodoDePagamento = () => {
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleReturnOrderReview = () => {
        navigate('/RevisãoDoPedido')
    }

    const handleGoToFinal = () => {
        navigate('/RevisãoDoPedido/MetodoDePagamento/CheckoutDaCompra')
    }

    const handleName = (e : any) => {
        setName(e.target.value);
    };
    console.log(name);

    return(
        <>
            <div className='body01'>
                <Header 
                displayRevisaoPedidoRetorno={true}
                displayCestaRetorno={false}
                displayIconCart={false}
                displayCounter={false}
                displayTitle={false}
                counterProductCart={0}
                onClick={handleReturnOrderReview}
                textIconHeader="Revisar pedido"
                />
            <div className='Timeline'>
            <TimelineOrder
                shoppingCartLine={confirmed_icon}
                orderReview={confirmed_icon}
                payment={clocktime_icon}
                purshaceConfirmation={empty_icon} 
                colorDescOne="#0FA958"
                opacityDescOne="1"
                colorDescTwo="#0FA958"
                opacityDescTwo="1"
                colorDescThree="#699BF7"
                opacityDescThree="1"
                colorDescFour="black"
                opacityDescFour="0.4"

                classNamePagamento='clocktime'
                />
              
            </div>                
                <div className='content-payment'>
                    <div className='client-name'>
                        <span>Nome para retirada no pedido:</span>
                        <input type='text' onChange={handleName}/>
                    </div>
                    <div className='geral'>
                        <div className='content-paymnent-method'>
                            <span>Escolha o método de pagamento:</span>

                            <div className='payment-types'>

                                <div className="payment-method">
                                    <h6><input type="radio" id="1" name='tipo-pagamento'/><a>Dinheiro</a></h6>
                                </div>

                            
                                <div className='payment-method'>
                                    <h6> <input type="radio" id="2" name='tipo-pagamento'/><a>Cartão de Crédito</a></h6>
                                    <div className='card'>
                                        <img src={master}></img>
                                        <img src={visa}></img>
                                    </div>
                                </div>

                                <div className='payment-method'>
                                    <h6> <input type="radio" id="3" name='tipo-pagamento' /><a> Cartão de Débito</a></h6>
                                    <div className='card'>
                                        <img src={master}></img>
                                        <img src={visa}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='pix'>
                                <span> - NÃO ACEITAMOS PIX - </span>
                            </div>
                    </div>
                </div>
                
                <div onClick={handleGoToFinal} className='button'>
                    <button>
                        Código para retirada do pedido
                    </button>
                </div>
            </div>
                    
                            
        </>
    )
}
export default MetodoDePagamento