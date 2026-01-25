using MyTask.Api.Domain.Enums;
using TaskStatus = MyTask.Api.Domain.Enums.TaskStatus;

namespace MyTask.Api.Domain.Entities;

public class TaskItem
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;

    public TaskPriority Priority { get; set; }
    public TaskStatus Status { get; set; }
    public DateTime? DueDate { get; set; }

    public Guid UserId { get; set; }
}
