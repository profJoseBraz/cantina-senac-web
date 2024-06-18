import './TimelineOrder.css'

interface Props {
    shoppingCartLine: string
    orderReview: string
    payment: string
    purshaceConfirmation: string

    colorDescOne: string
    opacityDescOne: string

    colorDescTwo: string
    opacityDescTwo: string

    colorDescThree: string
    opacityDescThree: string

    colorDescFour: string
    opacityDescFour: string

    classNameCarrinho?: string
    classNameRevisao?: string
    classNamePagamento?: string
    classNameCodigo?: string
}

const TimelineOrder = ({ shoppingCartLine, orderReview, payment, purshaceConfirmation, colorDescOne, opacityDescOne, colorDescTwo, opacityDescTwo, colorDescThree, opacityDescThree, colorDescFour, opacityDescFour, classNameCarrinho, classNameCodigo, classNamePagamento, classNameRevisao }: Props) => {

  const colorDescCarrinho: React.CSSProperties = { color: colorDescOne, opacity: opacityDescOne }
  const colorDescRevisao: React.CSSProperties = { color: colorDescTwo, opacity: opacityDescTwo }
  const colorDescPagamento: React.CSSProperties = { color: colorDescThree, opacity: opacityDescThree }
  const colorDescCodigo: React.CSSProperties = { color: colorDescFour, opacity: opacityDescFour }

  return (
    <>
        <div className="container-timeline">
            <div className="line">
                <img  className={classNameCarrinho} src={shoppingCartLine} alt="" />
                <img  className={classNameRevisao} src={orderReview} alt="" />
                <img  className={classNamePagamento} src={payment} alt="" />
                <img  className={classNameCodigo} src={purshaceConfirmation} alt="" />
            </div>

            <div className="conectors">
              <div className="conectorOne"></div>
              <div className="conectorTwo"></div>
              <div className="conectorThree"></div>
            </div>

            <div className="descriptions">
                <div className="descOne"><span style={colorDescCarrinho} >Carrinho de compras</span></div>
                <div className="descTwo"><span style={colorDescRevisao} >Revisão do pedido</span></div>
                <div className="descThree"><span style={colorDescPagamento} >Forma de pagamento</span></div>
                <div className="descFour"><span style={colorDescCodigo} >Código de retirada</span></div>
            </div>
        </div>
    </>
  )
}

export default TimelineOrder