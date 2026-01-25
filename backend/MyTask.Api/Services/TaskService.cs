using Microsoft.EntityFrameworkCore;
using MyTask.Api.Domain.Entities;
using MyTask.Api.DTOs.Tasks;
using MyTask.Api.Infrastructure.Data;
using TaskStatus = MyTask.Api.Domain.Enums.TaskStatus;

namespace MyTask.Api.Services;

public class TaskService
{
    private readonly AppDbContext _context;

    public TaskService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<TaskResponse>> GetTasksByUserIdAsync(Guid userId)
    {
        return await _context.Tasks
            .Where(t => t.UserId == userId)
            .Select(t => new TaskResponse(t.Id, t.Title, t.Priority, t.Status, t.DueDate, t.UserId))
            .ToListAsync();
    }

    public async Task<TaskResponse?> GetTaskByIdAsync(Guid id)
    {
        var t = await _context.Tasks.FindAsync(id);
        if (t == null) return null;
        return new TaskResponse(t.Id, t.Title, t.Priority, t.Status, t.DueDate, t.UserId);
    }

    public async Task<TaskResponse> CreateTaskAsync(Guid userId, CreateTaskRequest request)
    {
        var task = new TaskItem
        {
            Id = Guid.NewGuid(),
            Title = request.Title,
            Priority = request.Priority,
            Status = TaskStatus.Pending,
            DueDate = request.DueDate,
            UserId = userId
        };

        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();

        return new TaskResponse(task.Id, task.Title, task.Priority, task.Status, task.DueDate, task.UserId);
    }

    public async Task<bool> UpdateTaskAsync(Guid id, UpdateTaskRequest request)
    {
        var task = await _context.Tasks.FindAsync(id);
        if (task == null) return false;

        task.Title = request.Title;
        task.Priority = request.Priority;
        task.Status = request.Status;
        task.DueDate = request.DueDate;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteTaskAsync(Guid id)
    {
        var task = await _context.Tasks.FindAsync(id);
        if (task == null) return false;

        _context.Tasks.Remove(task);
        await _context.SaveChangesAsync();
        return true;
    }
}
