/*
import React, { useState } from 'react';

export default function EstadoForm({ onPost })
{
    const [texto, setTexto] = useState('');

    function handleSubmit(e)
    {
        e.preventDefault();
        if (texto.trim())
        {
            onPost(texto);
            setTexto('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="estado-form">
            <textarea
                placeholder="Escribe un estado..."
                value={texto}
                onChange={e => setTexto(e.target.value)}
            />
            <button type="submit">Publicar</button>
        </form>
    );
}
*/
/* tercera etapa */


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
        <form onSubmit={handleSubmit}>
            <textarea
                value={texto}
                onChange={e => setTexto(e.target.value)}
                placeholder="¿Qué estás pensando?"
            />
            <button type="submit">Publicar</button>
        </form>
    );
}
