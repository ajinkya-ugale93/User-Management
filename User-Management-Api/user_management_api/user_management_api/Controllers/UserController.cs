using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using user_management_repository.CustomViewModels;
using user_management_repository.Interface;
using user_management_repository.Models;

namespace user_management_api.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IUserMaster UserMasterRepo { get; set; }
        public UserController(IUserMaster _usermasterrepo)
        {
            UserMasterRepo = _usermasterrepo;
        }

        [HttpGet]
        [Route("GetUser")]
        public async Task<IActionResult> GetUser()
        {
            var userList = await UserMasterRepo.GetUser();
            return Ok(userList);
        }

        [HttpGet]
        [Route("GetUserById")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var userList = await UserMasterRepo.GetUserById(id);
            return Ok(userList);
        }

        [HttpGet]
        [Route("GetDepartments")]
        public async Task<IActionResult> GetDepartments()
        {
            var departmentList = await UserMasterRepo.GetDepartments();
            return Ok(departmentList);
        }
        [HttpPost]
        [Route("AddUser")]
        public async Task<string> AddUser([FromBody] AddUserDetailsVm addUserDetails)
        {
            var userMaster = new UserMaster();
            userMaster.Email = addUserDetails.EmailId;
            userMaster.Fname = addUserDetails.FirstName;
            userMaster.Lname = addUserDetails.LastName;
            userMaster.UserId = addUserDetails.EmailId;
            userMaster.Password = "123";
            userMaster.IsActive = true;
            userMaster.IsAdmin = addUserDetails.IsAdmin;
            userMaster.CreatedDate = DateTime.Now;
            userMaster.CreatedBy = addUserDetails.CreatedBy;
            userMaster.Mname = "";
            userMaster.DepartmentMasterId = addUserDetails.DeptId;
            if (await UserMasterRepo.AddUser(userMaster))
            {
                return "123";
            }
            else
            {
                return "";
            }
        }
        [HttpPost]
        [Route("EditUserDetails")]
        public async Task<bool> EditUserDetails([FromBody] UserDetailsVW user)
        {
            await UserMasterRepo.UpdateUserDetails(user);
            return true;

        }

        [HttpGet]
        [Route("DeleteUser")]
        public async Task<bool> DeleteUser(int userId)
        {
            return await UserMasterRepo.DeleteUser(userId);
           

        }

    }
}
