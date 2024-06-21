
import MyButton from '../components/MyButton'
import './MetodoDePagamento.css'
const MetodoDePagamento = () => {

    return(
        <>
            <div className='body'>
            <div className='topo'>
                 <div className='logo'>
                     <img src="/Senac_logo.svg.png"/>
                         <i className="fa fa-hand-o-left" aria-hidden="true"></i>
                         </div>
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