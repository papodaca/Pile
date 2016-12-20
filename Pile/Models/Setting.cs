using System;
using System.ComponentModel.DataAnnotations;

namespace Pile.Models {
    public class Setting {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Value { get; set; }
        [Required]
        public Boolean Locked { get; set; }
        public Setting() {
        }
        public Setting(string Name, string Value) {
          this.Name = Name;
          this.Value = Value;
        }
    }
}
