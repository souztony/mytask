using Microsoft.AspNetCore.Mvc;
using MyTask.Api.DTOs.Tasks;
using MyTask.Api.Services;

namespace MyTask.Api.Controllers;

[ApiController]
[Route("api/tasks")]
public class TasksController : ControllerBase
{
    private readonly TaskService _taskService;

    public TasksController(TaskService taskService)
    {
        _taskService = taskService;
    }

    [HttpGet("user/{userId:guid}")]
    public async Task<IActionResult> GetByUser(Guid userId)
    {
        var tasks = await _taskService.GetTasksByUserIdAsync(userId);
        return Ok(tasks);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var task = await _taskService.GetTaskByIdAsync(id);
        if (task == null) return NotFound();
        return Ok(task);
    }

    [HttpPost("user/{userId:guid}")]
    public async Task<IActionResult> Create(Guid userId, CreateTaskRequest request)
    {
        var task = await _taskService.CreateTaskAsync(userId, request);
        return CreatedAtAction(nameof(GetById), new { id = task.Id }, task);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, UpdateTaskRequest request)
    {
        var success = await _taskService.UpdateTaskAsync(id, request);
        if (!success) return NotFound();
        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var success = await _taskService.DeleteTaskAsync(id);
        if (!success) return NotFound();
        return NoContent();
    }
}
