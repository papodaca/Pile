using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Pile.Entities;
using Pile.Models;

namespace Pile.Controllers.Admin {
  [Authorize]
  [Route("Admin/Settings")]
  public class SettingsController : BaseController {
    public SettingsController(PileDbContext context) :base(context) {
    }

    [Authorize]
    [HttpGet("")]
    public IActionResult Index() {
      var settings = _context.Settings.ToList();
      Response.StatusCode = 200;
      return Json(settings);
    }

    [Authorize]
    [HttpPost("")]
    public IActionResult Create([FromBody] Setting setting) {
      if(setting == null || setting.Name == null | setting.Value == null) {
        return BadRequest();
      }
      setting.Locked = false;
      _context.Settings.Add(setting);
      _context.SaveChanges();
      Response.StatusCode = 201;
      return Json(setting);
    }

    [Authorize]
    [HttpPut("{id}")]
    public IActionResult Update(string id, [FromBody] Setting setting) {
      if(setting == null || setting.Name == null || setting.Value == null) {
        return BadRequest();
      }
      var dbSetting = _context.Settings.Single(s => s.Id == new Guid(id));
      if(dbSetting == null) {
        return NotFound();
      } else if(dbSetting.Locked) {
        return BadRequest();
      }
      _context.SaveChanges();
      Response.StatusCode = 200;
      return Json(dbSetting);
    }
    [Authorize]
    [HttpDelete("{id}")]
    public IActionResult Destroy(string id) {
      var dbSetting = _context.Settings.Single(s => s.Id == new Guid(id));
      if(dbSetting == null) {
        return NotFound();
      } else if(dbSetting.Locked) {
        return BadRequest();
      }
      _context.Settings.Remove(dbSetting);
      _context.SaveChanges();
      Response.StatusCode = 200;
      return Ok();
    }
  }
}
