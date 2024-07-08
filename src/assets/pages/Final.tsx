import "./Final.css";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import TimelineOrder from "../components/TimelineOrder";
import confirmed_icon from '../../img/icons_timeline/concluded-circle.png'
import clocktime_icon from '../../img/icons_timeline/clocktime-circle.png'

function Final() {
    const [minutes, setMinutes] = useState(60);
    const [minutesString, setMinutesString] = useState(String(minutes));
    const [seconds, setSeconds] = useState(0);
    const [secondsString, setSecondsString] = useState(String(seconds));
    const [code, setCode] = useState<string>(String(localStorage.getItem('code')));
    const [date, setDate] = useState(new Date);
    const [hoursNow, setHoursNow] = useState(date.getHours());
    const [minutesNow, setMinutesNow] = useState(date.getMinutes());
    const [storedHours, setStoredHours] = useState<string>(String(localStorage.getItem('hours')));
    const [storedMinutes, setStoredMinutes] = useState<string>(String(localStorage.getItem('minutes')));
    const [horario, setHorario] = useState(`${localStorage.getItem('hours')}:${localStorage.getItem('minutes')}`);

    const handleTimer = () => {
        setSeconds(seconds - 1);
        setSecondsString(String(seconds));
        if (seconds == 0) {
            setMinutes(minutes - 1);
            setMinutesString(String(minutes));
            setSeconds(59);
        };
        if (seconds <= 0 && minutes <= 0) {
            localStorage.clear();
        };
    };

    useEffect(() => {
        setTimeout(() => {handleTimer()}, 1000);

        const keys = Object.keys(localStorage);

        if(code === "null" || keys[0] === ""){
            setCode(Math.random().toString(20).slice(2, 8).toLocaleUpperCase());
        };

        setDate(date);
    
        setHoursNow(hoursNow);
        setMinutesNow(minutesNow);
        var somaMinutos = minutesNow + 30;
        var somaHoras;
    
        if (somaMinutos > 60) {
            somaMinutos = somaMinutos - 60;
            somaHoras = hoursNow + 1;
        } else {
            somaHoras = hoursNow;
        };

        if(storedHours === "null" || keys[0] === ""){
            setStoredHours(String(somaHoras));
            setStoredMinutes(String(somaMinutos));
            setHorario(`${String(somaHoras).padStart(2, "0")}:${String(somaMinutos).padStart(2, "0")}`);
        };

        var calcMinutes = parseInt(storedMinutes);

        if (parseInt(storedHours) > hoursNow) {
            calcMinutes = parseInt(storedMinutes) + 60;
        };

        if (minutes === 60) setMinutes(calcMinutes - minutesNow);
    });

    useEffect(() => {
        localStorage.setItem("code", code);
    }, [code]);

    useEffect(() => {
        localStorage.setItem("hours", String(storedHours));
        localStorage.setItem("minutes", String(storedMinutes));
    }, [storedHours]);

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