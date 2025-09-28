import React, { useState } from 'react';

export default function AuthForm({ onLogin, onRegister })
{
    const [mode, setMode] = useState('login'); // 'login' o 'register'
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Nuevo estado para el checkbox
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
            onLogin(username, password, role, setError);
        } else
        {
            onRegister(username, password, role, setError);
        }

    }

    const handleRoleChange = (e) =>
    {
        const newRole = e.target.checked ? 'admin' : 'user';
        setRole(newRole);
    };

    return (
        <div className="auth-form">
            <div className="auth-tabs">
                <button
                    className={`btn ${mode === 'login' ? 'active' : ''}`}
                    onClick={() => setMode('login')}
                >
                    Iniciar sesión
                </button>
                <button
                    className={`btn ${mode === 'register' ? 'active' : ''}`}
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

                {mode === 'register' && (
                    <div className="admin-checkbox">
                        <input
                            type="checkbox"
                            id="adminCheck"
                            // El checkbox está marcado si el role actual es 'admin'
                            checked={role === 'admin'}
                            onChange={handleRoleChange} // Usa la nueva función
                        />
                        <label htmlFor="adminCheck">Registrar como Administrador</label>
                    </div>
                )}

                <button className='btn' type="submit">
                    {mode === 'login' ? 'Entrar' : 'Crear cuenta'}
                </button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}
