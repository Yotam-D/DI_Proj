-- -- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- -- A customer can have only one profile, and a profile belongs to only one customer
-- -- The Customer table should have the columns : id, first_name, last_name NOT NULL

-- CREATE TABLE Customer (
-- id SERIAL primary key,
-- first_name varchar(50) NOT NULL,
-- last_name varchar(50) NOT NULL
-- )


-- -- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

-- CREATE TABLE Customer_profile (
-- id SERIAL primary key,
-- isLoggedIn BOOLEAN DEFAULT false,
-- customer_id integer,
-- FOREIGN KEY (customer_id) References Customer(id)
-- )


-- -- Insert some data, use subqueries
-- INSERT INTO Customer (first_name,last_name)
-- values
-- ('Chen','Ziv'),
-- ('Ami','Stark'),
-- ('John','Dean'),
-- ('Barbara','Stern'),
-- ('Sam','Harris')
-- INSERT INTO Customer_profile (isLoggedIn,customer_id)
-- values
-- ('true',3),
-- ('false', 2),
-- ('false',5),
-- ('false', 1),
-- ('true',4)


-- -- Use the relevant types of Joins to display:
-- -- The first_name of the LoggedIn customers
-- Select first_name,isLoggedIn
-- from customer inner join customer_profile on customer.id = customer_profile.customer_id
-- where isLoggedIn = true


-- -- All the customers even if the isLoggedIn column is null
-- UPDATE public.customer_profile
-- SET isLoggedIn = null
-- where customer_id = 4
-- select public.customer.id, first_name, last_name, isLoggedIn
-- from customer left join customer_profile on customer.id = customer_profile.customer_id


-- -- The number of customers that are not LoggedIn
-- select count(*) as notLogged
-- from customer inner join customer_profile on customer.id = customer_profile.customer_id
-- where isLoggedIn = false


