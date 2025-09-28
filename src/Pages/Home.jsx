
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
        navigate('/Home');
    }
    function handleClearFeed()
    {
        if (window.confirm('¿Seguro que querés borrar todo el feed?'))
        {
            // borrar también de storage si querés
            setEstados([]);
        }
    }
    return (
        <div className="home-page">
            <Header onLogout={handleLogout} />
            <EstadoForm onPost={handlePost} />
            {user?.role === 'admin' && (
                <button className='btn btn-delete' onClick={handleClearFeed}>
                    Borrar feed
                </button>
            )}
            <EstadoList estados={estados} />
        </div>
    );
}
