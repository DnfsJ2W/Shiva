using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SecurityInCoreDemo.Areas.Admin.Models;
using SecurityInCoreDemo.Areas.Customer.Models;
using SecurityInCoreDemo.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SecurityInCoreDemo.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }

    }
}
