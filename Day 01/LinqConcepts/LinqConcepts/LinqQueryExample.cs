using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqConcepts
{
    class LinqQueryExample
    {
        static void Main(string[] args)
        {
            int[] arr = { 11, 9, 5, 3, 10, 20, 21, 19, 18, 14, 15, 5, 9, 7 };


            //even is called as range, used to range(iterate) over a list of items
            // arr is the data source called as Sequence

            IEnumerable<int> evens = from e in arr
                        where e % 2 == 0
                        select e;

            arr[0] = 12;

            Console.Write("Evens: ");
            foreach (int n in evens)
            {
                Console.Write(" " + n);
            }

            Console.ReadLine();
        }
    }
    
}
