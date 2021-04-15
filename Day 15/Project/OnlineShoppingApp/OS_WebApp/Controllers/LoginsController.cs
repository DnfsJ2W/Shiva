using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OS_DAL.Models;
using OS_Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OS_WebApp.Controllers
{
    public class LoginsController : Controller
    {
        private readonly ILogin abc;

        public LoginsController(ILogin login)
        {
            this.abc = login;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(Login login)
        {
            Login l = abc.ValidateUser(login.UserName, login.Password);


            if (l == null)
            {
                ViewBag.ErrorMessage = "Invalid UserName and Password";
                return View(login);
            }
            else
            {
                HttpContext.Session.SetString("UserName", login.UserName);
                //Session["Username"] = login.UserName;
                return RedirectToAction("EmpPage");
            }
        }
        public IActionResult EmpPage()
        {
            return View();
        }
    }
}
