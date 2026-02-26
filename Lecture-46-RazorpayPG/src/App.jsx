import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const url = 'http://127.0.0.1:3000/create-order';  // Update to your backend port if different
  const [amount, setAmount] = useState(100);
  const rzpRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePay = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })  // Send dynamic amount
      });

      const order = await response.json();
      console.log('Order:', order);

      // Checkout options
      const options = {
        key: import.meta.env.VITE_API_KEY,  // Add to .env
        amount: order.amount,
        currency: order.currency,
        name: 'Your App Name',
        description: 'Test Payment',
        order_id: order.id,
        handler: function (response) {
          console.log('Payment Success:', response);
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          // Send to backend for verification
        },
        prefill: {
          name: 'Test User',
          email: 'test@example.com',
          contact: '9999999999'
        },
        theme: { color: '#3399cc' }
      };

      rzpRef.current = new window.Razorpay(options);
      rzpRef.current.open();
    } catch (error) {
      console.error('Error:', error);
      alert('Payment initiation failed');
    }
  };

  return (
    <>
      <h1>Razorpay Payment Gateway Integration</h1>
      <form id="payment-form">
        <label htmlFor="amount">Amount (₹):</label>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          id="amount" 
          name="amount" 
          required 
          min="1"
        />
        <button type="button" onClick={handlePay}>Pay Now</button>
      </form>
    </>
  );
}

export default App;
