using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

using Pile.Entities;
using Pile.Models;
using System.Threading.Tasks;

namespace Pile.Controllers.Admin {
  [AllowAnonymous, Route("Admin")]
  public class AdminRootController : BaseController {
    private IConfiguration _configuration { get; set; }
    private SignInManager<User> _signInManager { get; set; }
    public AdminRootController(
      PileDbContext context,
      IConfiguration configuration,
      SignInManager<User> signInManager) :base(context) {
      _configuration = configuration;
      _signInManager = signInManager;
    }
    [AllowAnonymous, HttpGet]
    public IActionResult Index() {
      return File(
        $"{_configuration["BaseProjectPath"]}/wwwroot/Admin/index.html",
        "text/html"
      );
    }

    [AllowAnonymous, HttpPost("Session")]
    public async Task<IActionResult> CreateSession([FromBody] UserAuth user) {
      if(ModelState.IsValid) {
        var result = await _signInManager.PasswordSignInAsync(
              user.username,
              user.password,
              user.remember_me,
              false
            );
        if(result.Succeeded) {
          return Ok();
        } else {
          return NotFound();
        }
      } else {
        return NotFound();
      }
    }


    [Authorize, HttpPut("Session")]
    public IActionResult CheckSession() {
      if(!_signInManager.IsSignedIn(User)) {
        return NotFound();
      } else {
        return Ok();
      }
    }

    [Authorize, HttpDelete("Session")]
    public async Task<IActionResult> DestroySession() {
      await _signInManager.SignOutAsync();
      return Ok();
    }
  }
}
