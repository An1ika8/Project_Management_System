import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import axios from "axios";

function Navbar() {
    const [newUsername, setNewUsername] = useState("");
    const [userProfile, setUserProfile] = useState(null);
    const [newEmail, setNewEmail] = useState("");

    const fetchUserProfile = () => {
        const token = localStorage.getItem("token");
        if (token) {
            axios
                .get("http://192.168.78.157:5000/user_profile", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    setUserProfile(res.data);
                    setNewUsername(res.data.username);
                    setNewEmail(res.data.email);
                })
                .catch((err) => console.log("Error fetching user profile:", err));
        }
    };

    return (
        <div className="navbar">
            {/* Left Side: Navigation Links */}
            <ul className="navbar-links">
                <li className="navbar-li">
                    <Link to="/create" className="navbar-link">Add Project</Link>
                </li>
                <li className="navbar-li">
                    <Link to="/members" className="navbar-link">Add Members</Link>
                </li>
                <li className="navbar-li">
                    <Link to="/profile" className="navbar-link">Profile</Link>
                </li>
            </ul>

            {/* Right Side: Welcome Message + Logout */}
            <div className="navbar-right">
                {userProfile && (
                    <div className="profile-info">
                        <span>Welcome, {userProfile.username}</span>

                    </div>
                )}
                
            </div>
        </div>
    );
}

export default Navbar;
