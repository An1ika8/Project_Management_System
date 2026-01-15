import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./UserProfile.css";  // Import the updated CSS file

function UserProfile() {
    const [userProfile, setUserProfile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in.");
            navigate("/login");
            return;
        }

        axios
            .get("http://192.168.78.157:5000/user_profile", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUserProfile(res.data);
                setUsername(res.data.username);
                setEmail(res.data.email);
            })
            .catch((err) => {
                console.error("Error fetching user profile:", err);
                alert("Failed to fetch user profile.");
            });
    }, [navigate]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in.");
            return;
        }

        const updatedData = { username, email };

        axios
            .put("http://192.168.78.157:5000/user_profile", updatedData, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUserProfile(res.data);
                setIsEditing(false);
                alert("Profile updated successfully!");
            })
            .catch((err) => {
                console.error("Error updating user profile:", err);
                alert("Failed to update profile.");
            });
    };

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2 className="profile-title">User Profile</h2>
            </div>

            <div className="profile-info2">
                <span className="profile-detail">Username: {username}</span>
                <p className="profile-detail">Email: {email}</p>

                <div className="profile-buttons">
                    <button className="btn btn-edit" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? "Cancel" : "Edit Profile"}
                    </button>

                    <Link to="/home" className="btn btn-back-home">
                        Back to Home
                    </Link>
                </div>

                {isEditing && (
                    <form className="profile-form" onSubmit={handleUpdate}>
                        <label htmlFor="username" className="profile-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="profile-input"
                        />

                        <label htmlFor="email" className="profile-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="profile-input"
                        />

                        <button type="submit" className="btn btn-save">
                            Save Changes
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
