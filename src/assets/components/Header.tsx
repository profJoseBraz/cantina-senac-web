import "./Header.css";
import cestaRetorno from '../../../public/cesta-com-voltar.png'
import pedidoRetorno from '../../../public/voltarCardapio.png'
import { CSSProperties, ReactNode } from "react";

interface Prop {
    onClick?: () => void
    counterProductCart: number
    displayIconCart?: boolean
    displayCounter?: boolean
    displayCestaRetorno?: boolean
    displayTitle?: boolean
    displayRevisaoPedidoRetorno?: boolean
    
    textIconHeader?: ReactNode
    styleCartIcon?: CSSProperties
};

function Header({ onClick, displayIconCart, displayCounter, displayCestaRetorno, displayTitle, displayRevisaoPedidoRetorno, textIconHeader, styleCartIcon, counterProductCart } : Prop) {

    return (
        <>
            <header>
                <div className="head">
                    <div className="logo">
                        <img src="/Senac_logo.svg.png"/>
                    </div>
                    <div style={styleCartIcon} className="cart">
                        <button onClick={onClick}>
                            {displayIconCart &&(<i className="fa fa-shopping-cart" aria-hidden="true"></i>)}

                            {displayCestaRetorno &&(<img className="shopping-return"  src={cestaRetorno} alt="" />)}

                            {displayRevisaoPedidoRetorno &&(<img className="review-return"  src={pedidoRetorno} alt="" />)}

                            {displayCounter &&(
                            <div className="counter">
                                {counterProductCart}
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