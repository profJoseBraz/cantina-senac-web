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

    return (
        <>
            <div className="container">
                <Header onClick={handleCart}></Header>
                <Search></Search>
                
                {/* <Cart onClick={handleConfirmOrder} /> */}
            </div>
        </>
    );
};

export default Main;