-- Database - collection of data
-- sql - structured query language
-- sql is like set of instructions - language
-- mysql - is like following that instructions to perform crud - speaking that language
-- relational db - stores in tables -> rows and columns

/* */ -- multiline comment
-- -> single line comment

-- datatypes
-- character - CHAR(10), VARCHAR(100)
-- CHAR - fixed
-- VARCHAR - dynamic

SHOW DATABASES; -- show all the database

CREATE DATABASE sqlDB; -- create new db

-- delete db
DROP DATABASE sqlDB; 
DROP SCHEMA sqlDB;
DROP SCHEMA if exists sqlDB; -- gives warning instead of error

-- select and use the db
USE sqlDB;

primary key - unique identified

CREATE TABLE student(
	Id INT PRIMARY KEY,
    Name VARCHAR(30),
    GPA DECIMAL(3,2)
);

DESCRIBE student; -- describes table

DROP TABLE student; -- delete table

-- add new column
ALTER TABLE student ADD department VARCHAR(10); or
ALTER TABLE student ADD COLUMN department VARCHAR(10);

-- drop column
ALTER TABLE student DROP department; or
ALTER TABLE student DROP COLUMN department;

-- insert to table
INSERT INTO student VALUES(1, "Sanga", 7.4);
INSERT INTO student VALUES(2, "Santha", 7.8);
INSERT INTO student VALUES(3, "Nattu", 8.2);
INSERT INTO student VALUES(4, "Virat", 8.3), (5, "Mahi", 8.5), (6, "Sachin", 9.1);
INSERT INTO student(Id,Name) VALUES(7, "Messi");

-- read the stored data
SELECT * FROM student;

SELECT Id, Name from student;

-- filtering & condition - WHERE

CREATE TABLE employee(
	Employee_ID INT PRIMARY KEY,
    Employee_Name VARCHAR(30),
    Employee_Job_Description VARCHAR(15),
    Employee_Salary INT
);

INSERT INTO employee VALUES
(1,  'Ram',     'ADMIN',    1000000),
(2,  'Harini',  'MANAGER',  2500000),
(3,  'George',  'SALES',    2000000),
(4,  'Ramya',   'SALES',    1300000),
(5,  'Meena',   'HR',       2000000),
(6,  'Ashok',   'MANAGER',  3000000),
(7,  'Abdul',   'HR',       2000000),
(8,  'Ramya',   'ENGINEER', 1000000),
(9,  'Raghu',   'CEO',      8000000),
(10, 'Arvind',  'MANAGER',  2800000),
(11, 'Akshay',  'ENGINEER', 1000000),
(12, 'John',    'ADMIN',    2200000),
(13, 'Abinaya', 'ENGINEER', 2100000);

SELECT * FROM employee;

SELECT * FROM employee
WHERE Employee_Salary > 2000000;

SELECT * FROM employee
WHERE Employee_Job_Description != "Manager";

SELECT * FROM employee
WHERE Employee_Name = "Ramya";

SELECT Employee_ID, Employee_Name FROM employee
WHERE Employee_Job_Description = "Engineer";

SELECT * FROM employee
WHERE Employee_Salary > 2000000 AND Employee_Job_Description = "Engineer";

SELECT * FROM employee
WHERE Employee_Job_Description = "Engineer" OR Employee_Job_Description = "Sales";

SELECT * FROM employee
WHERE Employee_Job_Description IN ("Engineer", "Sales");

SELECT * FROM employee
WHERE Employee_Job_Description NOT IN ("Engineer", "Sales");

SELECT * FROM employee
WHERE Employee_Salary BETWEEN 2000000 AND 2500000;

SELECT * FROM employee
LIMIT 5;

-- LIKE
-- WILDCARDS -> filters starting or ending with character or number

-- employee starting with A or a
SELECT * FROM employee
WHERE Employee_Name LIKE 'A%';

-- employee starting with A and ending with A
SELECT * FROM employee
WHERE Employee_Name LIKE 'A%A';

-- employee if has 'i' in his name in middle
SELECT * FROM employee
WHERE Employee_Name LIKE '%i%';

-- employee if has 'i' in his 3 char in name
SELECT * FROM employee
WHERE Employee_Name LIKE '__i%';

-- employee if has '%' in his char in name
SELECT * FROM employee
WHERE Employee_Name LIKE '__i\%';


-- update

-- updates full table job_desc column to analyst
UPDATE employee
SET Employee_Job_Description = "Analyst";

-- updates table job_desc column engineer to analyst
UPDATE employee
SET Employee_Job_Description = "Analyst"
WHERE Employee_Job_Description = "Engineer";

-- delete
DELETE FROM employee
WHERE Employee_ID = 12;


-- distinct - unique

SELECT DISTINCT Employee_Job_Description
FROM employee;

