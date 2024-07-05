import "./Header.css";
import cestaRetorno from '../../img/icons_header/cesta-com-voltar.png';
import pedidoRetorno from '../../img/icons_header/voltarCardapio.png';
import { CSSProperties, ReactNode } from "react";
import SenacLogo from '../../img/icons_header/Senac_logo.svg.png'

interface Prop {
    onClick?: () => void
    counterProductCart?: number
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
                        <img src={SenacLogo} />
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