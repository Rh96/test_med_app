import React from 'react';
import './Sign_Up.css';

function Sign_Up() {
  return (
    // Main container with margin-top
    <div className="container" style={{ marginTop: "5%;" }}>
        {/* Grid layout for sign-up form */}
        <div className="signup-grid">
            {/* Title for the sign-up form */}
            <div className="signup-text">
                <h1>Sign Up</h1>
            </div>
            {/* Text for existing members to log in */}
            <div className="signup-text1" style={{ textAlign: "left;" }}>
                Already a member? <span><a href="../Login/Login.html" style={{ color: "#2190FF;" }}> Login</a></span>
            </div>
            {/* Form for user sign-up */}
            <div className="signup-form">
                {/* Start of the form */}
                <form>
                    {/* Form group for user's name */}
                    <div className="form-group">
                        {/* Label for name input field */}
                        <label for="name">Name</label>
                        {/* Text input field for name */}
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    </div>

                    {/* Form group for user's phone number */}
                    <div className="form-group">
                        {/* Label for phone input field */}
                        <label for="phone">Phone</label>
                        {/* Tel input field for phone number */}
                        <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                    </div>

                    {/* Form group for user's email */}
                    <div className="form-group">
                        {/* Label for email input field */}
                        <label for="email">Email</label>
                        {/* Email input field */}
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>

                    {/* Form group for user's password */}
                    <div className="form-group">
                        {/* Label for password input field */}
                        <label for="password">Password</label>
                        {/* Password input field */}
                        <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                    </div>

                    {/* Button group for form submission and reset */}
                    <div className="btn-group">
                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        {/* Reset button */}
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                </form>
                {/* End of the form */}
            </div>
        </div>
    </div>
  )
}

export default Sign_Up