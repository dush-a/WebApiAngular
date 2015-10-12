using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SimpleAngularServiceApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult MainView()
        {
            return View("MainView");
        }

        public ActionResult Template(string id)
        {
            switch (id.ToLower())
            {
                case "template1":
                    return PartialView("~/Views/Home/template1.cshtml");
                case "template2":
                    return PartialView("~/Views/Home/template2.cshtml");
                case "template3":
                    return PartialView("~/Views/Home/template3.cshtml");
                default:
                    throw new Exception("template not known");
            }
        }
    }
}
