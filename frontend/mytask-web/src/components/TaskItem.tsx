import React from 'react';
import type { Task } from '../types/Task';
import { TaskStatus, TaskPriorityLabels, TaskStatusLabels } from '../types/Task';

interface Props {
    task: Task;
    onUpdate: (id: string, status: TaskStatus) => void;
    onDelete: (id: string) => void;
}

export const TaskItem: React.FC<Props> = ({ task, onUpdate, onDelete }) => {
    return (
        <div className={`task-item priority-${task.priority === 0 ? 'low' : task.priority === 1 ? 'medium' : 'high'}`}>
            <div className="task-info">
                <h3>{task.title}</h3>
                <span>Prioridade: {TaskPriorityLabels[task.priority]}</span>
                <span>Status: {TaskStatusLabels[task.status]}</span>
                {task.dueDate && <span>Vence em: {new Date(task.dueDate).toLocaleDateString()}</span>}
            </div>
            <div className="task-actions">
                {task.status !== TaskStatus.Done && (
                    <button onClick={() => onUpdate(task.id, TaskStatus.Done)}>Concluir</button>
                )}
                <button className="btn-delete" onClick={() => onDelete(task.id)}>Excluir</button>
            </div>
        </div>
    );
};
