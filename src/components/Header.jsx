import React from 'react';
import { logout, getUser } from '../utils/auth.js';

export default function Header({ onLogout })
{
    const user = getUser();

    function handleLogout()
    {
        logout();
        onLogout();
    }

    return (
        <header className="header">
            <h1>MiniRed</h1>
            {user && (
                <div>
                    <span className='header-username'>Hola, {user.username}</span>
                    <button onClick={handleLogout}>Salir</button>
                </div>
            )}
        </header>
    );
}
