import api from './http';
import type { Task } from '../types/Task';
import { TaskPriority, TaskStatus } from '../types/Task';

export const getTasks = async (userId: string): Promise<Task[]> => {
    const response = await api.get<Task[]>(`/tasks/user/${userId}`);
    return response.data;
};

export const createTask = async (userId: string, title: string, priority: TaskPriority, dueDate?: string): Promise<Task> => {
    const response = await api.post<Task>(`/tasks/user/${userId}`, { title, priority, dueDate });
    return response.data;
};

export const updateTask = async (id: string, title: string, priority: TaskPriority, status: TaskStatus, dueDate?: string): Promise<void> => {
    await api.put(`/tasks/${id}`, { title, priority, status, dueDate });
};

export const deleteTask = async (id: string): Promise<void> => {
    await api.delete(`/tasks/${id}`);
};
