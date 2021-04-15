using OS_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OS_Repo
{
    public interface ILogin
    {
        Login ValidateUser(string UserName, string Password);
    }
}
