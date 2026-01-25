using Microsoft.EntityFrameworkCore;
using MyTask.Api.Infrastructure.Data;
using MyTask.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddOpenApi();

// Configure Database (SQLite for simplicity)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=mytask.db"));

// Register Services
builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<TaskService>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

// Auto-migrate/create database
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
