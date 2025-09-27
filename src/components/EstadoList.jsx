import React from 'react';
import '../Styles/EstadoList.css';

export default function EstadoList({ estados })
{
    return (
        <div className='post-list'>
            {estados.map((estado, i) => (
                <div key={i} className='post-card'>
                    <strong className='post-user'>{estado.user}</strong>
                    <p className='post-text'>{estado.text}</p>
                    <small className="post-date">{new Date(estado.date).toLocaleString()}</small>
                </div>
            ))}
        </div>
    );
}
