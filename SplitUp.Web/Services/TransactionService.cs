using Microsoft.EntityFrameworkCore;
using SplitUp.Web.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SplitUp.Web.Services
{
    public class TransactionService : ITransactionService
    {
        private readonly DataContext _dataContext;

        public TransactionService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public int SaveTransaction(Transaction transaction)
        {
            _dataContext.Add(transaction);
            _dataContext.SaveChanges();
            return transaction.Id;
        }

        public double GetAmountToReceive(int userId) =>  _dataContext.Transactions.Where(u => u.UserId == userId).Include(u => u.Creditors)
                                                            .ThenInclude(u => u.AmountToPay).Where(c => c.Creditors.Any(i => i.Status ==1)).Sum(u => u.AmountPaid);

        public IEnumerable<Transaction> GetAllBills(int userId) =>  _dataContext.Transactions.Include(c => c.Creditors).ToList();

        public Transaction SetBillDetails(int transactionId) => _dataContext.Transactions.Include(c => c.Creditors).SingleOrDefault(t => t.Id == transactionId);
    }
}
