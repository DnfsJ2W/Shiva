CREATE TABLE [dbo].[Employee] (
    [EmpId]   INT          NOT NULL,
    [EmpName] VARCHAR (50) NULL,
    [Salary]  MONEY        NULL,
    DeptId int Foreign key references Department(DepartmentId) NOT NULL,
    PRIMARY KEY CLUSTERED ([EmpId] ASC)
);

CREATE TABLE Department (
    DepartmentId INT NOT NULL,
    DepartmentName VARCHAR NOT NULL,
    [Location] VARCHAR NOT NULL,
    PRIMARY KEY CLUSTERED (DepartmentId ASC)
);