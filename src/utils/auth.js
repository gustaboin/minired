/*

import { storage } from './storage.js';

const USER_KEY = 'miniRedUser';

export function login(username)
{
    storage.set(USER_KEY, { username });
}

export function logout()
{
    storage.remove(USER_KEY);
}

export function getUser()
{
    return storage.get(USER_KEY);
}

*/

import { storage } from './storage.js';

const USERS_KEY = 'miniRedUsers';
const SESSION_KEY = 'miniRedSession';

function getUsers()
{
    return storage.get(USERS_KEY) || [];
}

function setUsers(users)
{
    storage.set(USERS_KEY, users);
}

// registrar un nuevo usuario
export function register(username, password)
{
    const users = getUsers();
    // chequear si ya existe
    if (users.find(u => u.username === username))
    {
        return { ok: false, message: 'Usuario ya existe' };
    }
    users.push({ username, password });
    setUsers(users);
    // auto-login tras registro
    storage.set(SESSION_KEY, { username });
    return { ok: true };
}

// login existente
export function login(username, password)
{
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user)
    {
        storage.set(SESSION_KEY, { username });
        return { ok: true };
    }
    return { ok: false, message: 'Usuario o contraseña incorrectos' };
}

// obtener usuario actual
export function getUser()
{
    return storage.get(SESSION_KEY);
}

// logout
export function logout()
{
    storage.remove(SESSION_KEY);
}
