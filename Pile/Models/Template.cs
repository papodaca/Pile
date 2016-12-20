using System;
using System.Linq;
using System.Dynamic;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using HandlebarsDotNet;

using Pile.Entities;

namespace Pile.Models
{
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
    public string Render(PileDbContext context, dynamic scope) {
      var childTemplate = context.Templates.Single(t => t.TemplateId == Id);
      var template = Handlebars.Compile(Content);
      dynamic data = new ExpandoObject();
      foreach (var property in (IDictionary<string, dynamic>)scope) {
        data[property.Key] = property.Value;
      }
      if(StyleId != null) {
        data["style"] = Style.Render();
      }
      if(childTemplate != null) {
        data["child"] = childTemplate.Render(context, scope);
      }
      return template(data);
    }
  }
}
