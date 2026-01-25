import { useState, useCallback } from 'react';
import type { User } from '../types/User';
import * as authApi from '../api/auth.api';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(() => {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    });

    const login = useCallback(async (email: string, password: string) => {
        const userData = await authApi.login(email, password);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }, []);

    const register = useCallback(async (username: string, email: string, password: string) => {
        const userData = await authApi.register(username, email, password);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('user');
    }, []);

    return { user, login, register, logout, isAuthenticated: !!user };
};
