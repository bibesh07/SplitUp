using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using SplitUp.Core.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SplitUp.Web.Data
{
    public class DataContext : DbContext
    {
        //constructor
        public DataContext() { }

        public DataContext(IDbContextOptions options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //Server=(localdb)\\mssqllocaldb;Database=SplitUp;Trusted_Connection=True
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SplitUp;Trusted_Connection=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    FullName = "Bibesh KC",
                    Password = "bafal123",
                    Email = "bibesh.kc@selu.edu",
                    Gender = 'M',
                    Token = Guid.NewGuid().ToString(),
                });
        }
    }
}
