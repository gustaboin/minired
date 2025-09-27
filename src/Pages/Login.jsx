/*
import React from 'react';
import { login } from '../utils/auth.js';
import LoginForm from '../components/LoginForm.jsx';
import { useNavigate } from 'react-router-dom';

export default function Login()
{
    const navigate = useNavigate();

    function handleLogin(username)
    {
        login(username);
        navigate('/');
    }

    return (
        <div className="login-page">
            <h2>Iniciar sesión</h2>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
}
*/

import React from 'react';
import { register, login } from '../utils/auth.js';
import AuthForm from '../components/AuthForm.jsx';
import { useNavigate } from 'react-router-dom';

export default function Login()
{
    const navigate = useNavigate();

    function handleRegister(username, password, setError)
    {
        const result = register(username, password);
        if (result.ok)
        {
            navigate('/');
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
            navigate('/');
        } else
        {
            setError(result.message);
        }
    }

    return (
        <div className="login-page">
            <h2>MiniRed</h2>
            <AuthForm onLogin={handleLogin} onRegister={handleRegister} />
        </div>
    );
}
