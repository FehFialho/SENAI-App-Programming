import { useState, useEffect } from "react";
import "../styles/Timer.css";

export const Timer = () => {
    const [currTimer, setTimer] = useState();
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => {
                if (prev <= 0) {
                    clearInterval(interval);
                    // setMessage("Timer Off");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleStart = () => {
        const num = parseInt(inputValue, 10);
        if (!isNaN(num) && num > 0) {
            setTimer(num);
        }
    };

    return (
        <section className="timer-section">
            <p className="timer-display">{currTimer}</p>
            <div>
                <input
                    type="text"
                    placeholder="Insert Seconds"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className="timer-input"
                />
                <button onClick={handleStart} className="timer-button">
                    Start
                </button>
            </div>
        </section>
    );
};
