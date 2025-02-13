import { useState, useEffect } from 'react';

export function useAuth() {
    const [user, setUser] = useState<{ isAdmin: boolean } | null>(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
        setUser(storedUser);
    }, []);

    return { user, isAdmin: user?.isAdmin || false };
}
