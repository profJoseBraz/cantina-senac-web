import Cart from "../components/Cart";
import Header from "../components/Header";
import Product from "../components/Product";
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

    const handleAddProduct = () => {
        alert("ok");
    };

    return (
        <>
            <div className="container">
                <Header onClick={handleCart}></Header>
                <Search></Search>
                <div className="products">
                    <Product onClick={handleAddProduct} restrictType="Contém derivados de leite" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdBLFQueGRO0CLe8MCGAuuWY4FEa9o6NKUQ&s" name="Pão de queijo" cost="3,00" desc="Caso seja nescessário, a descrição será adicionada aqui" quant={20}></Product>
                    <Product onClick={handleAddProduct} restrictType="Sem restrições" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8555OA38g7fhG6myRY9DShFGKNwDBGm2-IA&s" name="Café s/ leite" cost="2,00" desc="Caso seja nescessário, a descrição será adicionada aqui" quant={10}></Product>
                </div>
                
                {/* <Cart
                onClickConfirm={handleConfirmOrder}
                onClickDeleteProdCart={handleDeleteProductFromCart}
                /> */}
                
            </div>
        </>
    );
};

export default Main;