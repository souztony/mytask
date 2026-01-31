import React, { useState } from 'react';
import { TaskPriority } from '../types/Task';
import { Plus } from 'lucide-react';

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
            <div className="form-group">
                <label>O que precisa ser feito?</label>
                <input
                    type="text"
                    placeholder="Ex: Comprar leite"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Prioridade</label>
                <select value={priority} onChange={e => setPriority(Number(e.target.value) as TaskPriority)}>
                    <option value={TaskPriority.Low}>Baixa</option>
                    <option value={TaskPriority.Medium}>Média</option>
                    <option value={TaskPriority.High}>Alta</option>
                </select>
            </div>
            <div className="form-group">
                <label>Data</label>
                <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
            </div>
            <button type="submit" className="primary">
                <Plus size={18} />
                Adicionar
            </button>
        </form>
    );
};
