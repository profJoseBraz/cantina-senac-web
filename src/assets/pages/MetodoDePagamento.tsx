
import MyButton from '../components/MyButton'
import TimelineOrder from '../components/TimelineOrder'
import './MetodoDePagamento.css'
import confirmed_icon from '../../../public/concluded-circle.png'
import clocktime_icon from '../../../public/clocktime-circle.png'
import empty_icon from '../../../public/empty-circle.png'
import Header from '../components/Header'

const MetodoDePagamento = () => {

    const handleReturnOrderReview = () => {
        alert("voltar para o resumo do pedido")
    }

    return(
        <>
            <div className='body01'>
                <Header 
                displayRevisaoPedidoRetorno={true}
                displayCestaRetorno={false}
                displayIconCart={false}
                displayCounter={false}
                displayTitle={false}
                onClick={handleReturnOrderReview}
                textIconHeader="Voltar para o pedido"
                />

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


                         <div className='text'>
                             <h6>Nome para retirada no pedido:</h6>
                                <div className='text_box'>
                                        <input type='text' />
                                        <div className='text_E_m_P'>
                                             <h5>Escolha o método de pagamento:</h5>
                                        <div className='pagamento'>
                                            
                                            <h6><input type="radio" id="1" name='tipo-pagamento'/><a>PIX</a></h6>
                                            <h6> <input type="radio" id="2" name='tipo-pagamento'/><a>Dinheiro</a></h6>
                                            <div className='payment-method'>
                                                <h6> <input type="radio" id="3" name='tipo-pagamento'/><a>Cartão de Crédito</a></h6>
                                                <div className='card'>
                                                    <img src={mester}></img>
                                                    <img src={visa}></img>
                                                </div>
                                            </div>

                                            <h6> <input type="radio" id="4" name='tipo-pagamento' /><a> Cartão de Débito</a></h6>
                                            <div className='card'>
                                                    <img src={mester}></img>
                                                    <img src={visa}></img>
                                                </div>
                                            
                                        </div>
                                        <div className='button'>
                                                <MyButton>
                                                Código para retirada do pedido
                                                </MyButton>
                                                </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default MetodoDePagamento