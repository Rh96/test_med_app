import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';

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
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
