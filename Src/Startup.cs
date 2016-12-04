using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Routing;

using ApodacaBlog.Services;


namespace ApodacaBlog
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
      services.AddSingleton<IGreeter, Greeter>();
      services.AddSingleton(provider => _configuration);
    }

    private void ConfigureRoutes(IRouteBuilder routeBuilder) {
      routeBuilder.MapRoute("Default", "{controller}/{action}/{id?}");
    }

    public void Configure(IApplicationBuilder app, IGreeter greeter) {
      app.UseFileServer();

      if (_env.EnvironmentName == "Development") {
        app.UseDeveloperExceptionPage();
      }

      app.UseMvc(ConfigureRoutes);

      // app.Run(async (context) => {
      //   var message = greeter.GetGreeting();
      //   await context.Response.WriteAsync($"Hello World, listening on {message}");
      // });
    }
  }
}
