import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Product from "../components/Product";
import Search from "../components/Search";
import "./Main.css";
import { Productions } from "../interfaces/Production";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductSkeleton from "../components/ProductSkeleton";

function Main() {

// --- useNavigate() para navegar entre as páginas ---
const navigate = useNavigate();


    // --- verifica se há os minutos do timer do localstorage, se houver, redireciona para a final.tsx ---
    if (localStorage.getItem("minutes")) {
        navigate("/RevisãoDoPedido/MetodoDePagamento/CheckoutDaCompra");
    };


// --- puxar todos os produtos disponíveis no dia ao entrar na página ---
    const handleGetAllProducts = async () => {
        const res = await axios.get("https://cantina-senac-api-prod.up.railway.app/production")
        setProductsOnShop(res.data)
    }

    useEffect(() => {
        handleGetAllProducts()

        setTimeout(() => {
            setLoadingSKL(false)
        }, 2000);

        // --- casos tenha algum produto no localstorage, puxa tais produtos e suas quantidades e as coloca no carrinho ---
        if (localStorage.getItem("Produtos")) {
            setProductsOnCart(JSON.parse(String(localStorage.getItem("Produtos"))));
        }

        if (localStorage.getItem("quantidades")) {
            setCartQuantities(JSON.parse(String(localStorage.getItem("quantidades"))));
        };
        
      }, [])


// --- funções abaixo para aplicar filtros de pesquisa por nome nos produtos ---
const [valueInputNameProduct, setValueInputNameProduct] = useState("")
    const handleGetProductsByName = () => {
        const searchResults = productsOnShop.filter(production =>
        production.produto.nome.toLowerCase().includes(valueInputNameProduct.toLowerCase())
        )   
            setProductsOnShop(searchResults)
    }

    useEffect(() => {
        handleGetProductsByName()
        
        setTimeout(() => {
            setLoadingSKL(false)
        }, 2000);
        
     }, [valueInputNameProduct])


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
        setCategoryId(0)
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
        
        setTimeout(() => {
            setLoadingSKL(false)
        }, 2000);
        
     }, [categoryId])
// -----------------------------------------------


// --- ação de clique no carrinho de compras ---
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
        navigate('/RevisãoDoPedido');
        localStorage.setItem("Produtos", JSON.stringify(productsOnCart))
        localStorage.setItem("quantidades", JSON.stringify(cartQuantities))
    }


// --- adicionar produto ao carrinho de compras ---
    const handleAddProduct = (product: any) => {
    let productAlreadyCart = productsOnCart.some(prodSelected => prodSelected.produto.id === product.id)

    if(!productAlreadyCart){
        setProductsOnCart([...productsOnCart, product])
        handleIncreaseTotal(product.id)

        setAddDelProdClass(prev => ({
            ...prev,
            [product.id]: "box-produto-cart",
          }))
    }
    else{
        handleIncreaseTotal(product.id)
    }
}

