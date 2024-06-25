import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Product from "../components/Product";
import Search from "../components/Search";
import "./Main.css";
import { Products } from "../interfaces/Produto";
import axios from "axios";

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

     const handleOnClickSalgados = () => {
         
     };

    const handleOnClickTodos = () => {
        handleGetProducts()
    };

    const [pesquisarCategoria, setPesquisarCategoria] = useState(0)

    const [productsOnShop, setProductsOnShop] = useState<Products[]>([])
    const [idProduto, setIdProduto] = useState(0)
    const [quantidade, setQuantidade] = useState(0)
    const [categoria, setCategoria] = useState("")
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const [img, setImg] = useState("")

    const handleGetProducts = async () => {
          const res = await axios.get("https://cantina-senac-api-prod.up.railway.app/production")
          setProductsOnShop(res.data)
      }
    
    //   useEffect(() => {
    //     handleGetProducts()
    //   }, [])

      const handleGetProdutsByCategory = async () => {
        setPesquisarCategoria(1)

        const res = await axios.get(`https://cantina-senac-api-prod.up.railway.app/products?categoryId=${pesquisarCategoria}`)
        setProductsOnShop(res.data)
    }
      

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
                ></Header>

                <Search
                onClickTodos={handleOnClickTodos}
                onClickSalgados={handleGetProdutsByCategory}
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

                

                
                
                {/* <Cart
                onClickConfirm={handleConfirmOrder}
                onClickDeleteProdCart={handleDeleteProductFromCart}
                /> */}
                
            </div>
        </>
    );
};

export default Main;