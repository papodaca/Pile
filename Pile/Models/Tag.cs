using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Pile.Models {
    public class Tag {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        public List<PostTag> PostTags { get; set; }
    }
}