SELECT DISTINCT Employee_Name
FROM employee;


-- order by - order change dynamically

-- alphabetical order
SELECT * FROM employee
ORDER BY Employee_Name;

-- ascending order
SELECT * FROM employee
ORDER BY Employee_Salary;

-- descending order
SELECT * FROM employee
ORDER BY Employee_Salary DESC;

-- ascending order(two columns)
SELECT * FROM employee
ORDER BY Employee_Salary, Employee_Name;

-- ascending order(two columns)
SELECT * FROM employee
WHERE Employee_Job_Description = "Manager"
ORDER BY Employee_Salary;

-- custom order
SELECT * FROM employee
ORDER BY ( CASE Employee_Job_Description 
WHEN 'CEO' THEN 1
WHEN 'MANAGER' THEN 2
WHEN 'HR' THEN 3
WHEN 'ANALYST' THEN 4
WHEN 'SALES' THEN 5
ELSE 100 END
), Employee_Name;


-- functions

-- agggregate fnc
SELECT COUNT(*) FROM employee; -- total row(employees) count

-- total manager count
SELECT COUNT(*) total_no_of_mangers FROM employee 
WHERE Employee_Job_Description = "Manager"; 

-- manager average salary
SELECT AVG(Employee_Salary) manager_avg_salary FROM employee 
WHERE Employee_Job_Description = "Manager"; 

SELECT AVG(Employee_Salary) AS Analyst_Avg_Salary
FROM employee
WHERE Employee_Job_Description = 'Analyst';

SELECT Employee_Job_Description, AVG(Employee_Salary) AS Employee_Salary
FROM employee
WHERE Employee_Job_Description =  "Analyst";

-- all analyst total salary
SELECT SUM(Employee_Salary) total_salary FROM employee 
WHERE Employee_Job_Description = "Analyst";

-- max salary in table
SELECT MAX(Employee_Salary) FROM employee;

-- min salary in table
SELECT MIN(Employee_Salary) FROM employee;

-- string fnc

-- convert uppercase
SELECT UCASE(Employee_Name) Employee_Name, Employee_Salary 
FROM employee;

-- character length
SELECT Employee_Name, CHAR_LENGTH(Employee_Name) char_count
FROM employee;

-- prefix ₹ add and format 
SELECT Employee_Name, CONCAT('₹', FORMAT(Employee_Salary,0)) Employee_Salary
FROM employee;

-- limit characters
SELECT Employee_Name, LEFT(Employee_Job_Description,2) Job_description
FROM employee;

SELECT Employee_Name, UCASE(LEFT(Employee_Job_Description,2)) Job_description
FROM employee;


-- Date
ALTER TABLE employee ADD COLUMN Hire_Date DATE;

UPDATE employee
SET Hire_Date = "2025-12-28";

UPDATE employee
SET Hire_Date = "2025-12-27"
WHERE Employee_Job_Description = "ADMIN";

-- currentime
SELECT NOW(); -- date with time stamp
SELECT DATE(NOW()); -- only date
SELECT CURDATE(); -- only date

SELECT DATE_FORMAT(CURDATE(),"%d/%m/%y") Date; -- '28/12/25'
SELECT DATE_FORMAT(CURDATE(),"%d/%m/%y") AS Date; -- alias - '28/12/25'
SELECT DATEDIFF(CURDATE(),"2025/12/24") AS Difference;
SELECT DATE_ADD(CURDATE(), INTERVAL 1 DAY) AS After1day; -- after 1 day


-- groupby

-- group by average salary for job description
SELECT Employee_Job_Description, AVG(Employee_Salary) AS Employee_Salary
FROM employee
GROUP BY Employee_Job_Description;

-- group by Total Count Each job description
SELECT Employee_Job_Description, COUNT(Employee_ID) AS TotalCountEach
FROM employee
GROUP BY Employee_Job_Description;

-- group by Total Count Each job description and further filtering it (using HAVING)
-- WHERE - filter rows
-- HAVING - filter groups
SELECT Employee_Job_Description, COUNT(Employee_ID) AS TotalCountEach
FROM employee
GROUP BY Employee_Job_Description
HAVING COUNT(Employee_ID) > 1
ORDER BY Employee_Job_Description;

eg: salary > 1500000
SELECT Employee_Job_Description, COUNT(Employee_ID) AS TotalCountEach
FROM employee
WHERE Employee_Salary > 1500000
GROUP BY Employee_Job_Description
HAVING COUNT(Employee_ID) > 1
ORDER BY Employee_Job_Description;

-- constraints
CREATE TABLE employee(
	Employee_ID INT PRIMARY KEY AUTO_INCREMENT,
    Employee_Name VARCHAR(30) NOT NULL,
    Employee_Job_Description VARCHAR(15) DEFAULT 'unassigned',
    Employee_Salary INT,
    pan VARCHAR(10) UNIQUE,
    CHECK (Employee_Salary > 10000)
);

