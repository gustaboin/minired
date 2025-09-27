/*
import React from 'react';

export default function EstadoList({ estados })
{
    return (
        <div className="estado-list">
            {estados.map((est, idx) => (
                <div key={idx} className="estado-item">
                    <strong>{est.user}</strong>: {est.text}
                </div>
            ))}
        </div>
    );
}

*/

/* solo renderiza */
import React from 'react';

export default function EstadoList({ estados })
{
    return (
        <div className="estado-list">
            {estados.map((estado, i) => (
                <div key={i} className="estado">
                    <strong>{estado.user}</strong>
                    <p>{estado.text}</p>
                    <small>{new Date(estado.date).toLocaleString()}</small>
                </div>
            ))}
        </div>
    );
}
