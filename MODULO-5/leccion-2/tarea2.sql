--1. A quién(es) le debe más dinero y cuánto
SELECT nombre, le_debo 
FROM finanzas_personales  
ORDER BY le_debo DESC 
LIMIT 1;

--2. Quién(es) le debe más dinero a ud. y cuánto
SELECT nombre, me_debe 
FROM finanzas_personales 
ORDER BY me_debe DESC 
LIMIT 1;

--3. Cuánto dinero debe en total
SELECT SUM(le_debo) AS "Me deben" 
FROM finanzas_personales;

--4. Cuánto dinero debe en promedio.
SELECT AVG(le_debo) AS "Promedio debo" 
FROM finanzas_personales;

--5. Suponiendo que no puede pagar más de una cuota al mes. ¿Cuántos meses demoraría en saldar su deuda?
SELECT SUM(cuotas_pagar) / 12 AS años, SUM(cuotas_pagar) % 12 AS meses 
FROM finanzas_personales;

/*
6. Suponga  que logar cobrar  todo lo  que le  deben  en  un mismo día y
decide usar todo eso para pagar lo que se pueda de su deuda.
*/
--A) ¿A cuánto ascendería su nueva deuda reducida?
select  sum(le_debo )- sum(me_debe ) as "deuda reducida" 
from finanzas_personales;

--b) ¿Cuánto tendría que pagar mensualmente para pagar todo lo que resta en las cuotas ya acordadas?
select (sum(le_debo)- sum(me_debe))/sum(cuotas_pagar) as "Valor cuota" 
from finanzas_personales;


--7. Insertar un nuevo registro en la tabla. a tu pareja le debes 50 lucas
insert into finanzas_personales (nombre, me_debe, cuotas_cobrar, le_debo, cuotas_pagar) 
values('pareja',0, 0, 50000, 1);

--8.¿De cuánto será la cuota a pagar este mes? 

SELECT SUM( le_debo/ cuotas_pagar) AS "Cuota total mes" 
FROM finanzas_personales 
WHERE cuotas_pagar >0;

--9. Realizar el update en la tabla. actualizar almacén de la esquina con 13 cuotas

update finanzas_personales set cuotas_pagar = 13 where nombre = 'almacén esquina';

--10. Ahora  que  realizaste  este  ajuste ¿De cuánto será la cuota a pagar este mes? 
SELECT SUM( le_debo/ cuotas_pagar) AS "Cuota total mes" 
FROM finanzas_personales WHERE cuotas_pagar >0;