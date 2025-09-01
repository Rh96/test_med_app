import { useState } from 'react';
import './Sign_Up.css';

function Sign_Up() {
  // Set variables
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Error messages  
  const [nameErrMsg, setNameErrMsg] = useState('');
  const [phoneErrMsg, setPhoneErrMsg] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState('');

    // Register
    const handleRegister = (e) => {
        e.preventDefault();
        
        // Name field validation
        if (name.trim() === '') {
            setNameErrMsg('Name is required');
        } else {
            setNameErrMsg('');
        }
        
        // Phone number validation
        const cleaned = phone.replace(/\D/g, ''); // remove spaces, dashes, etc.

        if (phone.trim() === '') {
            setPhoneErrMsg('Phone number is required');
        } else if (!/^\d{10}$/.test(cleaned)) {
            setPhoneErrMsg('Phone number must be exactly 10 digits');
        } else {
            setPhoneErrMsg('');
        }
        
        // Email validation
        if (email.trim() === '') {
            setEmailErrMsg('Email is required');
          }   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailErrMsg('Invalid email format');
        } else {
            setEmailErrMsg('');
        }

        // Password validation
        if (password.trim() === '') {
            setPasswordErrMsg('Password is required');
        } else if (!/^(?=.*[A-Z])(?=.*[1-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) {
            setPasswordErrMsg('Password must contain at least 1 uppercase, 1 digit (1–9), and 1 special character');
        } else {
            setPasswordErrMsg('');
        }
    }
    

    // Reset form
    const handleReset = () => {
        setName('');
        setPhone('');
        setEmail('');
        setPassword('');

        // Reset error messages
        setNameErrMsg('');
        setPhoneErrMsg('');
        setEmailErrMsg('');
        setPasswordErrMsg('');
    };
  
  return (
    // Main container with margin-top
    <div className="container" style={{ marginTop: "5%" }}>
        {/* Grid layout for sign-up form */}
        <div className="signup-grid">
            {/* Title for the sign-up form */}
            <div className="signup-text">
                <h1>Sign Up</h1>
            </div>
            {/* Text for existing members to log in */}
            <div className="signup-text1" style={{ textAlign: "left" }}>
                Already a member? <span><a href="/login" style={{ color: "#2190FF" }}> Login</a></span>
            </div>
            {/* Form for user sign-up */}
            <div className="signup-form">
                {/* Start of the form */}
                <form onSubmit={handleRegister}>
                    {/* Form group for user's name */}
                    <div className="form-group">
                        {/* Label for name input field */}
                        <label for="name">Name</label>
                        {/* Text input field for name */}
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            placeholder="Enter your name"
                            aria-describedby="helpId"
                        />
                        {nameErrMsg && (
                            <>
                                <br />
                                <span style={{ color: "red" }}>{nameErrMsg}</span>
                            </>
                        )}
                    </div>

                    {/* Form group for user's phone number */}
                    <div className="form-group">
                        {/* Label for phone input field */}
                        <label for="phone">Phone</label>
                        {/* Tel input field for phone number */}
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            placeholder="Enter your phone number"
                            aria-describedby="helpId"
                        />
                        {phoneErrMsg && (
                            <>
                                <br />
                                <span style={{ color: "red" }}>{phoneErrMsg}</span>
                            </>
                        )}
                    </div>

                    {/* Form group for user's email */}
                    <div className="form-group">
                        {/* Label for email input field */}
                        <label for="email">Email</label>
                        {/* Email input field */}
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter your email"
                            aria-describedby="helpId"
                        />
                        {emailErrMsg && (
                            <>
                                <br />
                                <span style={{ color: "red" }}>{emailErrMsg}</span>
                            </>
                        )}
                    </div>

                    {/* Form group for user's password */}
                    <div className="form-group">
                        {/* Label for password input field */}
                        <label for="password">Password</label>
                        {/* Password input field */}
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter your password"
                            aria-describedby="helpId"
                        />
                        {passwordErrMsg && (
                            <>
                                <br />
                                <span style={{ color: "red" }}>{passwordErrMsg}</span>
                            </>
                        )}
                    </div>

                    {/* Button group for form submission and reset */}
                    <div className="btn-group">
                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        {/* Reset button */}
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={handleReset}>Reset</button>
                    </div>
                </form>
                {/* End of the form */}
            </div>
        </div>
    </div>
  )
}

export default Sign_Up