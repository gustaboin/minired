import React, { useState } from 'react';
import { addPost } from '../utils/posts.js';
import { getUser } from '../utils/auth.js';

export default function EstadoForm({ onPost })
{
    const [texto, setTexto] = useState('');
    const user = getUser();

    function handleSubmit(e)
    {
        e.preventDefault();
        if (!texto.trim()) return;
        const nuevoPost = {
            user: user.username,
            text: texto,
            date: new Date().toISOString(),
        };
        addPost(nuevoPost);       // guarda en localStorage
        onPost(nuevoPost);        // actualiza la UI
        setTexto('');
    }

    return (
        <form className="form-post" onSubmit={handleSubmit}>
            <textarea className='textarea'
                value={texto}
                onChange={e => setTexto(e.target.value)}
                placeholder="¿Qué estás pensando?"
            />
            <button className='btn btn-post' type="submit">Publicar</button>
        </form>
    );
}
