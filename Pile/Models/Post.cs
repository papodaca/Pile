using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CommonMark;
using Pile.Entities;

namespace Pile.Models {
    public class Post {
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public Boolean Published { get; set; }
        [Required]
        public string Content { get; set; }
        [ForeignKey("TemplateId")]
        [Required]
        public Template Template { get; set; }
        [ForeignKey("UserId")]
        [Required]
        public User User { get; set; }
        public List<PostTag> PostTags { get; set; }
        public string Render(PileDbContext context) {
          var data = new {
            content = CommonMarkConverter.Convert(Content)
          };
          return Template.Render(context, data);
        }
    }
}
