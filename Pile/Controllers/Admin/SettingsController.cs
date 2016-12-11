using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Pile.Entities;

namespace Pile.Controllers.Admin {
  [Authorize]
  [Route("Admin/Settings")]
  public class SettingsController : BaseController {
    public SettingsController(PileDbContext context) :base(context) {
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
  }
}
