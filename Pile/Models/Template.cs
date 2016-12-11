using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pile.Models {
  public class Template {
    public Template(string name, string content) {
      this.Name = name;
      this.Content = content;
    }
    public Template(string name, string content, Guid style) {
      this.Name = name;
      this.Content = content;
      this.StyleId = style;
    }
    public Template(string name, string content, Guid style, Guid parentTemplate) {
      this.Name = name;
      this.Content = content;
      this.StyleId = style;
      this.TemplateId = parentTemplate;
    }
    public Guid Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string Content { get; set; }
    public Guid StyleId { get; set; }
    [ForeignKey("StyleId")]
    public Style Style { get; set; }
    public Guid TemplateId { get; set; }
    [ForeignKey("TemplateId")]
    public Template ParentTemplate { get; set; }
  }
}
