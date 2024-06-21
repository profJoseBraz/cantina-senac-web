
import MyButton from '../components/MyButton'
import TimelineOrder from '../components/TimelineOrder'
import './MetodoDePagamento.css'
import vc from '../votarcardapio.png'
import paodequeijo from '../../../public/paodequijo-criativo.jpeg'
import confirmed_icon from '../../../public/concluded-circle.png'
import clocktime_icon from '../../../public/clocktime-circle.png'
import empty_icon from '../../../public/empty-circle.png'

const MetodoDePagamento = () => {

    return(
        <>
            <div className='body01'>
            <div className='topo'>
                 <div className='logo'>
                     <img src="/Senac_logo.svg.png"/>
                         </div>
                            
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
                                         <input></input>
                                        <div className='text_E_m_P'>
                                             <h5>Escolha o método de pagamento:</h5>
                                        <div className='pagamento'>
                                            <h6><input type="radio"/> PIX</h6>
                                            <h6> <input type="radio"/>Dinheiro</h6>
                                            <h6> <input type="radio"/>Cartão de Crédito</h6>
                                             <h6> <input type="radio"/> Cartão de Débito</h6>
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