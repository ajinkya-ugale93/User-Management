using System;
using System.Collections.Generic;
using System.Text;

namespace user_management_repository.CustomViewModels
{
    public class AddUserDetailsVm
    {
        public string EmailId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsAdmin { get; set; }
        public string CreatedBy { get; set; }
        public int DeptId { get; set; }
    }
}
