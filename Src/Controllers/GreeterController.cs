using Microsoft.AspNetCore.Mvc;

namespace ApodacaBlog.Controllers {
  [Route("about")]
  public class GreeterController : Controller {
    [Route("")]
    public IActionResult index() {
      return Content("This is a greeting from a controller");
    }
  }
}
