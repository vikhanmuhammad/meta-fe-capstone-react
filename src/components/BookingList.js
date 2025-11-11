import React from 'react';


function BookingList({ bookings }) {
    return (
        <section aria-label="Booking list">
            <h2>Your Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings yet.</p>
            ) : (
                <ul>
                    {bookings.map((b, index) => (
                        <li key={index}>{`${b.name} - ${b.date} at ${b.time}`}</li>
                    ))}
                </ul>
            )}
        </section>
    );
}


export default BookingList;