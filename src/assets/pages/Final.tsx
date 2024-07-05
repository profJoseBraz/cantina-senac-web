import "./Final.css";
import Header from "../components/Header";
import TimelineOrder from "../components/TimelineOrder";
import confirmed_icon from '../../img/icons_timeline/concluded-circle.png'
import clocktime_icon from '../../img/icons_timeline/clocktime-circle.png'

function Final() {
    const code = "UF4A07";

    return (
        <>
            <div className="final-header">
                <Header></Header>
                <TimelineOrder
                shoppingCartLine={confirmed_icon}
                orderReview={confirmed_icon}
                payment={confirmed_icon}
                purshaceConfirmation={clocktime_icon} 

                colorDescOne="#0FA958"
                opacityDescOne="1"
                colorDescTwo="#0FA958"
                opacityDescTwo="1"
                colorDescThree="#0FA958"
                opacityDescThree="1"
                colorDescFour="#699BF7"
                opacityDescFour="1"

                classNameCodigo='clocktime'
                />
            </div>
            <div className="recieve-time">
                <h3>Tempo para retirar seu pedido:</h3>
                <h1>30:00</h1>
            </div>
            <div className="recieve-code">
                <h3>Código do pedido:</h3>
                <h2>{code}</h2>
            </div>
            <div className="recieve-resume">
                <h3>Resumo</h3>
                <div className="recieve-itens">
                    <h4>2x Pão de Queijo</h4>
                    <h4>3x Café s/ Leite</h4>
                </div>
            </div>
            <div className="thanks">
                <h2>Agradecemos sua compra!</h2>
            </div>
        </>
    );
};

export default Final;