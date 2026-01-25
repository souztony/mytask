using Microsoft.EntityFrameworkCore;
using MyTask.Api.Domain.Entities;

namespace MyTask.Api.Infrastructure.Data;

public class AppDbContext : DbContext
{
    public DbSet<User> Users => Set<User>();
    public DbSet<TaskItem> Tasks => Set<TaskItem>();

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
}
