import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Question } from '../components/Question/Question'
import { Result } from '../components/Result/Result';
import Login from '../components/Login/Login';

function App() {
    return (
      <Routes>
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
}

export default App;