using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using Pile.Models;

namespace Pile.Entities {
  public class PileDbContext : IdentityDbContext<User> {
    public PileDbContext(DbContextOptions options) :base(options) {}
    public DbSet<Image> Images { get; set; }
    public DbSet<Page> Pages { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<Setting> Settings { get; set; }
    public DbSet<Style> Styles { get; set; }
    public DbSet<Template> Templates { get; set; }
    public DbSet<Tag> Tags { get; set; }
  }
}
