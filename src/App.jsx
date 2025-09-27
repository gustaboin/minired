import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import { getUser } from './utils/auth.js';

export default function App()
{
  const user = getUser();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}
