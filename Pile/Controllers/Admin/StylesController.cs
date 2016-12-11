using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Pile.Entities;

namespace Pile.Controllers.Admin {
  [Authorize]
  [Route("Admin/Styles")]
  public class StylesController : BaseController {
    public StylesController(PileDbContext context) :base(context) {
    }

    [Authorize]
    [HttpGet("")]
    public IActionResult Index() {
      return Content("");
    }

    [Authorize]
    [HttpPost("")]
    public IActionResult Create() {
      return Content("");
    }

    [Authorize]
    [HttpPut("{id}")]
    public IActionResult Update(string id) {
      return Content("");
    }

    [Authorize]
    [HttpDelete("{id}")]
    public IActionResult Destroy(string id) {
      return Content("");
    }
  }
}
