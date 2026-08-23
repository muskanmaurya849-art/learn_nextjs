'use client';

import React, { useState, useEffect } from "react";
import "./style.css";

const Counter: React.FC = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Counter Mounted");
    }, []);


    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };


    return(
        <div className="counter-container">
            <h1>{count}</h1>
            <button style={{ background: "lightgreen" }} onClick={increment} >INC</button>
            <button style={{ background: "blue"}}  onClick={decrement}>DEC</button>
        </div>
    );
};

export default Counter;