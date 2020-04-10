/** AULA 14 - DOM
 * 
 * 
 *  Exercícios de leitura de código
 *
 *  1. A função conversorDeMoeda é invocada com um parametro de número e recebe do prompt o valor do dolar 
 *  do dia na variável cotação, e retorna o valor informado na chamada da função X a cotação, desta forma 
 *  retornando em Reais o valor em Dollar.
 * 
 *  2. A função investeDinheiro()  recebe dois parametros: tipoDeInvestimento e valor, o primeiro sendo uma 
 *  String e o outro um Number.
 *  Ao ser invocada ela inicia a variavel valorAposInvestimento, não lhe atribuindo nenhum valor.
 *  Em seguida vem condicional switch usando como parametro o tipoDeInvestimento nos seguintes casos:
 *  Poupança onde o valorAposInvestimento recebe o parametro valor que será multiplicado por 1.03; 
 *  Renda Fixa onde o valorAposInvestimento recebe o parametro valor que será multiplicado por 1.05; 
 *  CDB onde o valorAposInvestimento recebe o parametro valor que será multiplicado por 1.06; 
 *  Ações onde o valorAposInvestimento recebe o parametro valor que será multiplicado por 1.1; 
 *  Demais parametors caemno alerta default "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
 *  Retorando assim o valorAposInvestimento
 *  Desta forma quando novoMontante usa a função e lhe passa os parametros "Acões, 150"
 *  e segundoMontante "Tesouro Direto, 200" terão as segintes respostas respctivas: 165 e "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
 * 
 *  3. 3 Arrays são inicializadas, sendo "numeros" preenchida com numeros e array1 e array2 vazias.
 *  em sequncia o comando for percorre a Array "numeros" e copia para a array1 os pares e para a array2 os ímpares.
 *  imprimindo abaixo a quantidade de números em cada Array:
 *  numeros = 14;
 *  array1 = 6;
 *  array2 = 8;
 * 
 *  4. São iniciadas uma Array "numeros" com diversos números, e duas constatantes, "numero1" e "numero2" contendo "Infinity" e "0" 
 *  respctivamente.
 *  A seguir é iniciado um "for" criando a variável "numero" e percorrendo a Array "numeros";
 *  Se um "numero" for menor que "numero1" (neste inicio um número positivo maior que todos), então ao "numero1" é atribuido o valor de "numero"
 *  (neste inicio o número 25), desta forma o "numero" irá preencher "numero1" sempre com o menor número percorrido pelo "for" na Array.
 *  Se um "numero" for maior que "numero2" (neste inicio o numero zero), então ao "numero2" é atribuido o valor de "numero" (neste inicio o 
 *  número 25), desta forma o "numero" irá preencher "numero2" sempre com o maior número percorrido pelo "for" na Array.
 * 
 */