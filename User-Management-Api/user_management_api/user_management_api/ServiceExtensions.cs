using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using user_management_repository.Interface;
using user_management_repository.Repositories;

namespace user_management_api
{
    public static class ServiceExtensions
    {

        public static IServiceCollection RegisterServices(
            this IServiceCollection services)
        {
            // Add all other services here.
            services.AddTransient<IUserMaster,UserMasterRepo>();

            return services;
        }

        public static void RegisterSingleTone(this IServiceCollection services, IConfiguration config)
        {
            services.AddSingleton<IConfiguration>(config);
        }
    }
}

