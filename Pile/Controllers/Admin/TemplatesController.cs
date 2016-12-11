using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Pile.Entities;
using Pile.Models;
using System;

namespace Pile.Controllers.Admin {
  [Authorize]
  [Route("Admin/Templates")]
  public class TemplatesController : BaseController {
    public TemplatesController(PileDbContext context) :base(context) {
    }

    [Authorize]
    [HttpGet("")]
    public IActionResult Index() {
      var templates = _context.Templates.ToList();
      return Json(templates);
    }

    [Authorize]
    [HttpPost("")]
    public IActionResult Create([FromBody] Template template) {
      if (template == null || template.Name == null || template.Content == null) {
        return BadRequest();
      }
      _context.Templates.Add(template);
      _context.SaveChanges();
      return Json(template);
    }

    [Authorize]
    [HttpPut("{id}")]
    public IActionResult Update(string id, [FromBody] Template template) {
      var thisId = new Guid(id);
      if(template == null || template.Id != thisId) {
        return BadRequest();
      }
      var dbTemplate = _context.Templates.Find(thisId);
      if(dbTemplate == null) {
        return NotFound();
      }
      _context.SaveChanges();
      return Json(template);
    }

    [Authorize]
    [HttpDelete("{id}")]
    public IActionResult Destroy(string id) {
      var thisId = new Guid(id);
      var dbTemplate = _context.Templates.Find(thisId);
      if(dbTemplate == null) {
        return NotFound();
      }
      _context.Templates.Remove(dbTemplate);
      _context.SaveChanges();
      return Ok();
    }
  }
}
