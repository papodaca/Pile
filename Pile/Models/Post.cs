using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pile.Models {
    public class Post {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public Boolean Published { get; set; }
        public string Content { get; set; }
        [ForeignKey("TemplateId")]
        public Template Template { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
