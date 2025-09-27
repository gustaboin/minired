import { storage } from './storage.js';

const POSTS_KEY = 'miniRedPosts';

export function getPosts()
{
    return storage.get(POSTS_KEY) || [];
}

export function addPost(post)
{
    const posts = getPosts();
    posts.unshift(post); // agrega al principio
    storage.set(POSTS_KEY, posts);
}

export function clearPosts()
{
    storage.remove(POSTS_KEY);
}
