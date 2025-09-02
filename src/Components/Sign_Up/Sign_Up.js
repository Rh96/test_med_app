// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState({}); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                const newErrors = {};
                for (const error of json.errors) {
                    newErrors[error.param] = error.msg
                    setShowerr(newErrors); // Show error messages
                }
            } else {
                setShowerr({});
            }
        }
    };

    // Reset form
    const handleReset = () => {
        setName('');
        setPhone('');
        setEmail('');
        setPassword('');
    };

    // JSX to render the Sign Up form
    return (
        <>
            <div className="container" style={{marginTop:'5%'}}>
                <div className="signup-grid">
                    {/* Title for the sign-up form */}
                    <div className="signup-text">
                        <h1>Sign Up</h1>
                    </div>
                    {/* Text for existing members to log in */}
                    <div className="signup-text1" style={{ textAlign: "left" }}>
                        Already a member? 
                        <span>
                            <Link to="/login" style={{ color: '#2190FF' }}>
                                Login
                            </Link>
                        </span>
                    </div>
                    <div className="signup-form">
                        <form method="POST" onSubmit={register}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                                {showerr.name && <div className="err" style={{ color: 'red' }}>{showerr.name}</div>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                                {showerr.phone && <div className="err" style={{ color: 'red' }}>{showerr.phone}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                                {showerr.email && <div className="err" style={{ color: 'red' }}>{showerr.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                                {showerr.password && <div className="err" style={{ color: 'red' }}>{showerr.password}</div>}
                            </div>
                            {/* Apply similar logic for other form elements like name, phone, and password to capture user information */}

                            {/* Button group for form submission and reset */}
                            <div className="btn-group">
                                {/* Submit button */}
                                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                                {/* Reset button */}
                                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={handleReset}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Note: Sign up role is not stored in the database. Additional logic can be implemented for this based on your React code. */}
        </>
    )
}

export default Sign_Up; // Export the Sign_Up component for use in other components