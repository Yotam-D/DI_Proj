-- -- Create a table named Book, with the columns : id, title NOT NULL, author NOT NULL

-- CREATE TABLE Book (
-- id SERIAL primary key,
-- title varchar(100) NOT NULL,
-- author varchar(100) NOT NULL
-- )


-- -- Insert those books :
-- -- Alice In Wonderland, Lewis Carroll
-- -- Harry Potter, J.K Rowling
-- -- To kill a mockingbird, Harper Lee
-- INSERT INTO Book (title,author)
-- Values 
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')



-- -- Create a table named Student, with the columns : id, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
-- CREATE TABLE Student (
-- id SERIAL primary key,
-- name varchar(100) NOT NULL UNIQUE,
-- age smallint NOT NULL
-- 	Check(age <= 15)
-- )



-- -- Insert those students:
-- -- John, 12
-- -- Lera, 11
-- -- Patrick, 10
-- -- Bob, 14

-- INSERT INTO Student (name,age)
-- Values 
-- ('John', 12),
-- ('Lera',11),
-- ('Patrick',10),
-- ('Bob', 14)



-- -- Create a table named Library, with the columns :
-- -- book_id ON DELETE CASCASE ON UPDATE CASCADE
-- -- student_id ON DELETE CASCASE ON UPDATE CASCADE
-- -- borrowed_date
-- -- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- CREATE TABLE Library (
-- book_id integer,
-- student_id integer,
-- borrowed_date Date,
-- FOREIGN KEY (book_id) REFERENCES book(id) ON DELETE CASCADE ON UPDATE CASCADE,
-- FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE CASCADE ON UPDATE CASCADE
-- )



-- -- Add 4 records in the junction table, use subqueries.
-- -- the student named John, borrowed the book Alice in Wonderland on the 15/02/2022
-- -- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- -- the student named Lera, borrowed the book Alice in Wonderland on the 23/05/2021
-- -- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

-- INSERT INTO Library (book_id, student_id, borrowed_date)
-- values
-- ((select id from book where title = 'Alice In Wonderland'),(select id from student where name = 'John'), '2022-02-15'),
-- ((select id from book where title = 'To kill a mockingbird'),(select id from student where name = 'Bob'), '2021-03-03'),
-- ((select id from book where title = 'Alice In Wonderland'),(select id from student where name = 'Lera'), '2021-05-23'),
-- ((select id from book where title = 'Harry Potter'),(select id from student where name = 'Bob'), '2021-08-12')



-- -- Display the data
-- -- Select all the columns from the junction table
-- Select * from library

-- -- Select the name and title of the borrowed books
-- Select  student.name, book.title, borrowed_date
-- from book 
-- inner join library on book.id =  library.book_id 
-- inner join student on library.student_id = student.id

-- -- Select the average age of the children, that borrowed the book Alice in Wonderland
-- Select avg(age) as avarageAge from student
-- inner join library on student.id = library.student_id
-- inner join book on library.book_id = book.id 
-- where library.book_id = (select book.id from book where title = 'Alice In Wonderland')


-- -- Delete a student from the Student table, what happened in the junction table ? Also deleted rows that included the deleted student id.
-- delete from student 
-- where name = 'John'



