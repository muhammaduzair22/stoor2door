import React, { useState } from 'react';
import './checkout.css';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const [orderDetails, setOrderDetails] = useState({
        items: [
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
            { id: 3, name: 'Product 3', price: 30 },
        ],
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data and handle the checkout
        console.log(formData);
        // Reset the form
        setFormData({
            name: '',
            email: '',
            address: '',
            city: '',
            postalCode: '',
            country: '',
        });
    };
    const orderItems = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];
    const getTotalPrice = () => {
        return orderItems.reduce((total, item) => total + item.price, 0);
    }
    return (
        <div className="checkout-page">
            {/* <div className="receipt">
                <h2>Receipt</h2>
                <div className="order-details">
                    {orderDetails.items.map((item) => (
                        <div key={item.id} className="item">
                            <span className="name">{item.name}</span>
                            <span className="price">${item.price.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="receipt">
                <h2 className="receipt-title">Order Receipt</h2>
                <hr></hr>
                <div className="order-details">
                    {orderDetails.items.map((item) => (
                        <div key={item.id} className="item">
                            <span className="item-name">{item.name}</span>
                            <span className="item-price">${item.price.toFixed(2)}</span>
                        </div>
                    ))}
                    <hr></hr>
                    <div className="total">
                        <span className="total-label">Total:</span>
                        <span className="total-price">${getTotalPrice().toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className="information-form">
                <h2>Information</h2>
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Place Order</button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;