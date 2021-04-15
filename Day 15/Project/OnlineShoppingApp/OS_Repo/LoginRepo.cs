using OS_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OS_Repo
{
    public class LoginRepo : ILogin
    {
        MyDBContext db = new MyDBContext();
        public Login ValidateUser(string UserName, string Password)
        {
            Login login = db.Logins.FirstOrDefault(a => a.UserName == UserName && a.Password == Password);
            return login;
        }
    }
}
