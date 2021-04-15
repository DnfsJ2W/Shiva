using OnlineShopping_DAL;
using OnlineShoppingRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OnlineShopping_WebApp.Controllers
{
    public class LogController : Controller
    {
        private readonly ILogin abc;

        public LogController(ILogin login)
        {
            this.abc = login;
        }

        // GET: Log
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(Login login)
        {
            Login l = abc.ValidateUser(login.UserName, login.Password);
            

            if(l==null)
            {
                ViewBag.ErrorMessage = "Invalid UserName and Password";
                return View(login);
            }
            else
            {
                Session["Username"] = login.UserName;
                return RedirectToAction("EmpPage");
            }

            
        }

        public ActionResult EmpPage()
        {
            return View();
        }

    }
}