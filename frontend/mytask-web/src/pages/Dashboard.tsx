import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../hooks/useAuth';
import * as tasksApi from '../api/tasks.api';
import type { Task } from '../types/Task';
import { TaskPriority, TaskStatus } from '../types/Task';
import { TaskItem } from '../components/TaskItem';
import { TaskForm } from '../components/TaskForm';

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
                <h1>Minhas Tarefas</h1>
                <div>
                    <span>Olá, {user.username}!</span>
                    <button onClick={logout}>Sair</button>
                </div>
            </header>

            <TaskForm onAdd={handleAddTask} />

            <div className="task-list">
                {tasks.length === 0 ? (
                    <p>Nenhuma tarefa por enquanto.</p>
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
