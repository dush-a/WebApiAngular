using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SimpleAngularServiceApp.Controllers
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
    }
    public class ProductAPIController : ApiController
    {

        [HttpGet]
        public IList<Product> GetProducts()
        {
            List<Product> p = new List<Product>() { new Product {ProductName ="abc", Id = 1, Description = "Desc 1" },
                                                    new Product {ProductName ="def", Id = 2, Description = "Desc 2" },
                                                    new Product {ProductName ="ghi", Id = 3, Description = "Desc 3" } };
            return p; //.AsQueryable();
            //return db.GetAll().AsQueryable();
        }

        // GET api/values
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
