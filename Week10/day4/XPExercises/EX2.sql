-- select * from customer

-- select (first_name, last_name) as full_name from customer

-- select distinct create_date from customer

-- select * from customer order by first_name desc

-- select film_id,title,description,release_year,rental_rate 
-- from film order by rental_rate asc

-- select address, phone, district 
-- from address where district like '%Texas%'

-- select * 
-- from film where film_id = 15 or film_id = 150

-- select film_id,title,description,length,rental_rate 
-- from film 
-- where title ='The Prestige'

-- select film_id,title,description,length,rental_rate 
-- from film 
-- where title like 'Th%'

-- select film_id,title,description,length,rental_rate 
-- from film 
-- order by rental_rate asc
-- limit 10

-- select film_id,title,description,length,rental_rate 
-- from film 
-- order by rental_rate asc
-- offset 10 rows
-- fetch next 10 rows only

-- select first_name,last_name, public.customer.customer_id, amount,payment_date
-- from customer join public.payment on public.customer.customer_id = public.payment.customer_id


-- select distinct public.film.film_id, title,description,length,rental_rate 
-- from film 
-- left join public.inventory on film.film_id = public.inventory.film_id
-- where public.inventory.film_id is null

-- select distinct city,  country
-- from public.city
-- join country on public.city.country_id = public.country.country_id


-- select public.customer.customer_id, first_name, last_name, amount, payment_date, staff_id
-- from customer
-- join public.payment on public.customer.customer_id = public.payment.customer_id
-- order by staff_id asc



