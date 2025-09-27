import React, { useState } from 'react';

export default function LoginForm({ onLogin })
{
    const [username, setUsername] = useState('');

    function handleSubmit(e)
    {
        e.preventDefault();
        if (username.trim())
        {
            onLogin(username);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    );
}
