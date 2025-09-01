import { useState } from 'react'
import './Login.css';

function Login() {
  // Set Variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Error messages
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState('');

    // Login
    const handleLogin = (e) => {
        e.preventDefault();

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
        setEmail('');
        setPassword('');

        // Reset error messages
        setEmailErrMsg('');
        setPasswordErrMsg('');
    };

  return (
    // Main container div for the page content
    <div className="container">
        {/* Div for login grid layout */}
        <div className="login-grid">
          {/* Div for login text */}
          <div className="login-text">
            <h2>Login</h2>
          </div>
          {/* Additional login text with a link to Sign Up page */}
          <div className="login-text">
            Are you a new member? <span><a href="/sign-up" style={{ color: "#2190FF" }}> Sign Up Here</a></span>
          </div>
          <br />
          {/* Div for login form */}
          <div className="login-form">
            <form onSubmit={handleLogin}>
              {/* Form group for email input */}
              <div className="form-group">
                <label for="email">Email</label>
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
              {/* Form group for password input */}
              <div className="form-group">
                <label for="password">Password</label>
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
              {/* Button group for login and reset buttons */}
              <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={handleReset}>Reset</button>
              </div>
              <br />
              {/* Additional login text for 'Forgot Password' option */}
              <div className="login-text">
                Forgot Password?
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login