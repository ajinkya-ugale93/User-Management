using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using user_management_repository.CustomViewModels;

namespace user_management_repository.Models
{
    public partial class Context : DbContext
    {
        public virtual DbSet<UserDetailsVW> GetUserDetails { get; set; }
    }
}
