using System;
using System.Collections.Generic;

#nullable disable

namespace OS_DAL.Models
{
    public partial class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
    }
}
