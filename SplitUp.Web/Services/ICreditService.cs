using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SplitUp.Web.Services
{
    public interface ICreditService
    {
        void InsertCreditors(Credit details, String CreditorEmail);

        double GetAmountToPay(int UserId);

        void DeleteCreditors(int transactionId);

        IEnumerable<Credit> GetCreditorsByTransaction(int transactionId);

        void UpdateCreditorTransaction(int transactionId, int creditorId);
    }
}
