using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using user_management_repository.Interface;
using user_management_repository.CustomViewModels;
using user_management_repository.Models;
using System.Data.SqlClient;

namespace user_management_repository.Repositories
{
   public class UserMasterRepo : IUserMaster
    {
        private readonly IConfiguration _configuration;
        private readonly Context _context;
      
        public UserMasterRepo(IConfiguration configuration, Context context)
        {
            _context = context;

            _configuration = configuration;
        }
       
        public async Task<List<UserMaster>> GetUser()
        {
            try
            {
                return await (from um in _context.UserMaster
                    join dm in _context.DepartmentMaster on um.DepartmentMasterId equals dm.Id
                    select new UserMaster()
                    {
                        Id = um.Id,
                        Fname = um.Fname,
                        Lname = um.Lname,
                        Email = um.Email,
                        DepartmentMasterId = dm.Id,
                        IsActive = um.IsActive,
                        IsAdmin = um.IsAdmin
                    }).ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<UserDetailsVW> GetUserById(int id)
        {
            try
            {
                return await (from um in _context.UserMaster
                    join dm in _context.DepartmentMaster on um.DepartmentMasterId equals dm.Id
                    where um.Id == id
                    select new UserDetailsVW()
                    {
                        ID = um.Id,
                        FName = um.Fname,
                        LName = um.Lname,
                        Email = um.Email,
                        DepartmentID = dm.Id,
                        UserIsActive = um.IsActive,
                        IsAdmin = um.IsAdmin
                    }).FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<IEnumerable<DepartmentMaster>> GetDepartments()
        {
            return await _context.DepartmentMaster.OrderBy(s => s.DepartmentName).ToListAsync();

        }

        public async Task<bool> AddUser(UserMaster userMaster)
        {
            try
            {
                var emailIdUsersData = await _context.UserMaster.SingleOrDefaultAsync(um => um.Email == userMaster.Email);
                if (emailIdUsersData == null)
                {
                    await _context.UserMaster.AddAsync(userMaster);
                    int rowUpdated = await _context.SaveChangesAsync();
                    if (rowUpdated > 0)
                    {

                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch (Exception e)
            {
                return false;
            }
            return false;
        }
        public async Task<bool> UpdateUserDetails(UserDetailsVW userDetailsVw)
        {
            int rowUpdated = 0;
            var itemToUpdate = await _context.UserMaster.SingleOrDefaultAsync(um => um.Email == userDetailsVw.Email);
            if (itemToUpdate != null)
            {
                itemToUpdate.Fname = userDetailsVw.FName;
                itemToUpdate.Lname = userDetailsVw.LName;
                itemToUpdate.IsActive = userDetailsVw.UserIsActive;
                itemToUpdate.IsAdmin = userDetailsVw.IsAdmin;
                itemToUpdate.DepartmentMasterId = userDetailsVw.DepartmentID;
                _context.UserMaster.Update(itemToUpdate);
                rowUpdated = await _context.SaveChangesAsync();
            }
            if (rowUpdated > 0)
            {
                                return true;
            }
            else
            {
                return false;
            }
        }


        public async Task<bool> DeleteUser(int userId)
        {
            int rowUpdated = 0;
            var itemToDelete = await _context.UserMaster.SingleOrDefaultAsync(um => um.Id == userId);
            if (itemToDelete != null)
            {
                _context.UserMaster.Remove(itemToDelete);
                rowUpdated = await _context.SaveChangesAsync();
            }
            if (rowUpdated > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
