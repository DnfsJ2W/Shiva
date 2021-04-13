using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SecurityInCoreDemo.Areas.Customer.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }

        public string CustomerName { get; set; }
        public string Location { get; set; }
    }
}
