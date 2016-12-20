using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Dynamic;
using System.Collections.Generic;

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
    private List<dynamic> getPostsForPage(int page) {
      var posts = _context.Posts
        .Where(p => p.Published)
        .Skip((page - 1) * _pageCount)
        .OrderBy(p => p.Date)
        .Take(_pageCount).ToList();

      List<dynamic> viewPosts = new List<dynamic>();
      foreach(var post in posts) {
        viewPosts.Add(new {
          title = post.Title,
          content = post.Render(_context)
        });
      }
      return viewPosts;
    }
    [Route("")]
    [AllowAnonymous]
    public IActionResult Index() {
      dynamic data = new ExpandoObject();
      data["posts"] = getPostsForPage(1);
      data["pages"] = Pile.Models.Page.getPageLinks(_context);
      var indexTemplate = _context.Templates.Single(t => t.Name == "Index");
      if(indexTemplate == null) {
        return NotFound();
      }
      return Content(indexTemplate.Render(_context, data));
    }
    [Route("page/{pageNumber}")]
    [AllowAnonymous]
    public IActionResult Page(int pageNumber) {
      dynamic data = new ExpandoObject();
      data["posts"] = getPostsForPage(1);
      data["pages"] = Pile.Models.Page.getPageLinks(_context);
      data["currentPage"] = pageNumber;
      data["previousPage"] = pageNumber;
      data["nextPage"] = pageNumber;
      var indexTemplate = _context.Templates.Single(t => t.Name == "IndexPage");
      if(indexTemplate == null) {
        return NotFound();
      }
      return Content(CommonMarkConverter.Convert("***This is a greeting from a controller***"));
    }
  }
}
