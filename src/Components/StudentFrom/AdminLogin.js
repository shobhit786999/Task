import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StudentFrom/AdminLogin.css"

function AdminLogin() {
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Example: Hardcoded admin credentials
        if (loginData.username === "admin" && loginData.password === "1234") {
            localStorage.setItem("isAdminLoggedIn", "true");
            navigate("/dashboard");
        } else {
            alert("Invalid Credentials ❌");
        }
    };

    return (
        <div className="container">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;
