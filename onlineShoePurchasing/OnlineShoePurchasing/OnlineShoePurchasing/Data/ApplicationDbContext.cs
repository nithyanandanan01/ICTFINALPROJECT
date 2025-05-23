using Microsoft.EntityFrameworkCore;
using OnlineShoePurchasing.Models;

namespace OnlineShoePurchasing.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Logindetails> logindetails { get; set; }
        public DbSet<Shoesdetails> Shoesdetails { get; set; }
        public DbSet<shoeorderDetail> shoeorderDetails { get; set; }

    }
}
