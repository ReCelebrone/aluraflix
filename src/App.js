import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewVideo from './pages/NewVideo/NewVideo';

function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-video" element={<NewVideo />} />
            </Routes>
        </Router>
    );
}

export default App;

