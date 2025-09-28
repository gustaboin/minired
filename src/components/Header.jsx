import React from 'react';
import { logout, getUser } from '../utils/auth.js';
import { useNavigate } from 'react-router-dom';

export default function Header({ onLogout })
{
    const user = getUser();
    const navigate = useNavigate();

    function handleLogout()
    {
        logout();
        onLogout();
    }

    function goToLogin()
    {
        navigate('/login');
    }

    return (
        <header className="header">
            <h1>MiniRed</h1>
            {user ? (
                <div>
                    <span className='header-username'>Hola, {user.username}</span>
                    <button className='btn btn-logout' onClick={handleLogout}>Salir</button>
                </div>
            ) : (
                // Si no hay usuario quiero mostrar el boton de login
                <div>
                    <button className='btn btn-login' onClick={goToLogin}>Login</button>
                </div>
            )}
        </header>
    );
}
