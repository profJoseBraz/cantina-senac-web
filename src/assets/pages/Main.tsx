import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Product from "../components/Product";
import Search from "../components/Search";
import "./Main.css";
import { Products } from "../interfaces/Production";
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
    }
    
    const handleOnClickBebidas = () => {
       setCategoryId(1)
    }

    const handleOnClickMarmitas = () => {
       setCategoryId(2)
    }

    const handleOnClickSalgados = () => {
        setCategoryId(3)
     }

     const handleOnClickSobremesas = () => {
        setCategoryId(4)
     }


     useEffect(() => {
        handleGetProdutsByCategory()
        //console.log(categoryId)
     }, [categoryId])
// -----------------------------------------------


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


// --- adicionar produto ao carrinho de compras ---
    const handleAddProduct = (product: any) => {
    let productAlreadyCart = productsOnCart.some(prodSelected => prodSelected.id_produto === product.id_produto);

    if(!productAlreadyCart){
        setProductsOnCart([...productsOnCart, product])
        handleIncreaseTotal(product.id_produto)
    }
    else{
        handleIncreaseTotal(product.id_produto)
    }
        console.log(productsOnCart)
        console.log(product.imagem_produto)
}

// --- remover produto do carrinho de compras e zerar sua quantidade ---
    const handleDeleteProduct = (productId: any) => {
        setProductsOnCart(productsOnCart.filter(product => product.id_produto != productId))

        setCartQuantities(prev => ({
            ...prev,
            [productId]: 0
        }))
      }

// --- interação quantidade de cada produto ---
    const [cartQuantities, setCartQuantities] = useState<{ [key: number]: number }>({})

    const handleIncreaseTotal = (productId: any) => {
        setCartQuantities(prev => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1
        }))
    } 

    const handleDecreaseTotal = (productId: number) => {
        setCartQuantities(prev => ({
            ...prev,
            [productId]: prev[productId] > 1 ? prev[productId] - 1 : 1
        }))
    }
     console.log(cartQuantities)


// --- inicializando um array para armazenar os produtos requisitados ---
    const [productsOnShop, setProductsOnShop] = useState<Products[]>([])


// --- estado do carrinho (aberto = true // fechado = false) ---
    const [cartOpen, setCartOpen] = useState(false)


// --- inicializando um array para armazenar os produtos do carrinho ---
    const [productsOnCart, setProductsOnCart] = useState<Products[]>([])


// --- loop para somar todos os itens adicionados no carrinho ---
    const handleSetTotal = () => {
        let totalCart = 0;
        for (let i = 0; i < productsOnCart.length; i++) {
          totalCart += parseInt(productsOnCart[i].valor_produto) * (cartQuantities[productsOnCart[i].id_produto])
        }
        return totalCart
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
                counterProductCart={productsOnCart.length}

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
                        onClick={() => handleAddProduct(product)}
                        restrictType={product.restricao_produto}
                        img={product.imagem_produto}
                        name={product.nome_produto}
                        cost={product.valor_produto}
                        desc={product.descricao_produto}
                        quant={product.quantidade}>
                        </Product>
                    ))}
                </div>
  
                <Cart
                style={{width: cartOpen ?  "40vh" : "0", transition: ".4s"}}
                onClickConfirm={handleConfirmOrder}
                onClickDeleteProdCart={handleDeleteProduct}
                onClickIncreaseQuantity={handleIncreaseTotal}
                onClickDecreaseQuantity={handleDecreaseTotal}

                productsCart={productsOnCart}
                cartQuantities={cartQuantities}
                totalCart={handleSetTotal()}
                />
            </div>
        </>
    );
};

export default Main;