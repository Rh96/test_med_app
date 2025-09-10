import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import './ProfileCard.css';

const ProfileCard = () => {
  // Set up state variables using the useState hook
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  
  // Access the navigation functionality from React Router
  const navigate = useNavigate();
  
  // Use the useEffect hook to fetch user profile data when the component mounts or updates
  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  // Function to fetch user profile data from the API
  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage

      if (!authtoken) {
        navigate("/login");
      } else {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Email": email, // Add the email to the headers
          },
        });
        if (response.ok) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user);
        } else {
          // Handle error case
          throw new Error("Failed to fetch user profile");
        }
      }
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  // Function to enable edit mode for profile details
  const handleEdit = () => {
    setEditMode(true);
  };

  // Function to update state when user inputs new data
  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
    });
  };

  // Function to handle form submission when user saves changes
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage

      if (!authtoken || !email) {
        navigate("/login");
        return;
      }

      const payload = { ...updatedDetails };
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          "Email": email,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Update the user details in session storage
        sessionStorage.setItem("name", updatedDetails.name);
        sessionStorage.setItem("phone", updatedDetails.phone);

        setUserDetails(updatedDetails);
        setEditMode(false);
        // Display success message to the user
        alert(`Profile Updated Successfully!`);
      } else {
        // Handle error case
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  // Render the profile form with different sections based on edit mode
  return (
    <div className="profile-container">
        <div className="profile-card">
            {editMode ? (
                <form onSubmit={handleSubmit} className="edit-mode">
                    <div className="form-group">
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={updatedDetails.email}
                                disabled // Disable the email field
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={updatedDetails.name}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Phone
                            <input
                                type="text"
                                name="phone"
                                value={updatedDetails.phone}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    {/* Create similar logic for displaying and editing name and phone from userDetails */}
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            ) : (
                <div className="view-mode">
                    {/* Title */}
                    <h2>
                        Welcome, <span className="highlight">{userDetails.name}</span>
                    </h2>
                    {/* Other Information */}
                    <p>
                        <strong>Email:</strong> {userDetails.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {userDetails.phone}
                    </p>
                    <button onClick={handleEdit} className="btn btn-primary">
                        Edit
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};

export default ProfileCard;
