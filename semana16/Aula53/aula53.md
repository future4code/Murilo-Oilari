# Aula 53
##### Knex e Express

 &nbsp;
 &nbsp;

>**Exercício 1:**
>&nbsp;
>**a)** 
> Ao usarmos o ``raw`` além da consulta solicitada, junto vem diversas outras informações.

 &nbsp;

>**b)**
~~~
const getActorByName = async(name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE "%${name}%"
    `);
    console.log(result[0]);
    return result[0];
};
~~~

&nbsp;

>**c)**
~~~
const countActorsByGender = async(gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as ${gender} FROM Actor WHERE gender = "${gender}";
    `);
    console.log(result[0]);
    return result[0];
};
~~~

&nbsp;
&nbsp;

>**Exercício 2:**
>&nbsp;
>**a)** 
~~~
const updateActorSalary = async (
    newSalary: number,
    actorId: string
): Promise<void> => {
    await connection("Actor")
        .update({salary: newSalary})
        .where({"id": actorId})
};
~~~

&nbsp;

>**b)**
~~~
const deleteActor = async (actorId: string): Promise<void> => {
    await connection("Actor")
        .where({"id": actorId})
        .del();
};
~~~

&nbsp;

>**c)**
~~~
const showGenderAvg = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg(`salary as ${gender}`)
        .where({gender});
    console.log(result[0]);
    return result[0].average;
};
~~~

&nbsp;
&nbsp;

>**Exercício 3:**
>&nbsp;
>**a)** 
> Desta forma o id digitado na barra de endereço é utilizado como parâmetro para a query.

&nbsp;

>**b)**
> Tanto no ``try`` quanto no ``catch`` o response indica o tipo de retorno ``200`` mais a informação num sucesso e ``400`` para o erro.

&nbsp;

>**c)**
~~~
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await countActorsByGender(req.query.gender as string);
        res.status(200).send({
        quantity: count,
    });
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
~~~

&nbsp;
&nbsp;

>**Exercício 4:**
>&nbsp;
>**a)** 
~~~
app.post("/actor", async (req: Request, res: Response) => {
    try {
        await updateActorSalary(req.body.id, req.body.salary);
        res.status(200).send({
        message: "Successo",
    });
    } catch (error) {
        res.status(400).send({
            message: error.message,
    });
    }
});
~~~

&nbsp;

>**b)**
~~~
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id);
    } catch (error) {
        res.status(400).send({
            message: error.message,
    });
    }
});
~~~
