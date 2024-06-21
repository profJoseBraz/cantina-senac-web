import "./Header.css";
import cestaRetorno from '../../../public/cesta-com-voltar.png'
import pedidoRetorno from '../../../public/voltarCardapio.png'
import { ReactNode } from "react";

interface Prop {
    onClick?: () => void
    displayIconCart?: boolean
    displayCounter?: boolean
    displayCestaRetorno?: boolean
    displayTitle?: boolean
    displayRevisaoPedidoRetorno?: boolean
    textIconHeader?: ReactNode
};

function Header({ onClick, displayIconCart, displayCounter, displayCestaRetorno, displayTitle, displayRevisaoPedidoRetorno, textIconHeader, } : Prop) {

    return (
        <>
            <header>
                <div className="head">
                    <div className="logo">
                        <img src="/Senac_logo.svg.png"/>
                    </div>
                    <div className="cart">
                        <button onClick={onClick}>
                            {displayIconCart &&(<i className="fa fa-shopping-cart" aria-hidden="true"></i>)}

                            {displayCestaRetorno &&(<img className="shopping-return"  src={cestaRetorno} alt="" />)}

                            {displayRevisaoPedidoRetorno &&(<img className="review-return"  src={pedidoRetorno} alt="" />)}

                            {displayCounter &&(
                            <div className="counter">
                                0
                            </div>)}
                        </button>
                        <span className="iconText" >{textIconHeader}</span>
                    </div>

                </div>
                {displayTitle &&(
                    <div className="title">
                    <h2>Cantina Senac</h2>
                    <p>Realize seu pedido online</p>
                </div>)}
                
            </header>    
        </>
    );
};

export default Header;