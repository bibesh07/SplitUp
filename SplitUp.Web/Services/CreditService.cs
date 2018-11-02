using SplitUp.Web.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SplitUp.Web.Services
{
    public class CreditService : ICreditService
    {
        private readonly DataContext _dataContext;

        private readonly IUserService _userService;

        public CreditService(DataContext dbContext, IUserService userService)
        {
            _dataContext = dbContext;
            _userService = userService;
        }

        public void InsertCreditors(Credit details, string creditorEmail)
        {
            details.CreditorId = _userService.GetUserByEmail(creditorEmail).Id;
             
            _dataContext.Add(details);
            _dataContext.SaveChanges();
        }

        public double GetAmountToPay(int UserId) => _dataContext.Creditors.Where(u => u.CreditorId == UserId && u.Status == 0).Sum(t => t.AmountToPay);
    }
}
