import React, { useRef } from "react";

const Refex = () => {
    const count = useRef(0);

    function handleAddValue() {
        count.current++;
        if (count.current==5) {
            alert("you hit button more than 5 times",count.current);
        }
        console.log("count.current:", count.current);
    }

    console.log("Component rendering");

    return (
        <div>
            <h1>UseRef Example</h1>
            <h2>Ref Counter: {count.current}</h2>
            <button onClick={handleAddValue}>Add Value</button>
        </div>
    );
};

export default Refex;
