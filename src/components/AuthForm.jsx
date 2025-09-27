import React, { useState } from 'react';

export default function AuthForm({ onLogin, onRegister })
{
    const [mode, setMode] = useState('login'); // 'login' o 'register'
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e)
    {
        e.preventDefault();
        if (!username || !password)
        {
            setError('Completa usuario y contraseña');
            return;
        }
        if (mode === 'login')
        {
            onLogin(username, password, setError);
        } else
        {
            onRegister(username, password, setError);
        }
    }

    return (
        <div className="auth-form">
            <div className="auth-tabs">
                <button
                    className={mode === 'login' ? 'active' : ''}
                    onClick={() => setMode('login')}
                >
                    Iniciar sesión
                </button>
                <button
                    className={mode === 'register' ? 'active' : ''}
                    onClick={() => setMode('register')}
                >
                    Registrarse
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">
                    {mode === 'login' ? 'Entrar' : 'Crear cuenta'}
                </button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}
