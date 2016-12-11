using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Pile.Entities;
using Pile.Models;

namespace Pile.Controllers.Admin {
  [Authorize]
  [Route("Admin/Users")]
  public class UsersController : BaseController {
    public UsersController(PileDbContext context) :base(context) {
    }

    [Authorize]
    [HttpGet("")]
    public IActionResult Index() {
      var users = _context.Users.ToList();
      return Json(users);
    }

    [Authorize]
    [HttpPost("")]
    public IActionResult Create([FromBody] User user) {
      return Content("");
    }

    [Authorize]
    [HttpPut("{id}")]
    public IActionResult Update(string id, [FromBody] User user) {
      return Content("");
    }

    [Authorize]
    [HttpDelete("{id}")]
    public IActionResult Destroy(string id) {
      return Content("");
    }
  }
}
