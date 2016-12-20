using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System.Text.RegularExpressions;

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
        .AddJsonFile($"{_env.ContentRootPath}/config/Config.json")
        .AddJsonFile($"{_env.ContentRootPath}/config/{_env.EnvironmentName}.json")
        .AddInMemoryCollection(new Dictionary<string, string>() {
          ["BaseProjectPath"] = _env.ContentRootPath,
          ["EnvironmentName"] = _env.EnvironmentName
        })
        .AddEnvironmentVariables()
        .Build();
    }

    public void ConfigureServices(IServiceCollection services) {

      string connectionString = null;
      if(_configuration["DATABASE_URL"] != null) {
        Match m = Regex.Match(_configuration["DATABASE_URL"], @"postgres://([^:]+)(?::([^@]+))?@([^:]+)(?::([0-9]+))?/(.+)");
        if(m.Success) {
          connectionString =
            "Username=" + m.Groups[1].Value + ";" +
            "Password=" + m.Groups[2].Value + ";" +
            "Host=" + m.Groups[3].Value + ";" +
            "Port=" + m.Groups[4].Value + ";" +
            "Database=" + m.Groups[5].Value+ ";";
        } else {
          throw new Exception("Database url malformed");
        }
      } else {
        throw new Exception("Database url not configured");
      }

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
        options.Cookies.ApplicationCookie.LoginPath = "/Admin";
        options.Cookies.ApplicationCookie.LogoutPath = "/Admin/Logoff";

        // User settings
        options.User.RequireUniqueEmail = true;

        options.SignIn.RequireConfirmedEmail = false;
      });

      services.AddMvc();

      services.AddAuthorization();
      services.AddAuthentication();

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
    }

    public async void Configure(
      IApplicationBuilder app,
      PileDbContext context,
      UserManager<User> userManager,
      ILoggerFactory loggerFactory) {
      context.Database.Migrate();

      loggerFactory.AddConsole();
      loggerFactory.AddDebug();

      app.UseFileServer();

      if (_env.EnvironmentName == "Development") {
        app.UseDeveloperExceptionPage();
        // foreach(var item in _configuration.AsEnumerable()) {
        //   System.Console.WriteLine(item);
        // }
      }

      app.UseIdentity();

      app.UseMvc(ConfigureRoutes);

      if(context.Users.Count() == 0) {
        Console.WriteLine("No users found, seeding one");
        var user = new User {
          UserName = "admin",
          Email = "admin@ra.in",
          EmailConfirmed = true
        };
        var result = await userManager.CreateAsync(user, "Can.run-89");
        if(result.Succeeded) {
          Console.WriteLine("User Created Successfully");
        } else if(result.Errors.Count() > 0) {
          foreach(var error in result.Errors) {
            Console.WriteLine(error.Description);
          }
        }
      }
    }
  }
}
