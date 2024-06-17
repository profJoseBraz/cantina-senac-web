import Cart from "../components/Cart";
import Header from "../components/Header";
import Search from "../components/Search";
import "./Main.css";

function Main() {
    const handleCart = () => {
        alert("ok");
    }

    const handleConfirmOrder = () => {
        alert("Confirmar pedido");
    }

    const handleDeleteProductFromCart = () => {
        alert("Remover produto");
    }

    return (
        <>
            <div className="container">
                <Header onClick={handleCart}></Header>
                <Search></Search>
                
                {/* <Cart
                onClickConfirm={handleConfirmOrder}
                onClickDeleteProdCart={handleDeleteProductFromCart}
                /> */}
                
            </div>
        </>
    );
};

export default Main;