INSERT INTO employee(Employee_Name, Employee_Salary) VALUES ("Sanga", 30000);
-- INSERT INTO employee(Employee_Name, Employee_Salary) VALUES ("Santha", 200); -- error
INSERT INTO employee(Employee_Name, Employee_Salary) VALUES ("Santha", 50000);

-- add not null constraint
ALTER TABLE employee
MODIFY Employee_Name VARCHAR(30) NOT NULL;

-- drop not null constraint
ALTER TABLE employee
MODIFY Employee_Name VARCHAR(30);

-- add default constarint
ALTER TABLE employee
ALTER Employee_Job_Description SET DEFAULT 'unassigned';

-- drop default constraint
ALTER TABLE employee
ALTER Employee_Job_Description DROP DEFAULT;

-- add check constraint
ALTER TABLE employee
ADD CHECK (Employee_Salary > 100000);

-- add constraint name
ALTER TABLE employee
ADD CONSTRAINT checkSalary CHECK (Employee_Salary > 100000);

-- drop check constraint
ALTER TABLE employee
DROP CHECK checkSalary;

ALTER TABLE employee
DROP CONSTRAINT checkSalary;
-- foreign key - it connects 2 tables
-- A foreign key is a column that references the primary key of another table

CREATE TABLE branch (
branch_id INT PRIMARY KEY AUTO_INCREMENT,
br_name VARCHAR(30) NOT NULL,
addr VARCHAR(200)
);

INSERT INTO branch (br_name, addr) VALUES
('Downtown Branch', '12 Main Street, City Center'),
('North Branch', '45 North Avenue, Uptown Area'),
('East Branch', '78 Sunrise Road, East District');

SELECT * FROM branch;

ALTER TABLE employee 
ADD Branch_id INT,
ADD CONSTRAINT fk_branchId 
FOREIGN KEY(Branch_id) REFERENCES branch(branch_id);

ALTER TABLE employee
DROP FOREIGN KEY fk_branchId;

UPDATE employee SET Branch_id = 1 WHERE Employee_ID IN (1,2,3,12);
UPDATE employee SET Branch_id = 2 WHERE Employee_ID IN (4,5,7,9);
UPDATE employee SET Branch_id = 3 WHERE Employee_ID IN (6,8,10,11,13);


-- index
-- MySQL uses a B-Tree–based index structure, specifically a B+-Tree, to implement indexes.
-- Primarykey, foreign key, unique - automatically it takes indexing

SHOW INDEX FROM employee; -- show all index

CREATE INDEX name_index ON employee(Employee_Name); -- create index

ALTER TABLE employee ADD INDEX name_index (Employee_Name); -- create index
ALTER TABLE employee DROP INDEX name_index; -- delete index


-- on delete
-- CASCADE - on deleting a row in branch table, the corresponding entries in employee table will be deleted
-- NULL - on deleting a row in branch table, the branchid corresponding entries in employee table will be made null

CREATE TABLE employee (
emp_id INT PRIMARY KEY AUTO_INCREMENT,
ename VARCHAR(30) NOT NULL,
job_desc VARCHAR(20),
salary INT,
branch_id INT,
CONSTRAINT FK_branchId FOREIGN KEY(branch_id) REFERENCES branch(branch_id) 
ON DELETE CASCADE
-- ON DELETE SET NULL
);

DELETE FROM branch WHERE branch_id = 2;


-- joins
-- JOINs are used to combine rows from two or more tables using a common column (usually a primary key ↔ foreign key).

-- inner join - filters and show only satisfied condition data
SELECT employee.emp_id, employee.ename, employee.job_desc, branch.br_name
FROM employee
JOIN branch -- JOIN or INNER JOIN
ON employee.branch_id = branch.branch_id
ORDER BY employee.emp_id;

-- left join - filters and show satisfied condition data and includes extra rows left table data also
SELECT employee.emp_id, employee.ename, employee.job_desc, branch.br_name
FROM employee -- left table (since we gave as first)
LEFT JOIN branch -- right table
ON employee.branch_id = branch.branch_id
ORDER BY employee.emp_id;

-- right join - filters and show satisfied condition data and includes extra rows right table data also
SELECT employee.emp_id, employee.ename, employee.job_desc, branch.br_name
FROM employee -- left table (since we gave as first)
RIGHT JOIN branch -- right table
ON employee.branch_id = branch.branch_id
ORDER BY employee.emp_id;

-- alias name
SELECT e.emp_id, e.ename, e.job_desc, b.br_name
FROM employee AS e
JOIN branch AS b
ON e.branch_id = b.branch_id
ORDER BY e.emp_id;


