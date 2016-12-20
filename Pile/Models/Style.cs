using System;
using System.ComponentModel.DataAnnotations;
using HandlebarsDotNet;

namespace Pile.Models {
  public class Style {
    public Guid Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string Content { get; set; }
    internal string Render() {
      return $"<style>{Content}</style>";
    }
  }
}
