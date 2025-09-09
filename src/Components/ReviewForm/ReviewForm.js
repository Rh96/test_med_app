import { useEffect, useState } from 'react';
import './ReviewForm.css';
import GiveFeedbackForm from './GiveFeedbackForm';

const ReviewForm = () => {
    // Set variables
    const [appointments, setAppointments] = useState([]);
    const [toggleFeedbackform, setToggleFeedbackform] = useState(false);
    const [appointmentId, setAppointmentId] = useState('');

    // Think of better solution in the future
    useEffect(() => {
        setAppointments([
            {
                id: "b22494f7-9792-42e2-8e59-256b7e05068c",
                name: "Dr. Lyn Christie",
                speciality: "Dentist",
                patientName: "Rade Hrgovic",
                phoneNumber: "7889787878979",
                date: "2025-09-10",
                time: "9:00 AM"
            },
            {
                id: "b22494d7-9792-413221asd-asd-21313",
                name: "Dr. Joe Doe",
                speciality: "Dermatology",
                patientName: "Rade Hrgovic",
                phoneNumber: "7889787878979",
                date: "2025-11-15",
                time: "2:00 PM"
            },
        ]);
    }, []);

    const handleOnSubmit = (feedback) => {
        const updatedAppointments = appointments.map(item => 
            item.id === appointmentId
            ? { ...item, review: feedback.review, ratingGiven: feedback.rating }
            : item
        );

        setAppointments(updatedAppointments);
        setToggleFeedbackform(false);
    };

    const handleToggle = (argAppointmentId) => {
        setToggleFeedbackform(!toggleFeedbackform);
        setAppointmentId(argAppointmentId);
    };

    return (
        <div>
            {/* Reviews table */}
            <div className="reviews-container" style={toggleFeedbackform ? { pointerEvents: "none", opacity: "0.1" } : { }}>
                <h1>Reviews</h1>
                <table role="table">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>Provide Feedback</th>
                            <th>Review Given</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length > 0 ? (
                            appointments.map((appointment, index) => 
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.speciality}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button onClick={() => handleToggle(appointment.id)} disabled={appointment?.review}>
                                                {appointment?.review ? 'Already given' : 'Click Here'}
                                            </button>
                                        </div>
                                    </td>
                                    {appointment?.review && (
                                        <td>
                                            <div className="review-message">{appointment.review}</div>
                                        </td>
                                    )}
                                </tr>
                            )
                        ) : (
                            <></>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Feedback form */}
            {toggleFeedbackform ? (
                <GiveFeedbackForm onSubmit={handleOnSubmit} />
            ) : (
                <></>
            )}
        </div>
    )
};

export default ReviewForm;