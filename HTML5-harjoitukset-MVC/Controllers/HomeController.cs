using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTML5_harjoitukset_MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Palstat()
        {
            return View();
        }

        public ActionResult Lomake()
        {
            return View();
        }

        public ActionResult DOM()
        {
            return View();
        }

        public ActionResult EventTrad()
        {
            return View();
        }

        public ActionResult EventMod()
        {
            return View();
        }

        public ActionResult JQuery()
        {
            return View();
        }

        public ActionResult Geo()
        {
            return View();
        }

        public ActionResult GeoGoogle()
        {
            return View();
        }

        public ActionResult GeoW3Sc()
        {
            return View();
        }

        public ActionResult GeoGoogleUusi()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}