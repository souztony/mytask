import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(username, email, password);
            window.location.href = '/dashboard';
        } catch (err) {
            alert('Erro ao registrar.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Registro - MyTask</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome de usuário" value={username} onChange={e => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Registrar</button>
            </form>
            <p>Já tem conta? <a href="/login">Entre aqui</a></p>
        </div>
    );
};
