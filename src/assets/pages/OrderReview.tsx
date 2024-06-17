import './OrderReview.css'
import Header from '../components/Header'
import TimelineOrder from '../components/TimelineOrder'

import confirmed_icon from '../../../public/concluded-circle.png'
import clocktime_icon from '../../../public/clocktime-circle.png'
import empty_icon from '../../../public/empty-circle.png'

const OrderReview = () => {
  return (
    <>
        <div className="container-orderReview">
            <Header 
                displayCestaRetorno={true}
                displayIconCart={false}
                displayCounter={false}
                displayTitle={false}
            />

            <TimelineOrder
            shoppingCartLine={confirmed_icon}
            orderReview={clocktime_icon}
            payment={empty_icon}
            purshaceConfirmation={empty_icon} 
            />
        </div>    
    </>
  )
}

export default OrderReview