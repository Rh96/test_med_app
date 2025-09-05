import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot.target.value);
    };

    const formatTimeWithAmPm = (time24) => {
      if (!time24) return '';
      
      const [hours, minutes] = time24.split(':');
      const date = new Date();
      date.setHours(parseInt(hours, 10));
      date.setMinutes(parseInt(minutes, 10));
      
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const time = formatTimeWithAmPm(selectedSlot);

      onSubmit({ name: doctorName, speciality: doctorSpeciality, patientName: name, phoneNumber, date: appointmentDate, time });
      setName('');
      setPhoneNumber('');
      setAppointmentDate('');
      setSelectedSlot(null);
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Appointment:</label>
          <input
            type="date"
            id="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Book Time Slot:</label>
          <input
            type="time"
            id="time"
            onChange={handleSlotSelection}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
