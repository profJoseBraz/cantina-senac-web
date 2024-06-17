import "./Header.css";
import cestaRetorno from '../../../public/cesta-com-voltar.png'

interface Prop {
    onClick?: () => void
    displayIconCart?: boolean
    displayCounter?: boolean
    displayCestaRetorno?: boolean
    displayTitle?: boolean
};

function Header({ onClick, displayIconCart, displayCounter, displayCestaRetorno, displayTitle, } : Prop) {

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

                            {displayCounter &&(
                            <div className="counter">
                                0
                            </div>)}
                        </button>

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