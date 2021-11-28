using System;
using System.Collections.Generic;
using System.Text;

namespace user_management_repository.Models
{
    public partial class UserMaster
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Fname { get; set; }
        public string Mname { get; set; }
        public string Lname { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int? DepartmentMasterId { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsActive { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual DepartmentMaster DepartmentMaster { get; set; }
    }
  
}
