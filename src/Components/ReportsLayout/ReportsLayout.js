import { useState, useEffect } from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
    // Set variables
    const [appointments, setAppointments] = useState([]);

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

    return (
        <div>
            {/* Reports table */}
            <div className="reports-container">
                <h1>Reports</h1>
                <table role="table">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>View Report</th>
                            <th>Download Report</th>
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
                                            <button>
                                                View Report
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <button>
                                                Download Report
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        ) : (
                            <></>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReportsLayout;