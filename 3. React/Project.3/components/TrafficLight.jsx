import { useEffect, useState } from "react"

export const TrafficLight = () => {
    const [index, setIndex] = useState(0);

    const colors = ['green', 'yellow', 'red']

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 2000);

        return () => clearInterval(interval); 
    }, []);

    const currentColor = colors[index];

    return (
        <div
            style={{
                width: "200px",
                height: "200px",
                backgroundColor: currentColor,
                transition: "background-color 0.2s ease"
            }}
        >
        </div>
    );
}