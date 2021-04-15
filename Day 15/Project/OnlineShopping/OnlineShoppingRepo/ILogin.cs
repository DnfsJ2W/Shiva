using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnlineShopping_DAL;

namespace OnlineShoppingRepo
{
    public interface ILogin
    {
        Login ValidateUser(string UserName, string Password);

    }
}
