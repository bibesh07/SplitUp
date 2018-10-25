using System;
using System.Collections.Generic;
using System.Text;

namespace SplitUp.Core.Models.User
{
    public class User
    {
        public int Id { get; set; }

        public String FullName { get; set; }

        public String Email { get; set; }

        public String Password { get; set; }

        public char Gender { get; set; }

        public String Token { get; set; }

    }
}