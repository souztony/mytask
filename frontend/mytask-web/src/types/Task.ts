export const TaskPriority = {
    Low: 0,
    Medium: 1,
    High: 2
} as const;

export type TaskPriority = typeof TaskPriority[keyof typeof TaskPriority];

export const TaskPriorityLabels: Record<TaskPriority, string> = {
    [TaskPriority.Low]: 'Baixa',
    [TaskPriority.Medium]: 'Média',
    [TaskPriority.High]: 'Alta'
};

export const TaskStatus = {
    Pending: 0,
    InProgress: 1,
    Done: 2
} as const;

export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];

export const TaskStatusLabels: Record<TaskStatus, string> = {
    [TaskStatus.Pending]: 'Pendente',
    [TaskStatus.InProgress]: 'Em Progresso',
    [TaskStatus.Done]: 'Concluído'
};

export type Task = {
    id: string;
    title: string;
    priority: TaskPriority;
    status: TaskStatus;
    dueDate?: string;
    userId: string;
}
