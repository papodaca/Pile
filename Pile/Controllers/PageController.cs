using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Pile.Entities;

namespace Pile.Controllers {
  [AllowAnonymous]
  public class PageController : BaseController {
    public PageController(PileDbContext context) :base(context) {
    }
    [AllowAnonymous]
    public IActionResult Page(string page) {
      var title = page.Replace('_', ' ');
      var pageModel = _context.Pages
        .Where(p => p.Title == title)
        .First();
      return Json(pageModel);
    }
  }
}
