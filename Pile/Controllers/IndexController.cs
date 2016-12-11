using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using CommonMark;

using Pile.Entities;
using Pile.Services;


namespace Pile.Controllers {
  [Route("")]
  [AllowAnonymous]
  public class IndexController : BaseController {
    private int _pageCount { get; set; }
    public IndexController(PileDbContext context, IBlogSettings settings) :base(context) {
      _pageCount = settings.GetPageCount();
    }
    [Route("")]
    [AllowAnonymous]
    public IActionResult Index() {
      var posts = _context.Posts
        .Where(p => p.Published)
        .OrderBy(p => p.Date)
        .Take(_pageCount).ToList();
      return Json(posts);
    }
    [Route("page/{pageNumber}")]
    [AllowAnonymous]
    public IActionResult Page(int pageNumber) {
      var posts = _context.Posts
        .Where(p => p.Published)
        .OrderBy(p => p.Date)
        .Skip(pageNumber * _pageCount)
        .Take(_pageCount);
      return Content(CommonMarkConverter.Convert("***This is a greeting from a controller***"));
    }
  }
}
