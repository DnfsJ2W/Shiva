using NUnit.Framework;

using System.IO;
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestProject1
{
    public class Tests
    {
        [TestClass]
        public class UnitTest1
        {
            private const string Expected = "Hello World!";
            [TestMethod]
            public void TestMethod1()
            {
                using (var sw = new StringWriter())
                {
                    Console.SetOut(sw);
                    JenkinsDemo.Program.Main();

                    var result = sw.ToString().Trim();
                    Microsoft.VisualStudio.TestTools.UnitTesting.Assert.AreEqual(Expected, result);
                }
            }
        }
    }
}