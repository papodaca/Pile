using System;
using Microsoft.Extensions.Configuration;

namespace ApodacaBlog.Services {
  public interface IGreeter {
    string GetGreeting();
  }

  public class Greeter : IGreeter {
    private string _greeting { get; set; }

    public Greeter(IConfiguration configuration) {
      _greeting = configuration["port"];
    }

    public string GetGreeting() {
      return _greeting;
    }
  }
}
