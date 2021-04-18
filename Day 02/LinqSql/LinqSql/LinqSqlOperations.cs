using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqSql
{
    class LinqSqlOperations
    {
        static void Main()
        {
            int Option;

            SqlOperations sqlOperations = new SqlOperations();

        CheckAgain:

            Console.WriteLine("Select following Operations: \nEnter 1 to Select All Employees " +
                "\nEnter 2 to Select By Employee Id \nEnter 3 to Select By Employee Name" +
                "\nEnter 4 to Insert Employee \nEnter 5 to Update Employee \nEnter 6 to Delete Employee");
            try
            {
                try
                {
                    Option = int.Parse(Console.ReadLine());
                    sqlOperations.DataRead(Option, out int Id, out string Name, out decimal Salary, out string Department);
                }
                catch(FormatException e)
                {
                    Console.WriteLine("Please Enter Number only from above options: " + e.Message);
                }
                

                switch (Option)
                {
                    case 1:
                        sqlOperations.Select();
                        break;
                    case 2:
                        if (Id != 0)
                        {
                            sqlOperations.Select(Id);
                        }
                        break;
                    case 3:
                        if (Name != null)
                        {
                            sqlOperations.Select(Name);
                        }
                        break;
                    case 4:
                        if (Id != 0 && Name != null && Salary != 0 && Department != null)
                        {
                            sqlOperations.Insert(Id, Name,Salary,Department);
                        }
                        break;
                    case 5:
                        if (Id != 0 && Name != null && Salary != 0)
                        {
                            sqlOperations.Update(Id, Name, Salary);
                        }
                        break;
                    case 6:
                        if (Id != 0)
                        {
                            sqlOperations.Delete(Id);
                        }
                        break;
                }
                Console.WriteLine("Enter 'yes' to do SQL Operations");
                if (Console.ReadLine() == "yes")
                {
                    goto CheckAgain;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

        }
    }
}
