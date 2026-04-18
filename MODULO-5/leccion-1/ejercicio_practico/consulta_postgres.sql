DELETE FROM public.clientes;
INSERT INTO clientes (rut, nombre, edad) VALUES
('12122122-2', 'Pepa', 33),
('13133133-3', 'Diego', 21),
('13675924-7', 'Mario', 85),
('14144251-1', 'Paula', 35),
('16555444-1', 'Muruela', 22),
('18188188-8', 'Pato', 44);

SELECT * FROM public.clientes;

--R1
SELECT * FROM clientes
WHERE rut = '13133133-3';

--R2
SELECT * FROM clientes
WHERE edad > 25;

--R3
SELECT * FROM clientes
WHERE nombre NOT ILIKE 'mario';

--R4
SELECT * FROM clientes
WHERE rut LIKE '13%';

--R5
SELECT * FROM clientes
WHERE nombre ILIKE '%a';

--R6
SELECT * FROM clientes
WHERE nombre ILIKE 'P%' AND edad > 34;

--R7
SELECT * FROM clientes
WHERE rut LIKE '1%'
  AND nombre NOT ILIKE 'M%'
  AND edad < 40;
  
--R8
SELECT * FROM clientes
WHERE (rut LIKE '13%' OR rut LIKE '%1')
  AND nombre IN ('Diego','Mario','Pato','Pepa')
  AND edad BETWEEN 20 AND 80;
