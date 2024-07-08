import "./Final.css";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import TimelineOrder from "../components/TimelineOrder";
import confirmed_icon from '../../img/icons_timeline/concluded-circle.png'
import clocktime_icon from '../../img/icons_timeline/clocktime-circle.png'

function Final() {
    const [minutes, setMinutes] = useState(29);
    const [seconds, setSeconds] = useState(59);
    const [code, setCode] = useState<string>(String(localStorage.getItem('code')));
    const [date, setDate] = useState(new Date);
    const [horario, setHorario] = useState<string>(String(localStorage.getItem('time')));

    const handleTimer = () => {
        setSeconds(seconds - 1);
        if (seconds == 0) {
            setMinutes(minutes - 1);
            setSeconds(60);
        };
        if (seconds == 0 && minutes == 0) {
            alert("Timer zerou!");
        };
    };

    useEffect(() => {
        setTimeout(() => {handleTimer()}, 1000);

        const keys = Object.keys(localStorage);

        if(code === "null" || keys[0] === ""){
            setCode(Math.random().toString(20).slice(2, 8).toLocaleUpperCase());
        }

        setDate(date);
    
        const hoursNow = date.getHours();
        const minutesNow = date.getMinutes();
        var somaMinutos = minutesNow + 30;
        var somaHoras;
    
        if (somaMinutos > 60) {
            somaMinutos = somaMinutos - 60;
            somaHoras = hoursNow + 1;
        } else {
            somaHoras = hoursNow;
        };

        if(horario === "null" || keys[0] === ""){
            setHorario(`${somaHoras}:${somaMinutos}`);
        }
    });

    useEffect(() => {
        localStorage.setItem("code", code);
    }, [code])

    useEffect(() => {
        localStorage.setItem("time", horario);
    }, [horario])

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
                <p>{`${minutes}:${seconds}`}</p>
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