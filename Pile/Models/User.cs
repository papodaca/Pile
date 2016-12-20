using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Pile.Models
{
    public class User : IdentityUser {
        public List<Post> Posts { get; set; }
    }
}
