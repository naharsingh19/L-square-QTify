<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';
import FeedbackForm from './Components/FeedbackForm/FeedbackForm';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentAlbum from './Pages/CurrentAlbum/CurrentAlbum';

function App() {
  const [displayForm, setDisplayForm] = useState(false);

  const handleFormSubmit = () => {
    // Perform your form submission logic here

    // Once the form is submitted successfully, set displayForm to false
    setDisplayForm(false);
  };

  const toggleFeedbackForm = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <div>
      <Navbar onFeedbackButtonClick={toggleFeedbackForm} />
      <FeedbackForm displayForm={displayForm} onSubmit={handleFormSubmit} />
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/music/:albumId" element={<CurrentAlbum />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
=======

import './App.css';
import HeroImage from './Components/HeroImage/HeroImage';
import  Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <div>
     <Navbar />
     <HeroImage />
    </div>
   );
>>>>>>> 510cfeffd2fad82e0c5662f3eddc0ffa99b3ce66
}

export default App;
