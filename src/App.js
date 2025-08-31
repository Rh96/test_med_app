import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
            {/* Display the Navbar component */}
            <Navbar />

            {/* Set up the Routes for different pages */}
            <Routes>
                {/* Define individual Route components for different pages */}
                {/* Home Page */}
                <Route path='/' element={<LandingPage />} />

                {/* Sign Up */}
                <Route path='/sign-up' element={<SignUp />} />

                {/* Login */}
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
