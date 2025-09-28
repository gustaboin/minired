import React from 'react';
import '../Styles/ConfirmModal.css';

export default function ConfirmModal({ onConfirm, onCancel })
{

    // Esto es opcional, pero ayuda a manejar el clic fuera del modal (backdrop)
    const handleBackdropClick = (e) =>
    {
        if (e.target.className === 'modal-backdrop')
        {
            onCancel();
        }
    };

    return (
        // El 'modal-backdrop' cubre toda la pantalla y oscurece el fondo
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <h2>Confirmar Acción</h2>
                <p>¿Seguro que querés borrar **todo el feed**? Esta acción es irreversible.</p>

                <div className="modal-actions">
                    <button
                        className="btn btn-secondary"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button
                        className="btn btn-delete"
                        onClick={onConfirm}
                    >
                        Sí, Borrar Permanentemente
                    </button>
                </div>
            </div>
        </div>
    );
}