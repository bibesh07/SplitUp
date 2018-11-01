using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SplitUp.Web.Services
{
    public interface ICreditService
    {
        void InsertCreditors(int transactionId, int userId, String creditorEmail);

        double GetAmountToPay(int UserId);
    }
}
