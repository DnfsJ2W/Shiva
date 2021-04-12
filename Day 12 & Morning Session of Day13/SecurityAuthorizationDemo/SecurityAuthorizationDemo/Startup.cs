using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SecurityAuthorizationDemo.Startup))]
namespace SecurityAuthorizationDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
