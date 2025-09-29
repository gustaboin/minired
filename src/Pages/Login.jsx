

import React from 'react';
import { register, login } from '../utils/auth.js';
import AuthForm from '../components/AuthForm.jsx';
import { useNavigate } from 'react-router-dom';

export default function Login()
{
    const navigate = useNavigate();

    function handleRegister(username, password, role, setError)
    {
        const result = register(username, password, role);
        if (result.ok)
        {
            navigate('/home');
        } else
        {
            setError(result.message);
        }
    }

    function handleLogin(username, password, setError)
    {
        const result = login(username, password);
        if (result.ok)
        {
            navigate('/home');
        } else
        {
            setError(result.message);
        }
    }

    return (
        <div className="login-page">
            <h1>MiniRed</h1>
            <AuthForm onLogin={handleLogin} onRegister={handleRegister} />
        </div>
    );
}
