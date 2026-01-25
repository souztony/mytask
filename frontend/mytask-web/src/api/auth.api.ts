import api from './http';
import type { User } from '../types/User';

export const login = async (email: string, password: string): Promise<User> => {
    const response = await api.post<User>('/auth/login', { email, password });
    return response.data;
};

export const register = async (username: string, email: string, password: string): Promise<User> => {
    const response = await api.post<User>('/auth/register', { username, email, password });
    return response.data;
};
