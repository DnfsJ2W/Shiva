using PromiseAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PromiseAngular.Controllers
{
    [RoutePrefix("api/Countries")]
    [EnableCors("*", "*", "*")]
    public class Countries1Controller : ApiController
    {
        private CountryEntities db = new CountryEntities();

        [HttpGet]
        [Route("GetSearchedCountry/{keyword}")]
        public List<Country> GetSearchedCountry(string keyword)
        {
            var countryResult = db.searchCountryByName(keyword).ToList();
            return countryResult;
        }
    }
}
