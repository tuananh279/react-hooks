import { useState } from "react";

const prices = [100, 200, 399]

function UseStateEx() {

    const [counter, setCounter] = useState(1)
    const [info, setInfo] = useState({
        name: "Tuan Anh"
    })
    const [total, setTotal] = useState(() => {
        const totalPrices = prices.reduce((total, item) => total + item)
        
        return totalPrices 
    })

    const handleIncrease = () => {
        setCounter(counter + 1)
    }

    const handleUpdateInfo = () => {
        setInfo({
            ...info,
            age: "23"
        })
    }

    const CounterApp = () => (
        <div>
            <h1>Counter APP</h1>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )

    const UpdateInfo = () => (
        <div>
            <h1>Update Info APP</h1>
            <div>{JSON.stringify(info)}</div>
            <button onClick={handleUpdateInfo}>Update Info</button>
        </div>
    )

    const TotalPrices = () => (
        <div>
            <h1>Total Price APP</h1>
            {total}
        </div>
    )

    return (
        <div style={{ padding: 20 }}>
            <CounterApp />
            <UpdateInfo />
            <TotalPrices />
        </div>
    );
}

export default UseStateEx;