import React from 'react';
import '../../css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Documents from '../pages/DocumentsPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </Router>
  );
};

export default App;