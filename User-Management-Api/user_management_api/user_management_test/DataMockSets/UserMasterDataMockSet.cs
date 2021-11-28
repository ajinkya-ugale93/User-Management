using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Moq;
using user_management_repository.Models;

namespace user_management_test.DataMockSets
{
   
        public static class UserMasterDataMockSet
        {
            public static Mock<Microsoft.EntityFrameworkCore.DbSet<UserMaster>> GetUserMasterMockDataSet()
            {
                var data = new List<UserMaster>
                {
                    new UserMaster {Id = 1,UserId = "ajinkya.ugale@abc.com",Fname = "Ajinkya",Lname = "Uagle", Password = "Ajinkya",Email = "ajinkya.ugale@abc.com"},

                    new UserMaster {Id =2,UserId = "kc.dc@abc.com",Fname = "xyz",Lname = "abc", Password = "abc",Email = "kc.dc@abc.com"},
                    new UserMaster {Id=3,UserId = "abir.xyz@abc.com",Fname = "abir",Lname = "kabir", Password = "abc",Email = "abir.xyz@abc.com"},
                    new UserMaster {Id =4,UserId = "qwe.zxc@abc.com",Fname = "qwe",Lname = "zxc", Password = "abc",Email = "qwe.zxc@abc.com"},
                   

                }.AsQueryable();

                var mockSet = new Mock<Microsoft.EntityFrameworkCore.DbSet<UserMaster>>();

                mockSet.As<IQueryable<UserMaster>>().Setup(m => m.Provider).Returns(data.Provider);
                mockSet.As<IQueryable<UserMaster>>().Setup(m => m.Expression).Returns(data.Expression);
                mockSet.As<IQueryable<UserMaster>>().Setup(m => m.ElementType).Returns(data.ElementType);
                mockSet.As<IQueryable<UserMaster>>().Setup(m => m.GetEnumerator()).Returns(() => data.GetEnumerator());
                return mockSet;
            }
        }
    
}
