using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Pile.Entities;

namespace Pile.Controllers {
  [AllowAnonymous]
  public class PostController : BaseController {
    public PostController(PileDbContext context) :base(context) {
    }
    [AllowAnonymous]
    public IActionResult Article(string article) {
      var title = article.Replace('_', ' ');
      var post = _context.Posts
        .Where(p => p.Title == title)
        .First();
      return Json(post);
    }
  }
}
