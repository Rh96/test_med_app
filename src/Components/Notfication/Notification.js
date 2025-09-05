import { useEffect, useState } from 'react';
import './Notification.css';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = storedDoctorData?.name;

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar ></Navbar>
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                {/* Display doctor's name from doctorData */}
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
              <p className="appointment-card__message">
                {/* Display doctor's speciality from doctorData */}
                <strong>Speciality:</strong> {doctorData?.speciality}
              </p>
              {/* Appointment Data */}
              <p className="appointment-card__message">
                {/* Display patient name from doctorData */}
                <strong>Name:</strong> {doctorData?.patientName}
              </p>
              <p className="appointment-card__message">
                {/* Display patient phone number from doctorData */}
                <strong>Phone Number:</strong> {doctorData?.phoneNumber}
              </p>
              <p className="appointment-card__message">
                {/* Display patient date appointment from doctorData */}
                <strong>Date of Appointment:</strong> {doctorData?.date}
              </p>
              <p className="appointment-card__message">
                {/* Display patient time of the appointment from doctorData */}
                <strong>Time Slot:</strong> {doctorData?.time}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Notification;