// --- remover produto do carrinho de compras e zerar sua quantidade ---
    const handleDeleteProduct = (productId: any) => {
        if(slowDel == 1){
            setAlertSlow(true)
                setTimeout(() => {
                    setAlertSlow(false)
                }, 3000)
        }
        else{
            setSlowDel(slowDel + 1)
            setAddDelProdClass(prev => ({
                ...prev,
                [productId]: "box-produto-cart-out",
            }))

            setTimeout(() => {
                setProductsOnCart(productsOnCart.filter(product => product.produto.id != productId))

                setCartQuantities(prev => ({
                    ...prev,
                    [productId]: 0
                }))
                
                setTimeout(() => {
                    setSlowDel(0)
                }, 100)
            }, 500)
        }
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


// --- inicializando um array para armazenar os produtos requisitados ---
const [productsOnShop, setProductsOnShop] = useState<Productions[]>([])


// --- inicializando um array para armazenar os produtos do carrinho ---
const [productsOnCart, setProductsOnCart] = useState<Productions[]>([])


// --- estado do carrinho (aberto = true // fechado = false) ---
const [cartOpen, setCartOpen] = useState(false)


// --- loop para somar todos os itens adicionados no carrinho ---
    const handleSetTotal = () => {
        let totalCart = 0;
        for (let i = 0; i < productsOnCart.length; i++) {
            totalCart += productsOnCart[i].produto.valor * (cartQuantities[productsOnCart[i].produto.id])
        }
        return totalCart
    }


// --- verificar o tamanho do dispositivo e ajustar os estilos da página (toda vez que a página carregar será setado o valor da largura da tela) ---
const [topValue, setTopValue] = useState("")
const [rightValue, setRightValue] = useState("")
const [cartIconTranslate, setCartIconTranslate] = useState("")
const [cartTranslate, setCartTranslate] = useState("")

    const handleSetWindowWidthForStyles = () => {
        if(window.innerWidth < 380){
            console.log("a largura é menor 380px")
            setTopValue("15px")
            setRightValue("6vw")

            setCartIconTranslate("translateX(-60vw)")
            setCartTranslate("translateX(0vw)")
        }
        else if(window.innerWidth < 481){
            console.log("a largura é menor que 481px")
            setTopValue("15px")
            setRightValue("6vw")

            setCartIconTranslate("translateX(-65vw)")
            setCartTranslate("translateX(0vw)")
        }

        else if(window.innerWidth < 769){
            console.log("a tela-larg é menor que 769px")
            setTopValue("20px")
            setRightValue("7vw")

            setCartIconTranslate("translateX(-60vw)")
            setCartTranslate("translateX(0vw)")
        }

        else if(window.innerWidth < 1025){
            console.log("a tela-larg é menor que 1025px")
            setTopValue("20px")
            setRightValue("5vw")

            setCartIconTranslate("translateX(-60vw)")
            setCartTranslate("translateX(0vw)")
        }

        else if(window.innerWidth < 1351){
            console.log("a tela-larg é menor que 1351px")
            setTopValue("20px")
            setRightValue("43vw")

            setCartIconTranslate("translateX(10vw)")
            setCartTranslate("translateX(0vw)")
            setCartOpen(true)
        }

        else if(window.innerWidth < 1500){
            console.log("a tela-larg é menor que 1500px")
            setTopValue("20px")
            setRightValue("43vw")

            setCartIconTranslate("translateX(10vw)")
            setCartTranslate("translateX(0vw)")
            setCartOpen(true)
        }

        else if(window.innerWidth > 1500){
            console.log("a tela-larg é maior que 1500px")
            setTopValue("20px")
            setRightValue("43vw")

            setCartIconTranslate("translateX(18vw)")
            setCartTranslate("translateX(0vw)")
            setCartOpen(true)
        }
    }

    useEffect( () => {
        handleSetWindowWidthForStyles()
    }, [])


// -------------------------- observa se o produto está com a quantia == 0, caso verdadeiro, className: disable ---------------------------
const [statusClass, setStatusClass] = useState<{ [key: number]: string }>({})

    const handleSetStatusClass = (productId: number) => {
        const prodsActiveOnShop = productsOnShop.find(productions => productions.produto.id === productId)

        const statusClass = prodsActiveOnShop?.quantidade === 0 ? 'product-disable' : 'product-enable'

        setStatusClass(prev => ({ ...prev, [productId]: statusClass }))
    }

    useEffect(() => {
    productsOnShop.forEach(production => {
        handleSetStatusClass(production.produto.id)
    })
    }, [productsOnShop])


// -------------------------- quando adicionar um novo item no carrinho, haverá uma animação no contador ---------------------------
const [addConterClass, setAddConterClass] = useState("")

    const handleSetCounterClass = () => {
        setAddConterClass("counter-itemAdded")

        setTimeout(() => {
            setAddConterClass("counter")
        }, 100)
    }

    useEffect(() => {
        handleSetCounterClass()
    }, [productsOnCart.length])


// -------------------------- quando remover um item do carrinho, haverá uma animação de remoção ---------------------------
// -------------------------- obs: a classe é aplicada quando adiciona e remove o produto do carrinho
const [addDelProdClass, setAddDelProdClass] = useState({})

// esse slowDel está sendo usado para corrigir um bug, evitando o usuário exlcuir vários produtos do carrinho de forma rápida
const [slowDel, setSlowDel] = useState(0)

// esse slowDel está sendo usado para corrigir um bug, evitando o usuário exlcuir vários produtos do carrinho de forma rápida
const [alertSlow, setAlertSlow] = useState(false)

// -------------------------- Caso a requisição demore, haverá esqueletos de loadings(produtos da vitrine) ---------------------------
const [isLoadingSKL, setLoadingSKL] = useState(false)

    useEffect(() => {
        setLoadingSKL(true)
    }, [valueInputNameProduct, categoryId])
        
    return (
        <>
            <div className="container">
                <Header
                counterClass={addConterClass}
                onClick={handleCart}    
                displayIconCart={true}
                displayCounter={true}
                displayCestaRetorno={false}
                displayTitle={true}
                displayRevisaoPedidoRetorno={false}
                textIconHeader=""
                counterProductCart={productsOnCart.length}

                styleIconCart={{
                    pointerEvents: window.innerWidth < 1024 ? "all" : "none",
                    transform: cartOpen ?  cartIconTranslate : "translateX(0)",
                    backgroundColor: cartOpen ?  "white" : "rgb(255, 255, 255, 0.8)",
                    borderRadius: "50%",
                    borderBottom: cartOpen ? "solid rgb(0, 74, 141) 4px" : "none",
                    borderLeft: cartOpen ? "solid rgb(0, 74, 141) 4px" : "none",
                    transition: "800ms",
                    position: "fixed",
                    top: cartOpen ? "3px" : topValue,
                    right: rightValue,
                    boxShadow: cartOpen ? "-1px 0px 20px rgba(0, 0, 0, 0.9)" : "none",
                    zIndex: "2"}}

                styleCartOpenned={{
                    opacity: cartOpen && window.innerWidth < 1024 ? "0.1" : "1",
                    pointerEvents: cartOpen && window.innerWidth < 1024 ? "none" : "all",
                    overflow: "hidden",
                    transition: "0.3s"}}
                />

                <Search
                styleFilters={{
                    opacity: cartOpen && window.innerWidth < 1024 ? "0.1" : "1",
                     pointerEvents: cartOpen && window.innerWidth < 1024 ? "none" : "all"}}
                  
                onClickTodos={handleOnClickTodos}
                onClickBebidas={handleOnClickBebidas}
                onClickSalgados={handleOnClickSalgados}
                onClickMarmitas={handleOnClickMarmitas}
                onClickSobremesas={handleOnClickSobremesas}

                activeFilterTodos={categoryId == 0 ? "activeFilter" : ""}
                activeFilterBeb={categoryId == 1 ? "activeFilter" : ""}
                activeFilterMarm={categoryId == 2 ? "activeFilter" : ""}
                activeFilterSalg={categoryId == 3 ? "activeFilter" : ""}
                activeFilterSobr={categoryId == 4 ? "activeFilter" : ""}

                valueInputSearch={(e) => setValueInputNameProduct(e.target.value)}
                realValueInputSearch={valueInputNameProduct}
                />

                <div className="products" style={{
                    opacity: cartOpen && window.innerWidth < 1024 ? "0.1" : "1",
                     pointerEvents: cartOpen && window.innerWidth < 1024 ? "none" : "all",
                      overflow: "hidden", transition: "0.3s"}}>

                    {isLoadingSKL ?
                        (<ProductSkeleton boxProds={productsOnShop.length} />)
                        :
                        (productsOnShop.map((production) => (
                            <Product
                                key={production.produto.id}
                                onClick={() => handleAddProduct(production)}
                                restrictType={"production.produto.restricao"}
                                img={production.produto.imagem}
                                name={production.produto.nome}
                                cost={production.produto.valor}
                                desc={production.produto.descricao}
                                quant={production.quantidade}
                                statusClassName={statusClass[production.produto.id]}
                            />
                        )))}
                       
                </div>
  
                <Cart
                style={{transform: cartOpen ?  cartTranslate : "translateX(80vh)", boxShadow: cartOpen ? "-1px 0px 15px black" : "none", transition: ".7s"}}
                onClickConfirm={handleConfirmOrder}
                onClickDeleteProdCart={handleDeleteProduct}
                onClickIncreaseQuantity={handleIncreaseTotal}
                onClickDecreaseQuantity={handleDecreaseTotal}

                delProdClass={addDelProdClass}
                productsCart={productsOnCart}
                cartQuantities={cartQuantities}
                totalCart={handleSetTotal()}
                />

                <div className={alertSlow ? "slowDel-dialog-open" : "slowDel-dialog-close"}>
                    <span>Remova um produto por vez.</span>
                </div>
            </div>
        </>
    );
};

export default Main;