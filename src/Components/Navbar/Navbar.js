import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    // 1. How to logout user, do we clear the session storage or we use other methods to make it happen?
    // Answer: Depends on what the application uses for authentication, just remove the auth token
    // 2. Replace 'Sign Up' button to the logged user 'Welcome, joedoe' (Figure it out how to extract the name of the email)
    // 3. Replace Login with Logout button when the user is logged in

    // With this we check if any user is logged in or not
    // True -> if the user is logged in, False -> if the user is logged out
    const [loginStatus, setLoginStatus] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = sessionStorage.getItem("auth-token");
        const email = sessionStorage.getItem("email");
        
        if (token) {
            setLoginStatus(true);
            if (email) {
              setUsername(email.split("@")[0]);
            }
        } else {
            setLoginStatus(false);
            setUsername("");
        }
    }, []);

    // Handle Logout
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("email"); // optional if you store it
        setLoginStatus(false);
        setUsername(""); // reset username
    };

    return (
        <div>
            <nav>
                {/* Navigation logo section */}
                <div className="nav_logo">
                    {/* Link to the home page */}
                    <a href={"/"}>
                        StayHealthy
                        {/* Insert SVG icon of a Doctor With Stethoscope SVG icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill:"#3685fb" }}>
                            <title>Doctor With Stethoscope SVG icon</title>
                            <g>
                                <g>
                                    {/* Path for the stethoscope icon */}
                                    <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                                    {/* Additional path for the icon */}
                                    <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                                    {/* Another path for the icon */}
                                    <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44...."></path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    {/* A span element for styling purposes */}
                    <span>.</span>
                </div>
                {/* Navigation icon section with an onClick event listener */}
                {/* onClick={handleClick} */}
                <div className="nav_icon">
                    {/* Font Awesome icon for bars (hamburger menu) */}
                    <i className="fa fa-times fa fa-bars"></i>
                </div>
                {/* Navigation list */}
                <ul className="nav_items active">
                    {/* Navigation Item 'Home' */}
                    <li className="nav_item">
                        {/* Navigation Item Link */}
                        <a href={"/"}>Home</a>
                    </li>
                    {/* Navigation Item 'Appointments' */}
                    <li className="nav_item">
                        {/* Navigation Item Link */}
                        <a href={"/appointments"}>Appointments</a>
                    </li>
                    {/* Navigation Item Sign Up */}
                    <li className="nav_item">
                        {/* Navigation Item Link */}
                        {!loginStatus ? (
                            <a href={"/signup"}>
                                <button className="btn1">Sign Up</button>
                            </a>
                        ) : (
                            <div className="welcome-user">
                                Welcome, {username}
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href={"/profile"}>Your Profile</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    {/* Navigation Item 'Instant Consultation' */}
                    {loginStatus ? (
                        <li className="nav_item">
                            <a href={"/instant-consultation"}>
                                <button className="btn1">Instant Consultation</button>
                            </a>
                        </li>
                    ) : (
                        <></>
                    )}
                    {/* Navigation Item Login/Logout */}
                    <li className="nav_item">
                        {/* Navigation Item Link */}
                        {!loginStatus ? (
                            <a href={"/login"}>
                                <button className="btn1">Login</button>
                            </a>
                        ) : (
                            <a href={"/"}>
                                <button className="btn1" onClick={handleLogout}>Logout</button>
                            </a>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
