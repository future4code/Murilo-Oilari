# Aula 51
##### Banco de Dados e Introdução a SQL

 &nbsp;
 &nbsp;

>**Exercício 1:**
>&nbsp;
>**a)** 
>Os outros comandos usados são:
 - VARCHAR - caracteres de tamanho variável
 - PRIMARY KEY - chave primária / identificador
 - NOT - operador de negação
 - NULL - identificador de nulidade (não existência)
 - DATE - usado para armazenar datas

 &nbsp;

>**b)**
>``SHOW DATABASE`` Mostra as bases de dados no Schema selecionado;
>``SHOW TABLES`` Mostra as tabelas criadas na base selecionada.

&nbsp;

>**c)**
>Tanto o comando ``DESCRIBE`` quanto o ``SHOW Actor`` dão erro.

&nbsp;
&nbsp;

>**Exercício 2:**
>&nbsp;
>**a)** 
~~~
INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23"
);
~~~

&nbsp;

>**b)**
>Escrevendo outro elemento com o mesmo ID do anterior, citado na "a" não gera nenhum erro, pois o ``INSERT`` não possui "gender" e o mesmo não pode ser ``NULL`` para a criação do elemento.

&nbsp;

>**c)**
>Ao passar o ``INSERT`` faltaram os parâmetros "birth_date" e "gender", como abaixo:
~~~correção
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~

&nbsp;

>**d)**
>Falta o "name" tanto no ``INSERT`` quanto no ``VALUE``, segue a forma correta:
~~~
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
~~~

&nbsp;

>**e)**
>Estva sem "aspas" ao passar o ``VALUE`` "birth_date", segue correção abaixo:
~~~
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
~~~

&nbsp;

>**f)**
>Seguem os novos atores adicionados:
~~~
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "María Antonieta de las Nieves",
  50000,
  "1950-12-22", 
  "female"
);
~~~
~~~
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",
  "Ramón Valdés",
  140,
  "1923-09-02", 
  "male"
);
~~~

&nbsp;
&nbsp;

>**Exercício 3:**
>&nbsp;
>**a)** 
>``SELECT * from Actor WHERE gender = "female";``

&nbsp;

>**b)**
>``SELECT salary from Actor WHERE name = "Tony Ramos";``

&nbsp;

>**c)**
>``SELECT * from Actor WHERE gender = "invalid";``
>Não há nenhum resultado, pois "gender" estava como ``NOT NULL`` logo, deveria ser declarado, todos os "Actors" que tentaram ser cadastrados sem gender ou no ``INSERT`` ou em seu ``VALUE`` triveram erro como resposta.

&nbsp;

>**d)**
>``SELECT id, name, salary from Actor WHERE salary <= 500000;``

&nbsp;

>**e)**
>O erro ocorre pois foi declarado como ``name`` e está sendo buscado como "nome",
>segue correção:
>``SELECT id, name from Actor WHERE id = "002";``

&nbsp;
&nbsp;

>**Exercício 4:**
>&nbsp;
>**a)** 
>``SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;``
>A query acima seleciona todos os parâmetros retornados da tabela ``Actor`` onde o nome se inicia com "A" ou "J" e com o salário acima de 300.000,00.

&nbsp;

>**b)**
>``SELECT * FROM Actor 
>WHERE (name NOT LIKE "A%") AND salary > 350000;``

&nbsp;

>**c)**
>``SELECT * FROM Actor WHERE (name LIKE "%G%" or name LIKE "%g%");``

&nbsp;

>**d)**
>``SELECT * FROM Actor 
>WHERE
>((name LIKE "%A%" or name LIKE "%a%") OR
>(name LIKE "%G%" or name LIKE "%g%")) AND 
>salary BETWEEN 350000 AND 900000;``

&nbsp;
&nbsp;

>**Exercício 5:**
>&nbsp;
>**a)** 
>Tabela de fimes criada como abaixo mostra, ``id`` - sendo um "varchar", armazenado caracteres de tamanho variável, da mesma forma que o ``titulo``, ``sinopse`` sendo do tipo "text" onde tem mair capacidade de armazenar texto que o "varchar", ``lancamento`` sendo um "date" para armazenar a data de lançamento do título e ``avaliacao`` sendo um numero inteiro contendo a nota do filme.
~~~
CREATE TABLE Filme (
	id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
~~~

&nbsp;

>**b)**
~~~
INSERT INTO Filme (id, titulo, sinopse, lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a 
  rotina do casamento. Um dia eles são atingidos por um fenômeno 
  inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
~~~

&nbsp;

>**c)**
~~~
INSERT INTO Filme (id, titulo, sinopse, lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, 
  sempre causa grandes confusões. A vida dela e dos 
  seus quatro filhos sofre uma reviravolta depois que 
  Zaida, empregada e amiga de Dona Picucha, anuncia que 
  vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
~~~

&nbsp;

>**d)**
~~~
INSERT INTO Filme (id, titulo, sinopse, lancamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de 
  culinária casada com Vadinho, que só quer saber de 
  farras e jogatina nas boates. A vida de abusos acaba 
  por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
~~~

&nbsp;

>**e)**
~~~
INSERT INTO Filme (id, titulo, sinopse, lancamento, avaliacao)
VALUES(
  "004", 
  "Cinderela Baiana",
  "Uma família pobre, mora em uma cidade perto de Salvador. 
  O pai é faxineiro e, a mãe e a filha ajudam fazendo pequenos 
  serviços. Até que decidem tentar a sorte na cidade grande e o 
  pai, Raimundo, arruma um emprego perto do Pelourinho, ao lado 
  de uma academia de dança. A filha, Carla, ao ficar em contato 
  com a música, descobre sua verdadeira vocação e se torna uma 
  dançarina de muito sucesso. Mas ela não deixa se levar pela 
  fama e volta para suas origens, reúne-se com crianças pobres e 
  as ensina a dançar.",
  "1998-09-04", 
  1
);
~~~

&nbsp;
&nbsp;

>**Exercício 6:**
>&nbsp;
>**a)** 
>``SELECT id, titulo, avaliacao from Filme WHERE id = "002";``

&nbsp;

>**b)**
>``SELECT * from Filme WHERE titulo = "Dona Flor e Seus Dois Maridos";``

&nbsp;

>**c)**
>``SELECT id, titulo, sinopse from Filme WHERE avaliacao >= 7;``

&nbsp;
&nbsp;

>**Exercício 6:**
>&nbsp;
>**a)** 
>``SELECT * from Filme WHERE (titulo LIKE "%vida%");``

&nbsp;

>**b)**
>``SELECT * FROM Filme 
>WHERE (titulo LIKE "%flor%")
>OR (sinopse LIKE "%flor%")``

&nbsp;

>**c)**
>``SELECT * from Filme WHERE lancamento <= CURDATE();``

&nbsp;

>**d)**
>``SELECT * from Filme WHERE lancamento <= CURDATE()
>AND ((titulo LIKE "%flor%") OR (sinopse LIKE "%flor%"))
>AND (avaliacao > 7);``