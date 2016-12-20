using System;
using System.ComponentModel.DataAnnotations;

namespace Pile.Models {
    public class PostTag {
        public Guid Id { get; set; }
        [Required]
        public Guid PostId { get; set; }
        public Post Post { get; set; }
        [Required]
        public Guid TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
