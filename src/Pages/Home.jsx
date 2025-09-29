
import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import EstadoForm from '../components/EstadoForm.jsx';
import EstadoList from '../components/EstadoList.jsx';
import { getUser } from '../utils/auth.js';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../utils/posts.js';
import ConfirmModal from '../components/ConfirmModal.jsx';
import { clearPosts } from '../utils/posts.js';


export default function Home()
{
    const navigate = useNavigate();
    const user = getUser();
    const [estados, setEstados] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    // agregado para el modal de confirmacion de borrado del feed
    function handleClearFeed()
    {
        setIsModalOpen(true);
    }

    function confirmClearFeed()
    {
        clearPosts();
        setEstados([]); // Borrar el feed
        setIsModalOpen(false);
    }
    // 3. Lógica para cerrar el modal si el usuario cancela
    function cancelClearFeed()
    {
        setIsModalOpen(false);
    }


    return (
        <div className="home-page">
            <Header onLogout={handleLogout} />
            <EstadoForm onPost={handlePost} />
            {user?.role === 'admin' && (
                <button
                    className='btn btn-delete'
                    onClick={handleClearFeed}
                >
                    Borrar feed
                </button>
            )}

            {/* Renderizado Condicional del Modal */}
            {isModalOpen && (
                <ConfirmModal
                    onConfirm={confirmClearFeed}
                    onCancel={cancelClearFeed}
                />
            )}
            <EstadoList estados={estados} />
        </div>
    );
}
