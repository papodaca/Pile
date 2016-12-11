using Microsoft.AspNetCore.Mvc;

using Pile.Entities;

namespace Pile.Controllers {
  public class BaseController : Controller {
    public PileDbContext _context { get; set; }
    public BaseController(PileDbContext context) {
      _context = context;
    }
  }
}
