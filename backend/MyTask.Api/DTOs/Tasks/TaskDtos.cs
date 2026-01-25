using MyTask.Api.Domain.Enums;
using TaskStatus = MyTask.Api.Domain.Enums.TaskStatus;

namespace MyTask.Api.DTOs.Tasks;

public record CreateTaskRequest(string Title, TaskPriority Priority, DateTime? DueDate);
public record UpdateTaskRequest(string Title, TaskPriority Priority, TaskStatus Status, DateTime? DueDate);
public record TaskResponse(Guid Id, string Title, TaskPriority Priority, TaskStatus Status, DateTime? DueDate, Guid UserId);
