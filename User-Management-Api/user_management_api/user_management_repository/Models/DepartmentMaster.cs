
using System;
using System.Collections.Generic;
using user_management_repository.Models;

namespace user_management_repository.Models
{
    public partial class DepartmentMaster
    {
        public DepartmentMaster()
        {
            UserMaster = new HashSet<UserMaster>();
        }

        public int Id { get; set; }
        public string DepartmentName { get; set; }
        public bool IsActive { get; set; }
        public int? SrNo { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreateDate { get; set; }
        public string ModifyBy { get; set; }
        public DateTime? ModifyDate { get; set; }

        public virtual ICollection<UserMaster> UserMaster { get; set; }
    }
}
