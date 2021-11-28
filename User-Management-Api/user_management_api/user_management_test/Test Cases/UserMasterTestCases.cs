
using System.Threading.Tasks;
using  System;
using Microsoft.Extensions.Configuration;

using user_management_api.Controllers;
using user_management_repository.Models;
using user_management_repository.Repositories;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace user_management_test.Test_Cases
{
    public class UserMasterTestCases
    {

        readonly UserController _controller;
        readonly UserMasterRepo _service;
        public IConfiguration Configuration { get; }
        public string ConnectionString { get; }
        private readonly Context _context;
        public UserMasterTestCases()
        {

            Configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            ConnectionString = Configuration.GetValue<string>("ConnectionStrings:TestConnection");
            _context = new Context(ConnectionString);
            _service = new UserMasterRepo(Configuration,_context);
            _controller = new UserController(_service);

        }

        // Controller Test Cases
        [Fact]
        public async Task GetUser_WhenCalled_ReturnsOkResult()
        {
            // Act
            var okResult = await _controller.GetUser();

            // Assert
            Assert.IsType<OkObjectResult>(okResult);
        }


        //Repo testcases
        [Fact]
        public async Task ShouldReturnUsersList_When_CalledGetUser()
        {
            var result = await _service.GetUser();


            Assert.NotEqual(result, null);
        }


    }
}
