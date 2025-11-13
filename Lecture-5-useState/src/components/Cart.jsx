import { useState } from "react"

function Cart() {
    let price = 4500
    const [qnty, setQnty] = useState(1)
    function handlePlus(){
        setQnty(qnty + 1)
    }
    function handleMinus(){
        (qnty == 1) ? alert("Can not be less than 1.") : setQnty(qnty - 1)
    }
    
    
    return (
        <>
            <div className="item">
                <h2>Product Name : Lenovo Laptop</h2>
                <h3>Price : {price}</h3>
                <h3>Quantity : {qnty}</h3>
                <button onClick={handleMinus}>-</button>
                <button onClick={handlePlus}>+</button>
                <h3>Total Amount : {price * qnty}</h3>
            </div>
        </>
    )
}

export default Cart