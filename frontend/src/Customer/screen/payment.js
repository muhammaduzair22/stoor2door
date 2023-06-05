import React from 'react';
import { Elements } from 'react-stripe-elements';
import PaymentForm from './PaymentForm';

const PaymentPage = () => {
    return (
        <div className="payment-page">
            <h2>Payment Page</h2>
            <Elements>
                <PaymentForm />
            </Elements>
        </div>
    );
};

export default PaymentPage;
