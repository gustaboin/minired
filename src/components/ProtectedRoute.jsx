import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../utils/auth.js';

export default function ProtectedRoute({ children })
{
    const user = getUser();
    if (!user)
    {
        // si no hay usuario → a login
        return <Navigate to="/login" replace />;
    }
    return children;
}