using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqConcepts
{
    class LINQToDataSet1
    {
        static void Main(string[] args)
        {
            SqlConnection conn = new SqlConnection(@"server=(localdb)\mssqllocaldb;Database=MyDB;integrated Security=true;");
            SqlDataAdapter adpt = new SqlDataAdapter("select * from Employee", conn);
            DataSet ds = new DataSet();
            adpt.Fill(ds, "Emp");

            DataTable datatable = ds.Tables["Emp"];
            var dtable = datatable.AsEnumerable(); // because DataTable does not implement any IEnumerable<T> interface
                                                   // we have to invoke AsEnumerable() method.
            var query = from emp in dtable
                        orderby emp["Salary"].ToString() descending
                        select emp;

            foreach (var e in query)
            {
                DataRow row = (DataRow)e;
                Console.WriteLine("{0,-4}{1, -13}{2, -6}", row["EmpId"], row["EmpName"], row["Salary"]);
            }

            Console.ReadLine();
        }

    }
}
