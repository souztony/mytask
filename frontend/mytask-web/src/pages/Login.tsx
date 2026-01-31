import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { LogIn } from 'lucide-react';

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            window.location.href = '/dashboard';
        } catch (err) {
            alert('Login falhou. Verifique suas credenciais.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Bem-vindo de volta</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="primary">
                    <LogIn size={18} />
                    Entrar
                </button>
            </form>
            <p>Não tem conta? <a href="/register">Registre-se</a></p>
        </div>
    );
};
