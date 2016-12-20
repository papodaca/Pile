using System;
using System.ComponentModel.DataAnnotations;

namespace Pile.Models
{
    public class Image {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public byte[] Content { get; set; }
    }
}
