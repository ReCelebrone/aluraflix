import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src='/img/logo.png' alt='Logo Aluraflix' />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/"><button className="botaoHome">Home</button></Link></li>
                    <li><Link to="/new-video"><button className="botaoNovoVideo">Novo Vídeo</button></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
