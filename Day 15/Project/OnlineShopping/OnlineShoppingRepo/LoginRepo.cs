using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnlineShopping_DAL;

namespace OnlineShoppingRepo
{
    public class LoginRepo : ILogin
    {
        MyDBEntities db = new MyDBEntities();
        public Login ValidateUser(string UserName, string Password)
        {
            Login login = db.Logins.FirstOrDefault(a => a.UserName == UserName && a.Password == Password);
            return login;
        }
    }
}
