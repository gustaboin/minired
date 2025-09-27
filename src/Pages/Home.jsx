/*
import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import EstadoForm from '../components/EstadoForm.jsx';
import EstadoList from '../components/EstadoList.jsx';
import { getUser } from '../utils/auth.js';
import { useNavigate } from 'react-router-dom';

export default function Home()
{
    const navigate = useNavigate();
    const user = getUser();
    const [estados, setEstados] = useState([]);

    function handlePost(texto)
    {
        setEstados([{ user: user.username, text: texto }, ...estados]);
    }

    function handleLogout()
    {
        navigate('/login');
    }

    return (
        <div className="home-page">
            <Header onLogout={handleLogout} />
            <EstadoForm onPost={handlePost} />
            <EstadoList estados={estados} />
        </div>
    );
}
*/

/* segunda etapa */

/*
import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import EstadoForm from '../components/EstadoForm.jsx';
import EstadoList from '../components/EstadoList.jsx';
import { getUser } from '../utils/auth.js';
import { useNavigate } from 'react-router-dom';

export default function Home()
{
    const navigate = useNavigate();
    const user = getUser();
    const [estados, setEstados] = useState([]);

    function handlePost(texto)
    {
        setEstados([{ user: user.username, text: texto }, ...estados]);
    }

    function handleLogout()
    {
        navigate('/login');
    }

    return (
        <div className="home-page">
            <Header onLogout={handleLogout} />
            <EstadoForm onPost={handlePost} />
            <EstadoList estados={estados} />
        </div>
    );
}
*/
/* tercera etapa */

import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import EstadoForm from '../components/EstadoForm.jsx';
import EstadoList from '../components/EstadoList.jsx';
import { getUser } from '../utils/auth.js';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../utils/posts.js';

export default function Home()
{
    const navigate = useNavigate();
    const user = getUser();
    const [estados, setEstados] = useState([]);

    useEffect(() =>
    {
        setEstados(getPosts());
    }, []);

    function handlePost(post)
    {
        setEstados(prev => [post, ...prev]);
    }

    function handleLogout()
    {
        navigate('/login');
    }

    return (
        <div className="home-page">
            <Header onLogout={handleLogout} />
            <EstadoForm onPost={handlePost} />
            <EstadoList estados={estados} />
        </div>
    );
}
