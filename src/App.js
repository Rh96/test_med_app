import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notfication/Notification';

function App() {
  return (
    <>
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        <Notification>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            
            {/* Home Page */}
            <Route path='/' element={<LandingPage />} />

            {/* Sign Up */}
            <Route path='/signup' element={<SignUp />} />

            {/* Login */}
            <Route path='/login' element={<Login />} />

            {/* Instant Consultation Booking */}
            <Route path="/instant-consultation" element={<InstantConsultation />} />

            {/* Appointments Booking */}
            <Route path="/appointments" element={<BookingConsultation />} />
          </Routes>
        </Notification>
      </BrowserRouter>
    </>
  );
}

export default App;
