-- -- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- update film
-- Set language_id = 2
-- Where film_id in (1,5,9,19)
-- update film
-- Set language_id = 4
-- where film_id in (3,122,91,195)




-- -- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- FK address_id (referenced to address.adress_id), we need to also insert to the address table.


-- -- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking? easy
-- drop table public.customer_review

-- -- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- select count(*)
-- from public.rental
-- where return_date is null

-- -- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- select public.film.film_id, title, rental_rate, return_date
-- from public.film
-- inner join public.inventory on public.film.film_id = public.inventory.film_id
-- inner join public.rental on public.inventory.inventory_id = public.rental.inventory_id
-- where return_date is null
-- order by rental_rate desc
-- limit 30

-- -- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- -- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe. - Park Citizen
-- select public.film.film_id, title, description, first_name, last_name
-- from public.film
-- inner join public.film_actor on public.film.film_id = public.film_actor.film_id
-- inner join public.actor on public.film_actor.actor_id = public.actor.actor_id
-- Where description like '%Sumo%' AND first_name = 'Penelope' and last_name = 'Monroe'


-- -- The 2nd film : A short documentary (less than 1 hour long), rated “R”. - Crossing Divorce
-- select public.film.film_id, title, description, length, rating
-- from public.film
-- Where description like '%Documentary%' AND length < 60 AND rating = 'R'

-- -- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.99 for the rental, and he returned it between the 28th of July and the 1st of August, 2005. - Sugar Wonka
-- select public.film.film_id, title, description, first_name, last_name, rental_rate, return_date
-- from public.film
-- inner join public.inventory on public.film.film_id = public.inventory.film_id
-- inner join public.rental on public.inventory.inventory_id = public.rental.inventory_id
-- inner join public.customer on public.rental.customer_id = public.customer.customer_id
-- Where first_name='Matthew' AND last_name = 'Mahan'AND rental_rate = 4.99 AND return_date BETWEEN '07-28-2005' AND '08-01-2005' 


-- -- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace. - Stone Fire or Money Harold
select public.film.film_id, title, description, first_name, last_name, replacement_cost
from public.film
inner join public.inventory on public.film.film_id = public.inventory.film_id
inner join public.rental on public.inventory.inventory_id = public.rental.inventory_id
inner join public.customer on public.rental.customer_id = public.customer.customer_id
Where first_name='Matthew' AND last_name = 'Mahan' AND (description like '%Boat%' or title like '%Boat%')
ORDER BY replacement_cost desc

