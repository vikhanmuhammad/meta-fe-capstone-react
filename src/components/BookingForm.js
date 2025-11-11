import React, { useState } from 'react';
import { validateBooking } from '../utils/validators';


function BookingForm({ onAddBooking }) {
    const [formData, setFormData] = useState({ name: '', date: '', time: '' });
    const [error, setError] = useState('');


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateBooking(formData);
        if (validationError) {
            setError(validationError);
            return;
        }
        onAddBooking(formData);
        setFormData({ name: '', date: '', time: '' });
        setError('');
    };


    return (
        <form onSubmit={handleSubmit} aria-label="Booking form">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />


            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />


            <label htmlFor="time">Time:</label>
            <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />


            {error && <p role="alert" className="error">{error}</p>}


            <button type="submit">Book Now</button>
        </form>
    );
}


export default BookingForm;