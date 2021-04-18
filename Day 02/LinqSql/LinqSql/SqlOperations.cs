using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqSql
{
    class SqlOperations
    {
        LinqSQLDataContext db = new LinqSQLDataContext();

        public void Select()
        {
            IList<Employee> emp = db.Employees.ToList();
            if (emp == null)
                throw new Exception("Employees does not exist");
            else
            {
                foreach (Employee e in emp)
                {
                    Department department = db.Departments.Where(d => d.DepartmentId == e.DeptId).SingleOrDefault();
                    Console.WriteLine(" Employee Id: {0} \n Employee Name: {1} \n Employee Salary: {2} \n Department: {3}", e.EmpId, e.EmpName, e.Salary, department.DepartmentName);
                    Console.WriteLine("----------------------------------");
                }
            }
        }

        public void Select(int Id)
        {
            try
            {
                Employee e = db.Employees.Where(emp => emp.EmpId == Id).FirstOrDefault();
                if (e == null)
                    throw new Exception("Employee does not exist");
                else
                {
                    Department department = db.Departments.Where(d => d.DepartmentId == e.DeptId).SingleOrDefault();

                    Console.WriteLine(" Employee Id: {0} \n Employee Name: {1} \n Employee Salary: {2} \n Department: {3}", e.EmpId, e.EmpName, e.Salary, department.DepartmentName);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
        public void Select(string EName)
        {
            try
            {
                Employee e = db.Employees.Where(emp => emp.EmpName == EName).FirstOrDefault();
                if (e == null)
                    throw new Exception("Employee does not exist");
                else
                {
                    Department department = db.Departments.Where(d => d.DepartmentId == e.DeptId).SingleOrDefault();

                    Console.WriteLine(" Employee Id: {0} \n Employee Name: {1} \n Employee Salary: {2} \n Department: {3}", e.EmpId, e.EmpName, e.Salary, department.DepartmentName);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
        public void Insert(int Id, string Name, decimal Salary, string Department)
        {
            Department department = db.Departments.Where(d => d.DepartmentName == Department).SingleOrDefault();
            Employee emp = new Employee() { EmpId = Id, EmpName = Name, Salary = Salary, DeptId = department.DepartmentId };

            db.Employees.InsertOnSubmit(emp);
            db.SubmitChanges();
        }

        public void Update(int Id, string Name, decimal Salary)
        {
            try
            {
                Employee employee = db.Employees.Where(e => e.EmpId == Id).FirstOrDefault();
                if (employee == null)
                    throw new Exception("Employee does not exist");
                else
                {
                    employee.EmpName = Name;
                    employee.Salary = Salary;

                    db.SubmitChanges();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public void Delete(int Id)
        {
            Employee employee = db.Employees.Where(e => e.EmpId == Id).FirstOrDefault();

            db.Employees.DeleteOnSubmit(employee);
            db.SubmitChanges();
        }

        public void DataRead(int Value, out int Id, out string Name, out decimal Salary, out string Department)
        {
            Id = 0;
            Name = null;
            Salary = 0;
            Department = null;
            try
            {
                switch (Value)
                {
                    case 1:
                        break;
                    case 2:
                        Console.WriteLine("Enter Employee Id: ");
                        Id = int.Parse(Console.ReadLine());
                        break;
                    case 3:
                        Console.WriteLine("Enter Employee Name: ");
                        Name = Console.ReadLine();
                        break;
                    case 4:
                        Console.WriteLine("Enter Employee Id");
                        Id = int.Parse(Console.ReadLine());
                        Console.WriteLine("Enter Employee Name: ");
                        Name = Console.ReadLine();
                        Console.WriteLine("Enter Employee Salary: ");
                        Salary = decimal.Parse(Console.ReadLine());
                        Console.WriteLine("Enter Employee Department Name: ");
                        Department = Console.ReadLine();
                        break;
                    case 5:
                        Console.WriteLine("Enter Employee Id to Update Name and Salary");
                        Id = int.Parse(Console.ReadLine());
                        Console.WriteLine("Enter Employee Name: ");
                        Name = Console.ReadLine();
                        Console.WriteLine("Enter Employee Salary: ");
                        Salary = decimal.Parse(Console.ReadLine());
                        break;
                    case 6:
                        Console.WriteLine("Enter Employee Id");
                        Id = int.Parse(Console.ReadLine());
                        break;
                }
            }
            catch (FormatException e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
