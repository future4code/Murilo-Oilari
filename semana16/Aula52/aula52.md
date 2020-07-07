# Aula 52
##### Aprofundamento SQL

 &nbsp;
 &nbsp;

>**Exercício 1:**
>&nbsp;
>**a)** 
>
> A query ``ALTER TABLE Actor DROP COLUMN salary;`` deleta a linha correspondente a ``salary`` e toda sua informação.
 &nbsp;

>**b)**
>A query ``ALTER TABLE Actor CHANGE gender sex VARCHAR(6);`` altera o nome do campo ``gender`` para ``sex``.

&nbsp;

>**c)**
>Se considerar o exercício anterior, a query ``ALTER TABLE Actor CHANGE gender gender VARCHAR(255);`` terá um erro, pois o campo ``gender`` que pede para ser renomeado, agora se chama ``sex`` devido ao exercício anterior, caso o exercício anterior seja desconsiderado, a quantidade de
caracteres do campo ``gender`` passará de "6" para "255".

&nbsp;

>**d)**
>``ALTER TABLE Actor CHANGE gender gender VARCHAR(100) NOT NULL;``

&nbsp;
&nbsp;

>**Exercício 2:**
>&nbsp;
>**a)** 
~~~
UPDATE Actor
SET 
	name = "Marvin, o Marciano",
	birth_date =  "1983-09-09"
WHERE id = "003"
~~~

&nbsp;

>**b)**
~~~
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
~~~
~~~
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
~~~

&nbsp;

>**c)**
~~~
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";
~~~

&nbsp;
&nbsp;

>**Exercício 3:**
>&nbsp;
>**a)** 
>``DELETE FROM Actor WHERE name = "Fernanda Montenegro";``

&nbsp;

>**b)**
>``DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;``

&nbsp;
&nbsp;

>**Exercício 4:**
>&nbsp;
>**a)** 
>``SELECT MAX(salary) FROM Actor;``

&nbsp;

>**b)**
>``SELECT MIN(salary) FROM Actor WHERE gender = "female";``

&nbsp;

>**c)**
>``SELECT MIN(salary) FROM Actor WHERE gender = "female"``

&nbsp;

>**d)**
>``SELECT SUM(salary) FROM Actor;``

&nbsp;
&nbsp;

>**Exercício 5:**
>&nbsp;
>**a)** 
> A query citada retorna todos os generos e a quantidade de elementos de cada um deles.

&nbsp;

>**b)**
>``SELECT id, name FROM Actor ORDER BY name DESC;``

&nbsp;

>**c)**
>``SELECT * FROM Actor ORDER BY salary;``

&nbsp;

>**d)**
~~~
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
~~~

&nbsp;

>**e)**
>``SELECT AVG(salary), gender FROM Actor GROUP BY gender;``

&nbsp;
&nbsp;

>**Exercício 6:**
>&nbsp;
>**a)** 
>``ALTER TABLE Filme ADD playing_limit_date DATE;``

&nbsp;

>**b)**
>``ALTER TABLE Filme CHANGE rating FLOAT NOT NULL;``

&nbsp;

>**c)**
~~~
UPDATE Filme
SET playing_limit_date = "2020-08-19"
WHERE id = "004";
~~~
~~~
UPDATE Filme
SET playing_limit_date = "2030-01-25"
WHERE id = "003";
~~~

&nbsp;

>**d)**
> Ele aparentemente passa, o sinal de check fica positivo no Workbench, porém junto vem a mensagem de que "0" linhas foram afetadas pelo
> ``UPDATE`` e ao ver a tabela, nada foi alterado.

&nbsp;
&nbsp;

>**Exercício 7:**
>&nbsp;
>**a)** 
>``SELECT COUNT(*) FROM Filme WHERE rating > 7.5;``

&nbsp;

>**b)**
>``SELECT AVG(rating) FROM Filme;``

&nbsp;

>**c)**
>``SELECT COUNT(*) FROM Filme WHERE playing_limit_date > CURDATE();``

&nbsp;

>**d)**
>``SELECT COUNT(*) FROM Filme WHERE lancamento > CURDATE();``

&nbsp;

>**e)**
>``SELECT MAX(rating) FROM Filme;``

&nbsp;

>**f)**
``SELECT MIN(rating) FROM Filme;``

&nbsp;
&nbsp;

>**Exercício 8:**
>&nbsp;
>**a)** 
>``SELECT * FROM Filme ORDER BY titulo ASC;``

&nbsp;

>**b)**
>``SELECT * FROM Filme ORDER BY titulo DESC LIMIT 5;``

&nbsp;

>**c)**
>``SELECT * FROM Filme ORDER BY lancamento DESC LIMIT 3;``

&nbsp;

>**d)**
>``SELECT * FROM Filme ORDER BY rating DESC LIMIT 3;``