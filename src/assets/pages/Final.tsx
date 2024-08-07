import "./Final.css";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import TimelineOrder from "../components/TimelineOrder";
import confirmed_icon from '../../img/icons_timeline/concluded-circle.png'
import clocktime_icon from '../../img/icons_timeline/clocktime-circle.png'

// --- interface para tipagem do produto ---
interface Produto {
    id: number;
    produto: {
        nome: string;
        imagem: string;
        valor: number;
        id: number;
    };
}

function Final() {
    // --- useStates dos minutos e segundos do timer ---
    const [minutes, setMinutes] = useState(29);
    const [minutesString, setMinutesString] = useState(String(minutes));
    const [seconds, setSeconds] = useState(1);
    const [secondsString, setSecondsString] = useState(String(seconds));

    // --- useState do código ---
    const [code, setCode] = useState<string>(String(localStorage.getItem('code')));

    // --- useStates para pegar horas e minutos atuais ---
    const [date, setDate] = useState(new Date);
    const [hoursNow, setHoursNow] = useState(date.getHours());
    const [minutesNow, setMinutesNow] = useState(date.getMinutes());

    // --- useStates para as horas e minutos do localstorage ---
    const [storedHours, setStoredHours] = useState<string>(String(localStorage.getItem('hours')));
    const [storedMinutes, setStoredMinutes] = useState<string>(String(localStorage.getItem('minutes')));

    // --- useState do horário de retirada a ser mostrado ---
    const [horario, setHorario] = useState(`${localStorage.getItem('hours')?.padStart(2, "0")}:${localStorage.getItem('minutes')?.padStart(2, "0")}`);

    // --- useState dos produtos e suas quantidades ---
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [quantidade, setQuantidade] = useState([]);

    // --- função que roda o timer ---
    const handleTimer = () => {
        setSeconds(seconds - 1);
        setSecondsString(String(seconds));
        if (seconds == 0 && minutes > 0) {
            setMinutes(minutes - 1);
            setMinutesString(String(minutes));
            setSeconds(59);
        };
        // --- condicional que limpa o localstorage quando o timer zera ---
        if (seconds <= 0 && minutes <= 0) {
            localStorage.clear();
        };
    };

    useEffect(() => {
        // setTimeout(() => {handleTimer()}, 1000);

        // --- constante para verificação do localstorage ---
        const keys = Object.keys(localStorage);

        // --- gera o código se não houver código no localstorage ---
        if(code === "null" || keys[0] === ""){
            setCode(Math.random().toString(20).slice(2, 8).toLocaleUpperCase());
        };

        // --- variáveis de hora e minutos ---
        setDate(date);
    
        setHoursNow(hoursNow);
        setMinutesNow(minutesNow);
        // --- soma para obter o horário de retirada do pedido ---
        var somaMinutos = minutesNow + 30;
        var somaHoras;
    
        if (somaMinutos > 60) {
            somaMinutos = somaMinutos - 60;
            somaHoras = hoursNow + 1;
        } else {
            somaHoras = hoursNow;
        };

        // --- se não houver horas e minutos no localstorage, utiliza as horas e minutos calculados ---
        if(storedHours === "null" || keys[0] === ""){
            setStoredHours(String(somaHoras));
            setStoredMinutes(String(somaMinutos));
            setHorario(`${String(somaHoras).padStart(2, "0")}:${String(somaMinutos).padStart(2, "0")}`);
        };

        // --- puxa as informações de produtos e quantidades do localstorage ---
        const produtosFromLocalStorage = localStorage.getItem('Produtos');
        if (produtosFromLocalStorage) {
            setProdutos(JSON.parse(produtosFromLocalStorage));
        };
        const quantidadeFromLocalStorage = localStorage.getItem('quantidades');
        if (quantidadeFromLocalStorage) {
            setQuantidade(JSON.parse(quantidadeFromLocalStorage));
        };
    }, []);

    useEffect(() => {
        // --- adiciona o código ao localstorage ---
        localStorage.setItem("code", code);
    }, [code]);

    useEffect(() => {
        // --- adiciona horas e minutos ao localstorage ---
        localStorage.setItem("hours", String(storedHours));
        localStorage.setItem("minutes", String(storedMinutes));
    }, [storedHours, storedMinutes]);

    useEffect(() => {
        // --- chama a função do timer a cada 1000 milisegundos (1 segundo) ---
        const timer = setTimeout(() => {
            handleTimer();
        }, 1000);

        // --- limpa timeouts anteriores para evitar problemas ---
        return () => clearTimeout(timer);
        // alert("teste")
    }, [seconds])

    useEffect(() => {
        // alert(localStorage.getItem("minutes"))

        // --- calculo para o timer caso a página seja recarregada --- 
        var calcMinutes = parseInt(storedMinutes);

        if (parseInt(storedHours) > hoursNow) {
            calcMinutes = parseInt(storedMinutes) + 60;
        };

        if (localStorage.getItem("minutes") != "null") setMinutes(calcMinutes - minutesNow);

        // setMinutes(calcMinutes - minutesNow);
    }, [localStorage])

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
                <h3>Horário para retirar seu pedido:</h3>
                <h1>{horario}</h1>
                <p>{`${minutesString.padStart(2, "0")}:${secondsString.padStart(2, "0")}`}</p>
            </div>
            <div className="recieve-code">
                <h3>Código do pedido:</h3>
                <h2>{code}</h2>
            </div>
            <div className="recieve-resume">
                <h3>Resumo</h3>
                <div className="recieve-itens">
                    {/* --- map dos produtos --- */}
                    {produtos.map((produto) => 
                        <h4>{`${quantidade[produto.id]}x ${produto.produto.nome}`}</h4>
                    )}
                </div>
            </div>
            <div className="thanks">
                <h2>Agradecemos sua compra!</h2>
            </div>
        </>
    );
};

export default Final;