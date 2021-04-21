using PromisesDemoInAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PromisesDemoInAngular.Controllers
{
    [RoutePrefix("api/Country")]
    public class CountryController : ApiController
    {
        CountryEntities1 DB = new CountryEntities1();

        [HttpGet]
        [Route("getSearchedCountry/(keyword)")]
        public object getSearchedCountry(string keyword)
        {
            var countryResult = DB.searchCountryByName(keyword).ToList();
            return countryResult;
        }
    }
}
