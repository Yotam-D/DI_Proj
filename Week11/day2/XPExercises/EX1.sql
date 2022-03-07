-- -- Get a list of all film languages.

-- select distinct public.film.language_id, name
-- from public.film join public.language
-- on public.film.language_id = public.language.language_id

-- -- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- select distinct film.title,film.description, name
-- from public.film join public.language
-- on public.film.language_id = public.language.language_id

-- select distinct film.title,film.description, name
-- from public.language left join public.film
-- on public.language.language_id = public.film.language_id


-- -- Get all films, even if they don’t have languages.
-- select distinct film.title,film.description, name
-- from public.film left join public.language
-- on public.film.language_id = public.language.language_id


-- -- Get all languages, even if there are no films in those languages.
-- select film.title,film.description, name
-- from public.film right join public.language
-- on public.film.language_id = public.language.language_id


-- -- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- create table myFilms (
-- ID SERIAL PRIMARY KEY,
-- name VARCHAR(50) NOT NULL
-- )
-- insert into myFilms (name) values 
-- ('The Prestige'),
-- ('The Matrix: Reloaded'),
-- ('Dont Look Up'),
-- ('Inception')



-- -- Create a new table called customer_review, which will contain film reviews that customers will make.
-- -- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- -- It should have the following columns:
-- -- review_id – a primary key, non null, auto-increment.
-- -- film_id – references the new_film table. The film that is being reviewed.
-- -- language_id – references the language table. What language the review is in.
-- -- title – the title of the review.
-- -- score – the rating of the review (1-10).
-- -- review_text – the text of the review. No limit on the length.
-- -- last_update – when the review was last updated.

-- create table customer_review (
-- review_id SERIAL PRIMARY KEY,
-- film_id INTEGER,
-- language_id INTEGER,
-- title varchar(50),
-- score SMALLINT,
-- review_text text,
-- last_update DATE,
-- foreign key(film_id) references myfilms(id) on delete cascade,
-- foreign key(language_id) references language(language_id)
-- )


-- -- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- insert into customer_review 
-- (film_id, language_id, title, score, review_text, last_update)
-- values
-- (1,1,'The Prestige - Review', 7, 'Good Performance by the main actors, a surprising plot line and a very fun to watch movie', '2022-03-07' ),
-- (3,1, 'Dont Look UP - Review', 6, 'interesting point of view on the American society, bit too long', '2022-03-07' )


-- -- Delete a film that has a review from the new_film table, what happens to the customer_review table? got deleted as well..

-- delete from myfilms where id = 3



