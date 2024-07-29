import './OrderReview.css'
import Header from '../components/Header'
import TimelineOrder from '../components/TimelineOrder'
import confirmed_icon from '../../img/icons_timeline/concluded-circle.png'
import clocktime_icon from '../../img/icons_timeline/clocktime-circle.png'
import empty_icon from '../../img/icons_timeline/empty-circle.png'
import { useNavigate } from 'react-router-dom'
import OrderReviewProduct from '../components/OrderReviewProduct'
import { useEffect, useState } from 'react'

interface Produto {
  id: number;
  produto: {
    nome: string;
    imagem: string;
    valor: number;
    id: number;
  };
}

const OrderReview = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [quantidade, setQuantidade] = useState([]);

  const navigate = useNavigate();

  const handleReturnShoppingCart = () => {
    navigate('/');
}

  const handleMethodPay = () => {
    navigate('/RevisãoDoPedido/MetodoDePagamento');
}

  const handleTotal = () => {
    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
      total += (produtos[i].produto.valor) * (quantidade[produtos[i].produto.id])
    };
    return total;
  };

  useEffect(() => {
    const produtosFromLocalStorage = localStorage.getItem('Produtos');
    if (produtosFromLocalStorage) {
      setProdutos(JSON.parse(produtosFromLocalStorage));
    }
    const quantidadeFromLocalStorage = localStorage.getItem('quantidades');
    if (quantidadeFromLocalStorage) {
      setQuantidade(JSON.parse(quantidadeFromLocalStorage));
    }
  }, []);

  return (
    <>
        <div className="container-orderReview">
            <Header
            displayRevisaoPedidoRetorno={false}
            displayCestaRetorno={true}
            displayIconCart={false}
            displayCounter={false}
            displayTitle={false}
            onClick={handleReturnShoppingCart}
            textIconHeader="Menu principal"
            />

            <TimelineOrder
            shoppingCartLine={confirmed_icon}
            orderReview={clocktime_icon}
            payment={empty_icon}
            purshaceConfirmation={empty_icon} 

            colorDescOne="#0FA958"
            opacityDescOne="1"
            colorDescTwo="#699BF7"
            opacityDescTwo="1"
            colorDescThree="black"
            opacityDescThree="0.4"
            colorDescFour="black"
            opacityDescFour="0.4"

            classNameRevisao='clocktime'
            />

            <div className="content-orderReview">
              <div className="content-title-orderReview">
                  <span>Revise o seu pedido:</span>
              </div>
              <div className='box-orders'>
                {produtos.map((produto) => 
                  <OrderReviewProduct nome={produto.produto.nome} imagem={produto.produto.imagem} preco={produto.produto.valor} quantidade={quantidade[produto.id]}></OrderReviewProduct>
                )}
              </div>

              <div><h2>Total: R${`${handleTotal()}`}</h2></div>

              <div className="box-metodPay">
                <button onClick={handleMethodPay} >Escolher método de pagamento</button>
              </div>
            </div>

        </div>    
    </>
  )
}

export default OrderReview