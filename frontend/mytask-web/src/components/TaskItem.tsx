import React from 'react';
import type { Task } from '../types/Task';
import { TaskStatus, TaskPriorityLabels } from '../types/Task';
import { CheckCircle, Trash2, Calendar, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
    task: Task;
    onUpdate: (id: string, status: TaskStatus) => void;
    onDelete: (id: string) => void;
}

export const TaskItem: React.FC<Props> = ({ task, onUpdate, onDelete }) => {
    const isDone = task.status === TaskStatus.Done;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`task-item ${isDone ? 'done' : ''}`}
        >
            <div className="task-info-content">
                <h3 className="task-title" style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                    {task.title}
                </h3>
                <div className="task-meta">
                    <span className={`badge badge-priority-${task.priority}`}>
                        <AlertCircle size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                        {TaskPriorityLabels[task.priority]}
                    </span>
                    {task.dueDate && (
                        <span>
                            <Calendar size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                            {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                    )}
                </div>
            </div>
            <div className="task-actions">
                {!isDone && (
                    <button 
                        className="btn-icon btn-complete" 
                        onClick={() => onUpdate(task.id, TaskStatus.Done)}
                        title="Concluir"
                    >
                        <CheckCircle size={18} />
                    </button>
                )}
                <button 
                    className="btn-icon btn-delete" 
                    onClick={() => onDelete(task.id)}
                    title="Excluir"
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </motion.div>
    );
};
