import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

const PaymentForm = ({ stripe }) => {
    const [name, setName] = useState('');
    const [isProcessing, setProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePayment = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const { token } = await stripe.createToken({ name });
        const response = await axios.post('/api/payment', { token });

        if (response.data.success) {
            // Payment success logic
            console.log('Payment successful!');
        } else {
            // Payment error logic
            setErrorMessage('Payment failed. Please try again.');
        }

        setProcessing(false);
    };

    return (
        <div className="payment-form">
            <form onSubmit={handlePayment}>
                <label>
                    Cardholder Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Card Details:
                    <CardElement />
                </label>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <button type="submit" disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
        </div>
    );
};

export default injectStripe(PaymentForm);
