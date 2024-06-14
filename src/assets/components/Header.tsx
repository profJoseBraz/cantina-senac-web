import "./Header.css";

interface Prop {
    onClick: () => void;
};

function Header({ onClick } : Prop) {
    return (
        <>
            <header>
                <div className="head">
                    <div className="logo">
                        <img src="/Senac_logo.svg.png"/>
                    </div>
                    <div className="cart">
                        <button onClick={onClick}>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            <div className="counter">
                                0
                            </div>
                        </button>
                    </div>
                </div>
                <div className="title">
                    <h2>Cantina Senac</h2>
                    <p>Realize seu pedido online</p>
                </div>
            </header>    
        </>
    );
};

export default Header;