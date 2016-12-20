
using System.ComponentModel.DataAnnotations;

namespace Pile.Models
{
  public class UserAuth {
    [Required]
    public string username { get; set; }
    [Required]
    public string password { get; set; }
    public bool remember_me { get; set; }
  }
}
