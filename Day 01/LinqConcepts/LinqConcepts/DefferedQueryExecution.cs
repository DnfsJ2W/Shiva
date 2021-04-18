using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqConcepts
{
    class DefferedQueryExecution
    {
        static void Main()
        {
            string[] trainees = new string[4] { "scott", "lauren", "ben", "Mac" };


            //names is a LINQ query variable

            var names = from t in trainees
                        select t;

            Console.Write("Trainees list - 1: ");
            foreach (string t in names)
            {
                Console.Write(" " + t);
            }

            trainees[1] = "Matt";
            trainees[2] = "Mounica";

            Console.Write("\nTrainees list - 2: ");

            foreach (string t in names)
            {
                Console.Write(" " + t);
            }

            Console.ReadLine();
        }

    }
}
