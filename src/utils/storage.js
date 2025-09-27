export const storage = {
    set(key, value)
    {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key)
    {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : null;
    },
    remove(key)
    {
        localStorage.removeItem(key);
    }
};


