using Microsoft.AspNetCore.Mvc;
using MyTask.Api.DTOs.Auth;
using MyTask.Api.Services;

namespace MyTask.Api.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var user = await _authService.LoginAsync(request);
        if (user == null) return Unauthorized("Credenciais inválidas.");
        return Ok(new { user.Id, user.Username, user.Email });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        var user = await _authService.RegisterAsync(request);
        if (user == null) return BadRequest("Email já cadastrado.");
        return Ok(new { user.Id, user.Username, user.Email });
    }
}
