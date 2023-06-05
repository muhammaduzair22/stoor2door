import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css'; // Import the CSS file for styling

function UserProfile() {
    const [userData, setUserData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [updatedUserData, setUpdatedUserData] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        address: '',
        phone: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('token'); // Assuming you have stored the token in localStorage
        console.log(token)
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/getuser', {
                    headers: {
                        token: token,
                    },
                });

                await setUserData(response.data);
                console.log(response.data)

            } catch (error) {
                console.log('Error fetching user data:', error);
            }
        };

        if (token) {
            fetchUserData();
        }
    }, []);

    const handleEditClick = () => {
        setEditMode(true);
        setUpdatedUserData({
            name: userData.name,
            username: userData.username,
            password: userData.password,
            email: userData.email,
            address: userData.address,
            phone: userData.phone,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    console.log(userData)

    const handleSaveClick = async () => {
        const id = userData._id;
        try {
            const token = localStorage.getItem('token'); // Assuming you have stored the token in localStorage

            const response = await axios.post(`http://localhost:3001/user/update/${id}`, updatedUserData, {
                headers: {
                    token: token,
                },
            });

            setUserData(response.data);
            setEditMode(false);
        } catch (error) {
            console.log('Error updating user data:', error);
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            {editMode ? (
                <div className="edit-mode">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={updatedUserData.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        UserName:
                        <input
                            type="text"
                            name="username"
                            value={updatedUserData.username}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="text"
                            name="password"
                            value={updatedUserData.password}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={updatedUserData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={updatedUserData.address}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="number"
                            name="phone"
                            value={updatedUserData.phone}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            ) : (
                <div className="display-mode">
                    <p>
                        <strong>Name:</strong> {userData.name}
                    </p>
                    <p>
                        <strong>UserName:</strong> {userData.username}
                    </p>
                    <p>
                        <strong>Password:</strong> {userData.password}
                    </p>
                    <p>
                        <strong>Email:</strong> {userData.email}
                    </p>
                    <p>
                        <strong>Address:</strong> {userData.address}
                    </p>
                    <p>
                        <strong>Phone:</strong> {userData.phone}
                    </p>
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
