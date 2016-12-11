using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pile.Models {
    public class Page {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        [ForeignKey("TemplateId")]
        public Template Template { get; set; }
    }
}
