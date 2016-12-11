using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using Pile.Entities;
using Pile.Services;
using Pile.Models;

namespace Pile
{
    public class Startup {
    public IConfiguration _configuration { get; set; }
    public IHostingEnvironment _env { get; set; }

    public Startup(IHostingEnvironment env) {
      _env = env;
      _configuration = new ConfigurationBuilder()
        .AddJsonFile($"{env.ContentRootPath}/config/Config.json")
        .AddJsonFile($"{env.ContentRootPath}/config/{_env.EnvironmentName}.json")
        .AddEnvironmentVariables()
        .Build();
    }

    public void ConfigureServices(IServiceCollection services) {
      services.AddMvc();

      var connectionString =
        "Host=" + _configuration["db:host"] + ";" +
        "Database=" + _configuration["db:database"] + ";" +
        "Username=" + _configuration["db:username"] + ";" +
        "Password=" + _configuration["db:password"];

      services
        .AddEntityFramework()
        .AddEntityFrameworkNpgsql()
        .AddDbContext<PileDbContext>(options => options.UseNpgsql(connectionString))
        .AddIdentity<User, IdentityRole>()
        .AddEntityFrameworkStores<PileDbContext>()
        .AddDefaultTokenProviders();

      services.Configure<IdentityOptions>(options => {
        // Password settings
        options.Password.RequireDigit = true;
        options.Password.RequiredLength = 8;
        options.Password.RequireNonAlphanumeric = true;
        options.Password.RequireUppercase = true;
        options.Password.RequireLowercase = false;

        // Lockout settings
        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
        options.Lockout.MaxFailedAccessAttempts = 5;

        // Cookie settings
        options.Cookies.ApplicationCookie.ExpireTimeSpan = TimeSpan.FromDays(150);
        options.Cookies.ApplicationCookie.LoginPath = "/Account/LogIn";
        options.Cookies.ApplicationCookie.LogoutPath = "/Account/LogOff";

        // User settings
        options.User.RequireUniqueEmail = true;
      });

      services
        .AddSingleton(provider => _configuration)
        .AddSingleton<IBlogSettings, BlogSettings>();
    }

    private void ConfigureRoutes(IRouteBuilder routeBuilder) {
      routeBuilder.MapRoute("Default", "{controller=Index}/{action=Index}/{id?}");
      routeBuilder.MapRoute(
        name: "article",
        template: "Article/{*article}",
        defaults: new { controller = "Post", action = "Article"});
      routeBuilder.MapRoute(
        name: "page",
        template: "Page/{*page}",
        defaults: new { controller = "Page", action = "Page"});
      routeBuilder.MapRoute(
        name: "admin",
        template: "Admin",
        defaults: new { controller = "Admin", action = "Index"});
    }

    public void Configure(IApplicationBuilder app, PileDbContext context) {
      context.Database.Migrate();

      app.UseFileServer();

      if (_env.EnvironmentName == "Development") {
        app.UseDeveloperExceptionPage();
        foreach(var item in _configuration.AsEnumerable()) {
          System.Console.WriteLine(item);
        }
      }

      app.UseIdentity();

      app.UseMvc(ConfigureRoutes);
    }
  }
}
