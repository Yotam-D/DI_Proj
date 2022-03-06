-- INSERT INTO public.purchases
-- (quantity_purchased,purchased_customer_id,purchased_item_id) 
-- VALUES
-- (1,
--  (select customer_id from customers where first_name='Scott'),
--  (select item_id from items where item_name = 'Fan')
-- )
-- (10,
--  (select customer_id from customers where first_name='Melanie'),
--  (select item_id from items where item_name = 'Large Desk')
-- )
-- (2,
--  (select customer_id from customers where first_name='Greg' and last_name = 'Jones'),
--  (select item_id from items where item_name = 'Small Desk')
-- )


-- select purchase_id, quantity_purchased, purchased_customer_id, purchased_item_id
-- from purchases

-- select purchase_id, quantity_purchased, purchased_customer_id, purchased_item_id, first_name, last_name
-- from purchases JOIN customers on purchases.purchased_customer_id = customers.customer_id

-- select purchase_id, quantity_purchased, purchased_customer_id, purchased_item_id 
-- from purchases
-- where purchased_customer_id = 5

-- select purchase_id, quantity_purchased, purchased_customer_id, purchased_item_id, item_name
-- from purchases join items on purchases.purchased_item_id = items.item_id
-- where item_name = 'Large Desk' or item_name = 'Small Desk'

-- select first_name, last_name, item_name
-- from customers 
-- join purchases on customers.customer_id=purchases.purchased_customer_id
-- join items on purchases.purchased_item_id = items.item_id

-- insert into purchases
-- (purchase_id, quantity_purchased, purchased_customer_id)
-- OVERRIDING SYSTEM VALUE
-- values
-- (6, 4, 2)






