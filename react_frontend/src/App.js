// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Reset_Password from './Reset_Password';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import Profile from './Profile';
import CourseForm from './components/courseComponents/CourseForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="register/" element={<Register />} />
        <Route path="reset_password/" element={<Reset_Password />} />
        <Route path="profile/" element={<Profile/>}/>
        <Route path="create-course/" element={<CourseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
