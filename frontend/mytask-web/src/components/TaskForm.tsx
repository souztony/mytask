import React, { useState } from 'react';
import { TaskPriority } from '../types/Task';

interface Props {
    onAdd: (title: string, priority: TaskPriority, dueDate?: string) => void;
}

export const TaskForm: React.FC<Props> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState<TaskPriority>(TaskPriority.Medium);
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(title, priority, dueDate || undefined);
        setTitle('');
        setDueDate('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="O que precisa ser feito?"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <select value={priority} onChange={e => setPriority(Number(e.target.value) as TaskPriority)}>
                <option value={TaskPriority.Low}>Baixa</option>
                <option value={TaskPriority.Medium}>Média</option>
                <option value={TaskPriority.High}>Alta</option>
            </select>
            <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    );
};
