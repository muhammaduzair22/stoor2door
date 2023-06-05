
import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import './payment.css';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');

    const handlePaymentSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                setErrorMessage(error.message);
                return;
            }

            // Process the payment method or perform other actions
            console.log(paymentMethod);
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred during payment. Please try again.');
        }
    };

    return (
        <div>
            <div className="payment-container">
                <h2>Payment Details</h2>
                <form onSubmit={handlePaymentSubmit} className="payment-form">
                    <div className="form-group">
                        <label htmlFor="card-element">Card Details</label>
                        <div className="card-element-container">
                            <CardElement id="card-element" className="card-element" options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        fontFamily: 'Arial, sans-serif',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                },
                            }} />
                        </div>
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <button type="submit" className="pay-button">Pay</button>
                </form>
            </div>
        </div>
    );
};
const StripePaymentWrapper = () => (
    <Elements stripe={stripePromise}>
        <Payment />
    </Elements>
);

export default StripePaymentWrapper;
