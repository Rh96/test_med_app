import { useState } from 'react'

const GiveFeedbackForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const elements = [];
    for (let i = 0; i < 5; i++) {
        const value = i + 1;
        const isActive = (hoverRating || rating) >= value;
        
        elements.push(
            <span 
                key={value}
                style={{ 
                    cursor: "pointer",
                    fontSize: "30px",
                    color: isActive ? "#FFD700" : "#c2c2c2ff",
                    userSelect: "none",
                    transition: "color 0.2s ease"
                }}
                onClick={() => setRating(value)}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(0)}
            >
                ★
            </span>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name === '' || review === '' || rating === '') return;

        onSubmit({ name, review, rating });

        setName('');
        setReview('');
        setRating(0);
        setHoverRating(0);
    };

    return (
        <div className="givefeedback-container">
            <h2 style={{ textAlign: "center" }}>Give Your Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="form-control"
                        aria-describedby="helpId"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review:</label>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        name="review"
                        id="review"
                        required
                        className="form-control"
                        aria-describedby="helpId"
                    />
                </div>
                <div className="form-group">
                    <span style={{ fontWeight: "bold", marginBottom: "5px" }}>Rating:</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        {elements}
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default GiveFeedbackForm