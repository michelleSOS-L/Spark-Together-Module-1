# Write your MySQL query statement below
# Steps:
# Get table of salaries accomodated by department and ordered by salary with the rank column (dense_rank)
# Retrieve the employees in that table that are in the top 3 unique earners

SELECT Department.Name AS "Department", employees.Name AS "Employee", employees.Salary AS "Salary" FROM
(SELECT DepartmentId, Name, Salary, DENSE_RANK() OVER(PARTITION BY DepartmentId ORDER BY Salary DESC) AS ranking FROM Employee) employees
JOIN Department ON employees.DepartmentId = Department.Id
Where ranking <= 3