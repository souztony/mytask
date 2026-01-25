using Microsoft.EntityFrameworkCore;
using MyTask.Api.Domain.Entities;
using MyTask.Api.DTOs.Auth;
using MyTask.Api.Infrastructure.Data;

namespace MyTask.Api.Services;

public class AuthService
{
    private readonly AppDbContext _context;

    public AuthService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<User?> LoginAsync(LoginRequest request)
    {
        // Simple authentication for demo purposes
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
        if (user != null && user.PasswordHash == request.Password) // WARNING: Replace with hash check in production
        {
            return user;
        }
        return null;
    }

    public async Task<User?> RegisterAsync(RegisterRequest request)
    {
        if (await _context.Users.AnyAsync(u => u.Email == request.Email))
            return null;

        var user = new User
        {
            Id = Guid.NewGuid(),
            Username = request.Username,
            Email = request.Email,
            PasswordHash = request.Password // WARNING: Hash this in production
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }
}
