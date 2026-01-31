import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../hooks/useAuth';
import * as tasksApi from '../api/tasks.api';
import type { Task } from '../types/Task';
import { TaskPriority, TaskStatus } from '../types/Task';
import { TaskItem } from '../components/TaskItem';
import { TaskForm } from '../components/TaskForm';
import { LogOut, User as UserIcon, ListTodo } from 'lucide-react';

export const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchTasks = useCallback(async () => {
        if (user) {
            const data = await tasksApi.getTasks(user.id);
            setTasks(data);
        }
    }, [user]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const handleAddTask = async (title: string, priority: TaskPriority, dueDate?: string) => {
        if (user) {
            await tasksApi.createTask(user.id, title, priority, dueDate);
            fetchTasks();
        }
    };

    const handleUpdateStatus = async (id: string, status: TaskStatus) => {
        const task = tasks.find(t => t.id === id);
        if (task) {
            await tasksApi.updateTask(id, task.title, task.priority, status, task.dueDate);
            fetchTasks();
        }
    };

    const handleDelete = async (id: string) => {
        await tasksApi.deleteTask(id);
        fetchTasks();
    };

    if (!user) {
        window.location.href = '/login';
        return null;
    }

    return (
        <div className="dashboard">
            <header>
                <h1>
                    <ListTodo size={28} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                    MyTask
                </h1>
                <div className="user-info">
                    <div className="user-name">
                        <UserIcon size={18} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                        {user.username}
                    </div>
                    <button onClick={logout} className="secondary">
                        <LogOut size={18} />
                        Sair
                    </button>
                </div>
            </header>

            <TaskForm onAdd={handleAddTask} />

            <div className="task-list">
                {tasks.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-light)' }}>
                        <ListTodo size={48} style={{ marginBottom: '1rem', opacity: 0.2 }} />
                        <p>Nenhuma tarefa por enquanto. Comece adicionando uma acima!</p>
                    </div>
                ) : (
                    tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onUpdate={handleUpdateStatus}
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
