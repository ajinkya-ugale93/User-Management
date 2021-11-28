using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace user_management_repository.CustomViewModels
{
    public class UserDetailsVW
    {
        [Key]
        public int UID { get; set; }
        public string UserID { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string Email { get; set; }
        public bool IsAdmin { get; set; }
        public int? DepartmentID { get; set; }
        public int? ID { get; set; }
        public bool UserIsActive { get; set; }
    
    }
}
