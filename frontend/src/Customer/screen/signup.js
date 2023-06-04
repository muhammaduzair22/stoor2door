import React, { useState } from 'react';
import axios from 'axios';
import "./signup.css";

function SignupPage() {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setusername] = useState('');
    const [address, setaddress] = useState('');
    const [phone, setphone] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // Send form data to the backend API
            const response = await axios.post('http://localhost:3001/user/signup', {
                email,
                password,
                name,
                username,
                address,
                phone,
            });

            // Handle successful signup response
            console.log('Signup successful:', response.data);

            // Reset form fields
            setEmail('');
            setname('');
            setPassword('');
            setusername('');
            setaddress('');
            setphone('');

        } catch (error) {
            // Handle error response from the API
            console.error('Signup error:', error.response.data);
        }
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-input"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">UserName:</label>
                    <input
                        type="text"
                        id="username"
                        className="form-input"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        className="form-input"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="number"
                        id="phone"
                        className="form-input"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-signup">Sign up</button>
            </form>
        </div>
    );
}

export default SignupPage;
