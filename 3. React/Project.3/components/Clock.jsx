import { useState, useEffect } from "react";

export const Clock = () => {

    var date = new Date();
    const [ currDate, setDate] = useState(date.toLocaleTimeString("pt-BR"))
    
    useEffect(() => {
    // cria o intervalo que roda a cada 1 segundo
    const interval = setInterval(() => {
      setDate(new Date().toLocaleTimeString("pt-BR"));
    }, 1000);

    // limpa o intervalo quando o componente desmonta
    return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div style={{
                fontFamily: 'monospace',
                fontSize: '3rem',
                color: 'rgb(209, 214, 219)',
                backgroundColor: 'rgb(139, 37, 37)',
                padding: '15px 40px',
                borderRadius: '15px',
                textAlign: 'center'
            }}>{currDate}</div>
        </>
    )
};
