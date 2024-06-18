import './OrderReview.css'
import Header from '../components/Header'
import TimelineOrder from '../components/TimelineOrder'

import confirmed_icon from '../../../public/concluded-circle.png'
import clocktime_icon from '../../../public/clocktime-circle.png'
import empty_icon from '../../../public/empty-circle.png'

const OrderReview = () => {

  const handleReturnShoppingCart = () => {
    alert("Voltar para a tela do carrinho");
}

  return (
    <>
        <div className="container-orderReview">
            <Header 
                displayCestaRetorno={true}
                displayIconCart={false}
                displayCounter={false}
                displayTitle={false}
                onClick={handleReturnShoppingCart}
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

            
        </div>    
    </>
  )
}

export default OrderReview