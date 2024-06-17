import './TimelineOrder.css'

interface Props {
    shoppingCartLine: string
    orderReview: string
    payment: string
    purshaceConfirmation: string 
}

const TimelineOrder = ({shoppingCartLine, orderReview, payment, purshaceConfirmation}: Props) => {
  return (
    <>
        <div className="container-timeline">
            <div className="line">
                <img src={shoppingCartLine} alt="" />
                <img src={orderReview} alt="" />
                <img src={payment} alt="" />
                <img src={purshaceConfirmation} alt="" />
            </div>
        </div>
    </>
  )
}

export default TimelineOrder