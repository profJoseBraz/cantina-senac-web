import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Product from "../components/Product";
import Search from "../components/Search";
import "./Main.css";
import { Products } from "../interfaces/Produto";
import axios from "axios";

function Main() {

// --- puxar todos os produtos disponíveis no dia ao entrar na página ---
const handleGetAllProducts = async () => {
    const res = await axios.get("https://cantina-senac-api-prod.up.railway.app/production")
    setProductsOnShop(res.data)
}
    useEffect(() => {
        handleGetAllProducts()
      }, [])


// --- ação ao clickar no carrinho de compras ---
    const handleCart = () => {
        if(cartOpen){
            setCartOpen(false)
        }
        else{
            setCartOpen(true)
        }
    }


// --- botão dentro carrinho de compras --> Ir para a tela de Revisão do Pedido ---
    const handleConfirmOrder = () => {
        alert("Confirmar pedido");
    }


// --- remover e adicionar produto do carrinho de compras ---
    const handleDeleteProduct = () => {
        alert("Remover produto");
    }

    const handleAddProduct = () => {
        alert("ok");
    };


// --- funções abaixo para aplicar filtros de categoria nos produtos ---
const [categoryId, setCategoryId] = useState(0)
const handleGetProdutsByCategory = async () => {
    if(categoryId != 0){
        const res = await axios.get(`https://cantina-senac-api-prod.up.railway.app/production/products?categoryId=${categoryId}`)
        setProductsOnShop(res.data)
    }
    else{
        handleGetAllProducts()
    }
}

    const handleOnClickTodos = () => {
        handleGetAllProducts()
    };

     const handleOnClickSobremesas = () => {
        setCategoryId(4)
     };

     const handleOnClickMarmitas = () => {
        setCategoryId(7)
     };

     const handleOnClickSalgados = () => {
        setCategoryId(2)
     };

     const handleOnClickBebidas = () => {
        setCategoryId(1)
     };

     useEffect(() => {
        handleGetProdutsByCategory()
        //console.log(categoryId)
     }, [categoryId])
// -----------------------------------------------


// --- inicializando um array para armazenar os produtos requisitados ---
    const [productsOnShop, setProductsOnShop] = useState<Products[]>([])

// --- estado do carrinho (aberto = true // fechado = false) ---
     const [cartOpen, setCartOpen] = useState(false)


    return (
        <>
            <div className="container">
                <Header
                onClick={handleCart}    
                displayIconCart={true}
                displayCounter={true}
                displayCestaRetorno={false}
                displayTitle={true}
                displayRevisaoPedidoRetorno={false}
                textIconHeader=""

                styleCartIcon={{transform: cartOpen ?  "translateX(-40vh)" : "translateX(0)", transition: ".5s"}}
                ></Header>

                <Search
                onClickTodos={handleOnClickTodos}
                onClickBebidas={handleOnClickBebidas}
                onClickSalgados={handleOnClickSalgados}
                onClickMarmitas={handleOnClickMarmitas}
                onClickSobremesas={handleOnClickSobremesas}
                ></Search>

                <div className="products">
                    {productsOnShop.map((product) => (
                        <Product
                        key={product.id_produto}
                        onClick={handleAddProduct}
                        restrictType={product.restricoes}
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdBLFQueGRO0CLe8MCGAuuWY4FEa9o6NKUQ&s"
                        name={product.nome}
                        cost={product.valor}
                        desc={product.descricao}
                        quant={product.quantidade}>
                        </Product>
                    ))}
                </div>
  
                <Cart
                style={{width: cartOpen ?  "40vh" : "0", transition: ".4s"}}
                onClickConfirm={handleConfirmOrder}
                onClickDeleteProdCart={handleDeleteProduct}
                /> 
                
            </div>
        </>
    );
};

export default Main;