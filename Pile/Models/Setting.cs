using System;

namespace Pile.Models {
    public class Setting {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }

        public Setting(string Name, string Value) {
          this.Name = Name;
          this.Value = Value;
        }
    }
}
