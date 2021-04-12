using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SecurityAuthorizationDemo.Controllers
{
    [Authorize]
    public class DemoController : Controller
    {
        // GET: Demo
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }

        [Authorize(Users ="Shiva@gmai.com")]
        public ActionResult Page1()
        {
            return View();
        }

        public ActionResult Page2()
        {
            return View();
        }
    }
}