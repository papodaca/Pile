using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace ApodacaBlog.Controllers {
  [Route("/")]
  public class RootController : Controller {
    private IConfiguration _configuration {get; set;}
    public RootController(IConfiguration configuration) {
        _configuration =configuration;
    }
    [Route("")]
    public IActionResult index() {
      var rootPath = _configuration["ContentRootPath"];
      return File($"{rootPath}/wwwroot/index.html", "text/html");
    }
  }
}
