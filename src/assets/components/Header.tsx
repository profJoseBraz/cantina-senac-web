import "./Header.css";
import cestaRetorno from '../../img/icons_header/carrinho-com-produtos-voltar.png';
import revisaoPedidoRetorno from '../../img/icons_header/revisao-pedido-voltar.png';
import cartIcon from '../../img/icons_header/carrinho-vazio.png'
import SenacLogo from '../../img/icons_header/senac-logo.png'
import { CSSProperties, ReactNode, RefObject } from "react";

interface Prop {
    onClick?: () => void
    counterProductCart?: number
    displayIconCart?: boolean
    displayCounter?: boolean
    displayCestaRetorno?: boolean
    displayTitle?: boolean
    displayRevisaoPedidoRetorno?: boolean
    
    textIconHeader?: ReactNode
    styleCartOpenned?: CSSProperties
    styleIconCart?: CSSProperties
    headerRef?: RefObject<HTMLDivElement>
    headerTest?: string
};

function Header({ onClick, displayIconCart, displayCounter, displayCestaRetorno, displayTitle, displayRevisaoPedidoRetorno, textIconHeader, styleCartOpenned, styleIconCart, counterProductCart, headerRef, headerTest }: Prop) {

    return (
        <>
            <header>
                <div ref={headerRef} className="head">
                    <div className="logo">
                        <img style={styleCartOpenned} src={SenacLogo} />
                    </div>
                    <div style={styleIconCart} className="cart">
                        <button onClick={onClick}>
                            {displayIconCart &&(<img className="cart-icon"  src={cartIcon} alt="" />)}

                            {displayCestaRetorno &&(<img className="shopping-return"  src={cestaRetorno} alt="" />)}

                            {displayRevisaoPedidoRetorno &&(<img className="review-return"  src={revisaoPedidoRetorno} alt="" />)}

                            {displayCounter &&(
                            <div className="counter">
                                {counterProductCart}
                            </div>)}
                        </button>
                        <span  className="iconText" >{textIconHeader}</span>
                    </div>

                </div>
                {displayTitle &&(
                    <div style={styleCartOpenned} className="title">
                    <h2>Cantina Senac</h2>
                    <p>Realize seu pedido online</p>
                </div>)}
            </header>    
        </>
    );
};

export default Header;