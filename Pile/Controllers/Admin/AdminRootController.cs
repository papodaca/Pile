using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using CommonMark;

using Pile.Entities;
using Pile.Services;


namespace Pile.Controllers.Admin {
  [AllowAnonymous]
  [Route("Admin")]
  public class AdminRootController : BaseController {
    public AdminRootController(PileDbContext context) :base(context) {
    }
    [AllowAnonymous]
    [Route("")]
    public IActionResult Index() {
      return Content("");
    }
    [AllowAnonymous]
    [HttpGetAttribute("Session")]
    public IActionResult NewSession() {
      return Content("");
    }

    [Authorize]
    [HttpDelete("Session")]
    public IActionResult DestroySession() {
      return Content("");
    }
  }
}
