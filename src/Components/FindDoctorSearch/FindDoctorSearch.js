import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindDoctorSearch.css';

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const originalSpecialities = [
        'Dentist', 'Gynecologist/Obstetrician', 'General Physician', 
        'Dermatologist', 'Ear-Nose-Throat (ENT) Specialist', 'Homeopath', 'Ayurveda'
    ];
    const [specialities, setSpecialities] = useState(originalSpecialities);
    const navigate = useNavigate();

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/appointments?speciality=${speciality}`);
        window.location.reload();
    }

    const handleSearchOnChange = (e) => {
        const value = e.target.value;
        setSearchDoctor(value);

        if (value !== '') {
            const filtered = originalSpecialities.filter(speciality => 
                speciality.toLowerCase().includes(value.toLowerCase())
            );
            setSpecialities(filtered);
        } else {
            setSpecialities(originalSpecialities); // Instant reset
        }
    };

    return (
        <div className='finddoctor'>
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div>               
                    <i style={{color:'#000000',fontSize:'20rem'}} className="fa fa-user-md"></i>
                </div>                
                <div className="home-search-container"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div className="doctor-search-box">
                    {/* <p>Perform a search to see the results.</p> */}

                        <input
                            type="text"
                            className="search-doctor-input-box"
                            placeholder="Search doctors, clinics, hospitals, etc."
                            onFocus={() => setDoctorResultHidden(false)}
                            onBlur={() => setDoctorResultHidden(true)}
                            value={searchDoctor}
                            onChange={handleSearchOnChange}
                        />
                        
                        <div className="findiconimg"><i class="fa fa-search" aria-hidden="true" style={{ fontSize: "1.5rem", padding: "0.4rem" }}></i></div>
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality =>
                                    <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                        <span><i class="fa fa-search" aria-hidden="true" style={{ fontSize: "1.2rem", padding: "0.2rem" }}></i></span>
                                        <span>{speciality}</span>
                                        <span>SPECIALITY</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
};

export default FindDoctorSearch;