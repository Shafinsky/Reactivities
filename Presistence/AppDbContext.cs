using Microsoft.EntityFrameworkCore;
using Domain;


namespace Presistence;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Activity> Activities { get; set; }
}