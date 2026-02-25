import { useState } from 'react';
import './App.css'
import Razorpay from 'razorpay';


function App() {
  const url = 'http://127.0.0.1:3000/create-order';
  const [amount, setAmount] = useState(100);
  const handlePay = async() => {
      // Create order by calling the server endpoint
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount, currency: 'INR', receipt: 'receipt#1', notes: {} })
      });

      const order = await response.json();
      console.log(order)
    }
  


  return (
    <>
<h1>Razorpay Payment Gateway Integration</h1>
  <form id="payment-form">
    <label htmlFor="amount">Amount:</label>
    <input type="number" onChange={(e)=>setAmount(e.target.value)} id="amount" name="amount" required />
    <button type="button" onClick={handlePay}>Pay Now</button>
  </form>

  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
 
      {/* <button onClick={handlePay}>
        Pay Now
      </button> */}

    </>
  )
}

export default App
