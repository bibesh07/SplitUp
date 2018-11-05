using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SplitUp.Core.Models.Transaction;
using SplitUp.Web.Services;

namespace SplitUp.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditController : ControllerBase
    {
        private readonly ICreditService _creditService;

        private readonly IUserService _userService;

        public CreditController(ICreditService creditService, IUserService userService)
        {
            _creditService = creditService;
            _userService = userService;
        }

        [HttpGet("GetCreditorsByTransaction/{transactionId}")]
        public IActionResult GetCreditorsByTransaction(int transactionId) {
            var creditors = _creditService.GetCreditorsByTransaction(transactionId);
            
            //foreach(var credit in creditors)
            //{
            //    billDetail.NoOfIndividuals = credit.Transaction.NoOfIndividuals
            //}
            return Ok(creditors);
        }
    }
}