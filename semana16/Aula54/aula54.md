# Aula 51
##### Relações em SQL

 &nbsp;
 &nbsp;

>**Exercício 1:**
>&nbsp;
>**a)** 
> A ``FOREIGN KEY`` se refere ao relacionamento entre tabelas distintas.

&nbsp;

>**b)**
~~~
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "001", 
  "Filmado por ...",
  1,
  "004"
);
~~~
~~~
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "002", 
  "Filmado e dirigido, por...",
  8,
  "003"
);
~~~
~~~
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "003", 
  "Filmado, dirigido e editado, por...",
  10,
  "002"
);
~~~

&nbsp;

>**c)**
> Não foi possível realizar a ação. Pois não possível atrelar uma ``FOREIGN KEY`` a um ``ID`` inexistente.
> ``Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`db_name`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filme` (`id`))``

&nbsp;

>**d)**
> ``ALTER TABLE Filme DROP COLUMN rating;``

&nbsp;

>**e)**
> Não foi possível realizar a ação. Pois há uma ``FOREIGN KEY`` atrelada ao ``ID``.
>``Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`db_name`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filme` (`id`))``

&nbsp;
&nbsp;

>**Exercício 2:**
>&nbsp;
>**a)** 
> Esta tabela irá fazer a relação de "casting" dos filmes, relacionando os atores aos filmes e vice-versa.

&nbsp;

>**b)**
~~~
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "004",
  "002"
);
~~~
~~~
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "004",
  "006"
);
~~~
~~~
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "004",
  "007"
);
~~~
~~~
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "003",
  "003"
);
~~~
~~~
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "003",
  "006"
);
~~~
~~~
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "004",
  "002"
);
~~~

&nbsp;

>**c)**
> Neste caso não tem como relacionar um ator a um ``id`` de filme  inexistente.
>``Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`db_name`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))``

&nbsp;

>**d)**
> Não é possível deletar o ator sem antes deletar sua relação.
>``Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`db_name`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))``

&nbsp;
&nbsp;

>**Exercício 3:**
>&nbsp;
>**a)** 
> O operador ``ON`` busca dentro da tabela ``Movie`` os ``id``'s que também estão na tabela ``Rating``.

&nbsp;

>**b)**
~~~
SELECT Movie.id, Rating.rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
~~~

&nbsp;
&nbsp;

>**Exercício 4:**
>&nbsp;
>**a)** 
~~~
SELECT Movie.id as movie_id, Movie.titulo, Rating.rate as rating, Rating.comment as rating_comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
~~~

&nbsp;

>**b)**
~~~
SELECT Movie.id as movie_id, Movie.titulo, Rating.rate as rating, Rating.comment as rating_comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
~~~

&nbsp;

>**c)**
~~~
SELECT AVG(Rating.rate) as Média, Movie.id, Movie.titulo FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY (Movie.id);
~~~

&nbsp;
&nbsp;

>**Exercício 5:**
>&nbsp;
>**a)** 
> Com apenas um ``JOIN`` seria possível apenas atrelar duas tabelas ao resultado do ``SELECT`` desta forma é possível fazer a relação entre as 3 tabelas.

&nbsp;

>**b)**
~~~
SELECT m.id as movie_id, m.titulo, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~

&nbsp;

>**c)**
> Neste trecho `` m,title`` há uma "vírgula" onde deveria haver um "."
>``Error Code: 1054. Unknown column 'm' in 'field list'``

&nbsp;

>**d)**

&nbsp;
&nbsp;

>**Exercício 6:**
>&nbsp;
>**a)** 
>

&nbsp;

>**b)**
>

&nbsp;

>**c)**
>

>**d)**
>

---