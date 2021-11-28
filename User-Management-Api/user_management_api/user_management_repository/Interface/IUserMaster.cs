using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using user_management_repository.CustomViewModels;
using user_management_repository.Models;

namespace user_management_repository.Interface
{
   public interface IUserMaster
    {
        Task<List<UserMaster>> GetUser();
        Task<UserDetailsVW> GetUserById(int id);
        Task<IEnumerable<DepartmentMaster>> GetDepartments();
        Task<bool> AddUser(UserMaster userMaster);
        Task<bool> UpdateUserDetails(UserDetailsVW userDetailsVw);
        Task<bool> DeleteUser(int userId);
    }
}
