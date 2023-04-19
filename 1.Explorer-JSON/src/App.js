import './App.css';
import React from 'react';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route index element={<HomePage/>} />
        <Route exact path="home" element={<HomePage/>} />

        <Route path="/details">
          <Route path=":placeName" element={<DetailsPage/>} />
        </Route>
  
        <Route path="*" element={<h1>Wrong Route Hit</h1>} />
      </Routes>

      <ContactUs />
    </div>
  );
}

export default App;