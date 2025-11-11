import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import Footer from './components/Footer';


function App() {
  const [bookings, setBookings] = useState([]);


  const handleAddBooking = (newBooking) => {
    setBookings((prev) => [...prev, newBooking]);
  };


  return (
    <div className="App">
      <Header />
      <main>
        <BookingForm onAddBooking={handleAddBooking} />
        <BookingList bookings={bookings} />
      </main>
      <Footer />
    </div>
  );
}


export default App;