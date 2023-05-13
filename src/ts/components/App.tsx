import React from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Certifications from '../pages/CertificationPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
};

export default App;