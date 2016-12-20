using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CommonMark;
using Pile.Entities;

namespace Pile.Models {
    public class Page {
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public Boolean Published { get; set; }
        [ForeignKey("TemplateId")]
        [Required]
        public Template Template { get; set; }
        public string Render(PileDbContext context) {
          var data = new {
            content = CommonMarkConverter.Convert(Content)
          };
          return Template.Render(context, data);
        }
        public static List<dynamic> getPageLinks(PileDbContext context) {
          var pages = context.Pages.ToList();

          List<dynamic> viewPageLinks = new List<dynamic>();
          foreach(var page in pages) {
            viewPageLinks.Add(new {
              title = page.Title,
              href = $"/Page/{page.Title.Replace(' ', '_')}"
            });
          }
          return viewPageLinks;
        }
    }
}
